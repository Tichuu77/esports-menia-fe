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
      {/* Filter Button - Mobile Only */}
      <div className="flex md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="relative inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
        >
          <FontAwesomeIcon icon={faFilter} className="mr-2 text-gray-600" />
          Filters
          {activeFilters > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
              {activeFilters}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Filter Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-start justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background Overlay */}
            <div 
              className="fixed inset-0 transition-opacity bg-black bg-opacity-50"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Modal Content */}
            <div className="inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faFilter} className="text-blue-600 text-sm" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Filter Options
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-sm" />
                </button>
              </div>

              {/* Active Filters Counter */}
              {activeFilters > 0 && (
                <div className="px-6 py-3 bg-blue-50 border-b border-blue-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-700">
                      {activeFilters} filter{activeFilters !== 1 ? 's' : ''} active
                    </span>
                  </div>
                </div>
              )}

              {/* Form Content */}
              <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="px-6 py-6">
                  <div className="space-y-6">
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
                        label: i18n(`user.invite.status.${value}`),
                      }))}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-3 pt-8">
                    <button
                      className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-500 border-2 border-blue-500 rounded-lg transition-all duration-200 hover:bg-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500"
                      type="submit"
                      disabled={loading}
                    >
                      <FontAwesomeIcon className="mr-2" icon={faSearch} />
                      {loading ? 'Searching...' : 'Apply Filters'}
                    </button>
                    
                    <button
                      className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
                      type="button"
                      onClick={onReset}
                      disabled={loading}
                    >
                      <FontAwesomeIcon className="mr-2 text-gray-600" icon={faUndo} />
                      Clear All Filters
                    </button>
                  </div>
                </form>
              </FormProvider>

              {/* Loading Overlay */}
              {loading && (
                <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
                  <div className="flex items-center space-x-3 text-blue-600">
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-sm font-medium">Applying filters...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InviteFilterMobile;