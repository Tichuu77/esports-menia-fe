import { i18n } from 'src/i18n';

function UserStatusViewMobile(props : { value: string }) {
  const { value } = props;

  if (!value) {
    return null;
  }

  if (value === 'active') {
    return (
      <span className=" text-green-500  dark:text-green-100 font-medium  text-sm ">
        {i18n('user.status.active')}
      </span>
    );
  }

  if (value === 'empty-permissions') {
    return (
      <span className=" text-red-500   dark:text-red-100 font-medium  text-sm  ">
        {i18n('user.status.empty-permissions')}
      </span>
    );
  }

  if (value === 'blocked') {
    return (
      <span className="  text-gray-500   dark:text-gray-100 font-medium   text-sm  ">
        {i18n('user.status.blocked')}
      </span>
    );
  }

  if (value === 'accept') {
    return (
      <span className=" text-green-500  dark:text-green-100 font-medium  text-sm  ">
        {i18n('user.status.accept')}
      </span>
    );
  }

  return (
    <span className="  text-yellow-500  dark:text-yellow-100 font-medium  text-sm  ">
      {i18n('user.status.invited')}
    </span>
  );

}

export default UserStatusViewMobile;
