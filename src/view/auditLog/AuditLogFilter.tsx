import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from 'react';
import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import queryString from 'query-string';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auditLog/auditLogActions';
import selectors from 'src/modules/auditLog/auditLogSelectors';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TagsFormItem from 'src/view/shared/form/items/TagsFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  timestampRange: yupFilterSchemas.datetimeRange(
    i18n('auditLog.fields.timestampRange'),
  ),
  entityNames: yupFilterSchemas.stringArray(
    i18n('auditLog.fields.entityNames'),
  ),
  entityId: yupFilterSchemas.string(
    i18n('auditLog.fields.entityId'),
  ),
  action: yupFilterSchemas.string(
    i18n('auditLog.fields.action'),
  ),
  createdByEmail: yupFilterSchemas.email(
    i18n('auditLog.fields.createdByEmail'),
  ),
});

const emptyValues = {
  timestampRange: [] as any[],
  entityNames: [] as string[],
  entityId: null as string | null,
  action: null as string | null,
  createdByEmail: null as string | null,
};

const previewRenders = {
  timestampRange: {
    label: i18n('auditLog.fields.timestampRange'),
    render: filterRenders.datetimeRange(),
  },
  entityNames: {
    label: i18n('auditLog.fields.entityNames'),
    render: filterRenders.stringArray(),
  },
  entityId: {
    label: i18n('auditLog.fields.entityId'),
    render: filterRenders.generic(),
  },
  action: {
    label: i18n('auditLog.fields.action'),
    render: filterRenders.generic(),
  },
  createdByEmail: {
    label: i18n('auditLog.fields.createdByEmail'),
    render: filterRenders.generic(),
  },
};

type Props = {
  loading?: boolean;
};

function AuditLogFilter({ loading }: Props) {
  const dispatch = useDispatch();
  const location = useLocation();

  const rawFilter = useSelector(selectors.selectRawFilter, shallowEqual);

  const [expanded, setExpanded] = useState(false);

  // Parse query only when it changes
  const queryFilters = useMemo(
    () => queryString.parse(location.search),
    [location.search],
  );

  // Compute initial values just once per rawFilter/query change
  const initialValues = useMemo(() => {
    const values = {
      ...emptyValues,
      ...rawFilter,
    };

    let entityNames =
      (queryFilters.entityNames as string | string[] | undefined) ??
      values.entityNames;

    if (entityNames && !Array.isArray(entityNames)) {
      entityNames = [entityNames];
    }

    return {
      ...values,
      entityNames,
      entityId:
        (queryFilters.entityId as string | undefined) ??
        values.entityId,
      createdByEmail:
        (queryFilters.createdByEmail as string | undefined) ??
        values.createdByEmail,
    };
  }, [rawFilter, queryFilters]);

  const didFetchOnMount = useRef(false);

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'onSubmit', // less validation churn than 'all'
  });

  // First fetch – once
  useEffect(() => {
    if (didFetchOnMount.current) return;
    didFetchOnMount.current = true;
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter) as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const onSubmit = useCallback(
    (values: typeof initialValues) => {
      const rawValues = form.getValues();
      dispatch(actions.doFetch(values, rawValues) as any);
      setExpanded(false);
    },
    [dispatch, form],
  );

  const onReset = useCallback(() => {
    form.reset(emptyValues);
    dispatch(actions.doReset() as any);
    setExpanded(false);
  }, [dispatch, form]);

  const onRemove = useCallback(
    (key: keyof typeof emptyValues) => {
      form.setValue(key as any, emptyValues[key]);
      return form.handleSubmit(onSubmit)();
    },
    [form, onSubmit],
  );

  return (
    <div className="border-gray-200 dark:border-gray-600 border rounded-md mb-2">
      <FilterPreview
        onClick={() => setExpanded((e) => !e)}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />

      <div className={expanded ? 'block' : 'hidden'}>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="pl-4 pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <DatePickerRangeFormItem
                name="timestampRange"
                label={i18n('auditLog.fields.timestampRange')}
                showTimeInput
              />

              <InputFormItem
                name="createdByEmail"
                label={i18n('auditLog.fields.createdByEmail')}
              />

              <TagsFormItem
                name="entityNames"
                label={i18n('auditLog.fields.entityNames')}
                notFoundContent={i18n('auditLog.entityNamesHint')}
              />

              <InputFormItem
                name="entityId"
                label={i18n('auditLog.fields.entityId')}
              />

              <InputFormItem
                name="action"
                label={i18n('auditLog.fields.action')}
              />
            </div>

            <div className="px-4 py-2 text-right">
              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                type="submit"
                disabled={loading}
              >
                <FontAwesomeIcon className="mr-2" icon={faSearch} />
                {i18n('common.search')}
              </button>

              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                type="button"
                onClick={onReset}
                disabled={loading}
              >
                <FontAwesomeIcon className="mr-2" icon={faUndo} />
                {i18n('common.reset')}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default React.memo(AuditLogFilter);
