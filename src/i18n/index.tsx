import _get from 'lodash/get';
import moment from 'moment';
import {
  registerLocale,
  setDefaultLocale,
} from 'react-datepicker';
import { setLocale as setYupLocale } from 'yup';

let currentLanguageCode = '';

const languages: {
  [key: string]: {
    id: string;
    label: string;
    flag: string;
    dateFns: any;
    dictionary: any;
  };
} = {
  en: {
    id: 'en',
    label: 'English',
    flag: '/images/flags/United-States.png',
    dateFns: null,
    dictionary: null,
  },
  es: {
    id: 'es',
    label: 'Español',
    flag: '/images/flags/Spain.png',
    dateFns: null,
    dictionary: null,
  },
};

export async function init() {
  currentLanguageCode =
    localStorage.getItem('language') || 'en';
  setLanguageCode(currentLanguageCode);

  if (currentLanguageCode === 'en') {
    await initEn();
  }

  if (currentLanguageCode === 'es') {
    await initEs();
  }
}

async function initEs() {
  const language = languages['es'];

  // @ts-ignore
  const momentLocale = (await import('moment/locale/es'))
    .default;

  language.dateFns = (
    await import('date-fns/locale/es')
  );

  registerLocale('es', language.dateFns);
  setDefaultLocale('es');

  language.dictionary = (
    await import('src/i18n/es')
  ).default;

  moment.locale('es', momentLocale);

  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}

async function initEn() {
  const language = languages['en'];

  language.dictionary = (
    await import('src/i18n/en')
  ).default;

  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}

export function getLanguage() {
  return languages[getLanguageCode()];
}

 

function format(message: string, args: (string | number)[]): string | null {
  if (!message) {
    return null;
  }

  try {
    return message.replace(
      /{(\d+)}/g,
      function (match: string, number: string) {
        return typeof args[Number(number)] != 'undefined'
          ? String(args[Number(number)])
          : match;
      },
    );
  } catch (error) {
    console.error(message, error);
    throw error;
  }
}

export function getLanguages() {
  return Object.keys(languages).map((language) => {
    return languages[language];
  });
}

export function getLanguageCode() {
  return currentLanguageCode;
}

export interface Language {
  id: string;
  label: string;
  flag: string;
  dateFns: any;
  dictionary: any;
}

export function setLanguageCode(arg: string): void {
  if (!languages[arg]) {
    throw new Error(`Invalid language ${arg}.`);
  }

  localStorage.setItem('language', arg);
}

export function i18nExists(key: string): boolean {
  if (!getLanguage()) {
    return false;
  }

  const message: string | undefined = _get(getLanguage().dictionary, key);
  return Boolean(message);
}

export function i18n(key: string, ...args: (string | number)[]): string {
  if (!getLanguage()) {
    return key;
  }

  const message: string | undefined = _get(getLanguage().dictionary, key);

  if (!message) {
    return key;
  }

  return format(message, args) as string;
}

 

export function i18nHtml(key: string, ...args: (string | number)[]): unknown {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: i18n(key, ...args),
      }}
    />
  );
}
