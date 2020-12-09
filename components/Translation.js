import * as Localization from "expo-localization";
import i18n from "i18n-js";

i18n.translations = {
  en: {
    settings: "Settings",
    language: "Language",
    lightness: "Lightness",
    home: "Home",
    newRecipe: "New recipe",
  },
  "en-US": {
    settings: "Settings",
    language: "Language",
    lightness: "Lightness",
    home: "Home",
    newRecipe: "New recipe",
  },
  fi: {
    settings: "Asetukset",
    language: "Kieli",
    lightness: "Valoisuus",
    home: "Koti",
    newRecipe: "Uusi resepti",
  },
};
i18n.locale = Localization.locale;
i18n.fallbacks = true;

export const getTranslatedText = (key) => i18n.t(key);
