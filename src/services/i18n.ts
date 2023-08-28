import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en';
import tr from '../locales/tr';
import ar from '../locales/ar';

export const resources = { // list of languages
  'en': en,
  'tr': tr,
  'ar': ar,
};
i18n.use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3', //To make it work for Android devices, add this line.    
    lng: 'en', // default language to use.
    resources,
    keySeparator: false,
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;