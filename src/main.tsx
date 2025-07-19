import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { i18n, init as i18nInit } from 'src/i18n';
import AuthService from 'src/modules/auth/authService';
import { AuthToken } from './modules/auth/authToken';
import SettingsService from './modules/settings/settingsService';
import TenantService from './modules/tenant/tenantService';

(async function main() {
  const isSocialOnboardRequested = AuthService.isSocialOnboardRequested();

  AuthToken.applyFromLocationUrlIfExists();
  await TenantService.fetchAndApply();

  if (isSocialOnboardRequested) {
    await AuthService.socialOnboard();
  }

  SettingsService.applyThemeFromTenant();
  await i18nInit();

  const App = (await import('./App')).default;

  document.title = i18n('app.title');

  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
})();
