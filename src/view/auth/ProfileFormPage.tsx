import { i18n } from 'src/i18n';
import { useNavigate } from 'react-router-dom';
import ProfileForm from 'src/view/auth/ProfileForm';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import React from 'react';

function ProfileFormPage() {
     const navigate = useNavigate();
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('auth.profile.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('auth.profile.title')}
        </h1>

        <ProfileForm
          onCancel={() => navigate('/')}
        />
      </div>
    </>
  );
}

export default React.memo(ProfileFormPage);
