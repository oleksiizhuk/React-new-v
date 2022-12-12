import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import pl from './pl/pl'
import en from './en/en'
export const resources = {
  en: { translation: en },
  pl: { translation: pl },
};

export const appLocales = Object.keys(resources);

class TranslateService {

  changeLanguage(locale) {
    i18n.changeLanguage(locale).then(() => {});
  }

  init() {
    i18n
      .use(initReactI18next) // passes i18n down to react-i18next
      .init({
        resources,
        fallbackLng: appLocales,
        interpolation: {
          escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
      });
  }
}

const translate = new TranslateService()

export default translate