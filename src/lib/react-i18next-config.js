import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en-us.json';
import hk from './locales/zh-HK.json';

const resources = {
  'zh-HK': {
    translation: hk,
  },
  'en-US': {
    translation: en,
  },
};

i18n
  .use(LanguageDetector) //嗅探当前浏览器语言
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh-HK',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      caches: ['localStorage', 'sessionStorage', 'cookie'],
    },
  });

export default i18n;
