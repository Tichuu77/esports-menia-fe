import { setLanguageCode } from 'src/i18n';

const prefix = 'LAYOUT';

const layoutActions = {
  MENU_TOGGLE: `${prefix}_MENU_TOGGLE`,
  MENU_HIDE: `${prefix}_MENU_HIDE`,
  MENU_SHOW: `${prefix}_MENU_SHOW`,

  DARK_MODE_CHANGE: `${prefix}_DARK_MODE`,

  doChangeLanguage: (language:string) => {
    setLanguageCode(language);

    /**
     * I18n is outside Redux store,
     * no we need this hack to load it properly
     */
    window.location.reload();
  },

  doDarkModeChange: (isDarkMode:boolean) => {
    return {
      type: layoutActions.DARK_MODE_CHANGE,
      payload: Boolean(isDarkMode),
    };
  },

  doToggleMenu: () => {
    return {
      type: layoutActions.MENU_TOGGLE,
    };
  },

  doShowMenu: () => {
    return {
      type: layoutActions.MENU_SHOW,
    };
  },

  doHideMenu: () => {
    return {
      type: layoutActions.MENU_HIDE,
    };
  },
};

export default layoutActions;
