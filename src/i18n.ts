import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import locale from "./locale";

const resources = {
  en: {
    translation: locale.en
  },
  fa: {
    translation: locale.fa
  },
  ar: {
    translation: locale.ar
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "fa", 

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;