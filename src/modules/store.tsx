// src/modules/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
// import thunk from 'redux-thunk';
import rootReducer from './reducers';
import type { RootState } from './reducers';
import initializers from './initializers';

export const history = createBrowserHistory();

export function createAppStore(preloadedState?: Partial<RootState>) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(),
    devTools: import.meta.env.MODE !== 'production',
  });

  for (const init of initializers) {
    init(store);
  }

  return store;
}

export const store = createAppStore();

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type { RootState };
