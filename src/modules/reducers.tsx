// src/modules/reducers.ts
import { combineReducers } from '@reduxjs/toolkit';

import auditLogReducer from 'src/modules/auditLog/auditLogReducers';
import authReducer from 'src/modules/auth/authReducers';
import layoutReducer from 'src/modules/layout/layoutReducers';
import settingsReducer from 'src/modules/settings/settingsReducers';
import tenantReducer from 'src/modules/tenant/tenantReducers';
import userReducer from 'src/modules/user/userReducers';

const rootReducer = combineReducers({
  layout: layoutReducer,
  auth: authReducer,
  tenant: tenantReducer,
  user: userReducer,
  auditLog: auditLogReducer,
  settings: settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
