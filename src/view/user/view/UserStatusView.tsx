import { i18n } from 'src/i18n';

function UserStatusView(props : { value: string }) {
  const { value } = props;

  if (!value) {
    return null;
  }

  if (value === 'active') {
    return (
      <span className="bg-green-500 text-white dark:bg-green-800 dark:text-green-100 font-medium py-1 px-2 text-sm rounded-lg">
        {i18n('user.status.active')}
      </span>
    );
  }

  if (value === 'empty-permissions') {
    return (
      <span className="bg-red-500 text-white dark:bg-red-800 dark:text-red-100 font-medium py-1 px-2 text-sm rounded-lg">
        {i18n('user.status.empty-permissions')}
      </span>
    );
  }

  if (value === 'blocked') {
    return (
      <span className="bg-gray-500 text-white dark:bg-gray-800 dark:text-gray-100 font-medium py-1 px-2 text-sm rounded-lg">
        {i18n('user.status.blocked')}
      </span>
    );
  }

  if (value === 'accept') {
    return (
      <span className="bg-green-500 text-white dark:bg-green-800 dark:text-green-100 font-medium py-1 px-2 text-sm rounded-lg">
        {i18n('user.status.accept')}
      </span>
    );
  }

  if (value === 'reject') {
    return (
      <span className="bg-red-500 text-white dark:bg-red-800 dark:text-red-100 font-medium py-1 px-2 text-sm rounded-lg">
        {i18n('user.status.reject')}
      </span>
    );
  }

  return (
    <span className="bg-yellow-500 text-white dark:bg-yellow-800 dark:text-yellow-100 font-medium py-1 px-2 text-sm rounded-lg">
      {i18n('user.status.invited')}
    </span>
  );

}

export default UserStatusView;
