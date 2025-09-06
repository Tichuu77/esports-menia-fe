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
import actions from 'src/modules/invites/dashboard/invitesDashboardListActions';
import selectors from 'src/modules/invites/dashboard/invitesDashboardSelectors';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import * as yup from 'yup';
import UserAutocompleteFormItem from 'src/view/user/autocomplete/UserAutocompleteFormItem';
 
const schema = yup.object().shape({
 user: yupFilterSchemas.relationToOne(
    i18n('user.fields.user'),
  ),
});

const emptyValues:any = {
  user: null,
};

const previewRenders = {
 user:{
    label: i18n('user.fields.user'),
    render: filterRenders.relationToOne(),
 },
};

function InviteDashboardFilter(props:any) {
  type FilterKeys = 'user';
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

  // useEffect(() => {
  //   dispatch(
  //     actions.doFetch(
  //       schema.cast(initialValues),
  //       rawFilter,
  //     )as any,
  //   );
  //   // eslint-disable-next-line
  // }, [dispatch]);

  const onSubmit = (values:any) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues)as any);
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
     form.setValue(key, emptyValues[key as FilterKeys]);
    });
    dispatch(actions.doReset()as any);
    setExpanded(false);
  };

  const onRemove = (key:string) => {
    form.setValue(key,  emptyValues[key as FilterKeys]);
    return form.handleSubmit(onSubmit)();
  };

  const { loading } = props;

  return (
    <div className="border-gray-200 dark:border-gray-600 border rounded-md mb-2">
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className={`${expanded ? 'block' : 'hidden'}`}>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="pl-4 pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <UserAutocompleteFormItem
               name={'user'}
               label={i18n('user.fields.user')}
              />

             
            </div>

            <div className="px-4 py-2 text-right">
              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                type="submit"
                disabled={loading}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faSearch}
                />
                {i18n('common.search')}
              </button>
              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                type="button"
                onClick={onReset}
                disabled={loading}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faUndo}
                />
                {i18n('common.reset')}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default InviteDashboardFilter;
