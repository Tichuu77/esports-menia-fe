import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import actions from 'src/modules/user/invitesLIst/invitesListAction';
import selectors from 'src/modules/user/invitesLIst/inviteListSelectors';
import userEnumerators from 'src/modules/user/userEnumerators';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  fullName: yupFilterSchemas.string(
    i18n('user.fields.fullName'),
  ),
  email: yupFilterSchemas.email(i18n('user.fields.email')),
  role: yupFilterSchemas.enumerator(
    i18n('user.fields.email'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('user.fields.status'),
  ),
});

const emptyValues = {
  fullName: null,
  email: null,
  status: null,
};

const previewRenders = {
  fullName: {
    label: i18n('user.fields.fullName'),
    render: filterRenders.generic(),
  },
  email: {
    label: i18n('user.fields.email'),
    render: filterRenders.generic(),
  },
  status: {
    label: i18n('user.fields.status'),
    render: filterRenders.enumerator('user.status'),
  },
};

function InviteFilter(props: any) {
  type FilterKeys = 'fullName' | 'email' | 'status';
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(
      actions.doFetch(
        schema.cast(initialValues),
        rawFilter,
      ) as any,
    );
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values: any) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues) as any);
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key as FilterKeys]);
    });
    dispatch(actions.doReset() as any);
    setExpanded(false);
  };

  const onRemove = (key: string) => {
    form.setValue(key, emptyValues[key as FilterKeys]);
    return form.handleSubmit(onSubmit)();
  };

  const { loading } = props;

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg shadow-sm mb-6 overflow-hidden transition-all duration-200 hover:shadow-md">
      {/* Filter Preview Header */}
      <div className="bg-gray-50 border-b border-gray-100">
        <FilterPreview
          onClick={() => {
            setExpanded(!expanded);
          }}
          renders={previewRenders}
          values={rawFilter}
          expanded={expanded}
          onRemove={onRemove}
        />
      </div>

      {/* Filter Form Content */}
      <div className={`transition-all duration-300 ease-in-out ${expanded ? 'block' : 'hidden'}`}>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white">
            {/* Form Fields Grid */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <InputFormItem
                  name={'email'}
                  label={i18n('user.fields.email')}
                />

                <InputFormItem
                  name={'fullName'}
                  label={i18n('user.fields.fullName')}
                />

                <div className="md:col-span-1">
                  <SelectFormItem
                    name={'status'}
                    label={i18n('user.fields.status')}
                    options={userEnumerators.inviteStatus.map(
                      (value) => ({
                        value,
                        label: i18n(`user.invite.status.${value}`),
                      }),
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-gray-50 border-t border-gray-100 px-6 py-4 flex justify-end space-x-3">
              {/* Reset Button */}
              <button
                className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-200"
                type="button"
                onClick={onReset}
                disabled={loading}
              >
                <FontAwesomeIcon
                  className="mr-2 text-gray-600"
                  icon={faUndo}
                />
                {i18n('common.reset')}
              </button>

              {/* Search Button */}
              <button
                className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-blue-500 border-2 border-blue-500 rounded-lg transition-all duration-200 hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500 disabled:hover:border-blue-500"
                type="submit"
                disabled={loading}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faSearch}
                />
                {loading ? 'Searching...' : i18n('common.search')}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
          <div className="flex items-center space-x-2 text-blue-600">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm font-medium">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default InviteFilter;