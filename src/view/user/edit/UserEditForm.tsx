import { faSave } from '@fortawesome/free-regular-svg-icons';
import {
  faTimes,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import actions from 'src/modules/user/form/userFormActions';
import userEnumerators from 'src/modules/user/userEnumerators';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  roles: yupFormSchemas.stringArray(
    i18n('user.fields.roles'),
  ),
  status: yupFormSchemas.enumerator(
    i18n('user.fields.status'),
    {
      options: userEnumerators.status,
      required: true,
    },
  ),
});

function UserEditForm(props:any) {
  const dispatch = useDispatch();
   const navigate = useNavigate();
  const { saveLoading } = props;

  console.log('user', props.user);

  const [initialValues] = useState(() => props.user || {});

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values:any) => {
    const data = {
      id: props.user.id,
      ...values,
    };
    delete data.email;
    dispatch(actions.doUpdate(data,navigate)as any);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full md:w-md lg:w-md">
          <label className="block text-sm text-gray-800 dark:text-gray-200">
            {i18n('user.fields.email')}
          </label>
          <div className="mt-1">{props.user.email}</div>
        </div>

        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="roles"
            label={i18n('user.fields.roles')}
            options={userEnumerators.roles.map((value) => ({
              value,
              label: i18n(`roles.${value}.label`),
            }))}
            mode="multiple"
          />
        </div>

        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="status"
            label={i18n('user.fields.status')}
            options={userEnumerators.status.map((value) => ({
              value,
              label: i18n(`user.status.${value}`),
            }))}
          />
        </div>

        <div className="pt-4">
          <button
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            disabled={saveLoading}
            type="button"
            onClick={form.handleSubmit(onSubmit)}
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faSave}
            />
            {i18n('common.save')}
          </button>

          <button
            disabled={saveLoading}
            onClick={onReset}
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            type="button"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faUndo}
            />
            {i18n('common.reset')}
          </button>

          {props.onCancel ? (
            <button
              disabled={saveLoading}
              onClick={() => props.onCancel()}
              className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              type="button"
            >
              <FontAwesomeIcon
                className="mr-2"
                icon={faTimes}
              />
              {i18n('common.cancel')}
            </button>
          ) : null}
        </div>
      </form>
    </FormProvider>
  );
}

export default UserEditForm;
