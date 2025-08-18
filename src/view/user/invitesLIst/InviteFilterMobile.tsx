import {
  faSearch,
  faUndo,
  faFilter,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import actions from 'src/modules/user/invitesLIst/invitesListAction';
import selectors from 'src/modules/user/invitesLIst/inviteListSelectors';
import userEnumerators from 'src/modules/user/userEnumerators';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  fullName: yupFilterSchemas.string(i18n('user.fields.fullName')),
  email: yupFilterSchemas.email(i18n('user.fields.email')),
  role: yupFilterSchemas.enumerator(i18n('user.fields.email')),
  status: yupFilterSchemas.enumerator(i18n('user.fields.status')),
});

type FilterKeys = 'fullName' | 'email' | 'status';

const emptyValues: Record<FilterKeys, null> = {
  fullName: null,
  email: null,
  status: null,
};

function InviteFilterMobile(props: any) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

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
      actions.doFetch(schema.cast(initialValues), rawFilter) as any,
    );
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values: any) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues) as any);
    setIsOpen(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key as FilterKeys]);
    });
    dispatch(actions.doReset() as any);
    setIsOpen(false);
  };

  const { loading } = props;

  // Count active filters
  const activeFilters = Object.values(rawFilter || {}).filter(value => 
    value !== null && value !== undefined && value !== ''
  ).length;

  return (
    <>
      {/* Filter Button */}
      <div className=" flex  md:hidden">
        <button
          onClick={() => setIsOpen(true)}
           className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-black transition-colors duration-200 transform     focus:text-gray-600 md:px-4 md:py-2 md:text-sm w-10 h-10 md:w-auto md:h-auto flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faFilter} className="mr-2" />
          {activeFilters > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {activeFilters}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Filter Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-start justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Modal content */}
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-lg">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {i18n('common.filters')}
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>

              {/* Form */}
              <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <InputFormItem
                    name={'email'}
                    label={i18n('user.fields.email')}
                  />

                  <InputFormItem
                    name={'fullName'}
                    label={i18n('user.fields.fullName')}
                  />

                  <SelectFormItem
                    name={'status'}
                    label={i18n('user.fields.status')}
                    options={userEnumerators.inviteStatus.map((value) => ({
                      value,
                      label: i18n(`user.status.${value}`),
                    }))}
                  />

                  {/* Action buttons */}
                  <div className="flex flex-col space-y-2 pt-4">
                    <button
                      className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      type="submit"
                      disabled={loading}
                    >
                      <FontAwesomeIcon className="mr-2" icon={faSearch} />
                      {i18n('common.search')}
                    </button>
                    <button
                      className="w-full px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
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
        </div>
      )}
    </>
  );
}

export default InviteFilterMobile;