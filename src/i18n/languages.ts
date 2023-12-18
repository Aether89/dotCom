import { LocaleMessages } from "vue-i18n";
import LanguageData from '@/Interface/LanguageData';

const en = await import('./en.json');
const en_aboutme = await import ('./views/en/aboutme.json')
const fr = await import('./fr.json');
const fr_aboutme = await import ('./views/fr/aboutme.json')

const enMerged = {
  ...en.default,
    pages: {
      ...en.default.pages,
      "aboutme": {
        ...en.default.pages["aboutme"],
        ...en_aboutme.default
      },
      "skills": {
        ...en.default.pages["skills"],
        ...en_aboutme.default
      },
      "programs-n-applications": {
        ...en.default.pages["programs-n-applications"],
        ...en_aboutme.default
      },
      "mods-n-tools": {
        ...en.default.pages["mods-n-tools"],
        ...en_aboutme.default
      },
      "websites": {
        ...en.default.pages["websites"],
        ...en_aboutme.default
      },
      "credits": {
        ...en.default.pages["credits"],
        ...en_aboutme.default
      }
  }
};

const frMerged = {
  ...fr.default,
    pages: {
      ...fr.default.pages,
      "aboutme": {
        ...fr.default.pages["aboutme"],
        ...fr_aboutme.default
      },
      "skills": {
        ...fr.default.pages["skills"],
        ...fr_aboutme.default
      },
      "programs-n-applications": {
        ...fr.default.pages["programs-n-applications"],
        ...fr_aboutme.default
      },
      "mods-n-tools": {
        ...fr.default.pages["mods-n-tools"],
        ...fr_aboutme.default
      },
      "websites": {
        ...fr.default.pages["websites"],
        ...fr_aboutme.default
      },
      "credits": {
        ...fr.default.pages["credits"],
        ...fr_aboutme.default
      }
  }
};
const languages: LocaleMessages<LanguageData> = {
  en: { ...enMerged },
  fr: { ...frMerged },
};

export default languages;
