import { LocaleMessages } from "vue-i18n";
import LanguageData from '@/Interface/LanguageData';

import en from './en.json';
import en_aboutme from'./views/en/aboutme.json';
import fr from './fr.json';
import fr_aboutme from './views/fr/aboutme.json';

const enMerged = {
  ...en,
    pages: {
      ...en.pages,
      "aboutme": {
        ...en.pages["aboutme"],
        ...en_aboutme
      },
      "skills": {
        ...en.pages["skills"],
        ...en_aboutme
      },
      "programs-n-applications": {
        ...en.pages["programs-n-applications"],
        ...en_aboutme
      },
      "mods-n-tools": {
        ...en.pages["mods-n-tools"],
        ...en_aboutme
      },
      "websites": {
        ...en.pages["websites"],
        ...en_aboutme
      },
      "credits": {
        ...en.pages["credits"],
        ...en_aboutme
      }
  }
};

const frMerged = {
  ...fr,
    pages: {
      ...fr.pages,
      "aboutme": {
        ...fr.pages["aboutme"],
        ...fr_aboutme
      },
      "skills": {
        ...fr.pages["skills"],
        ...fr_aboutme
      },
      "programs-n-applications": {
        ...fr.pages["programs-n-applications"],
        ...fr_aboutme
      },
      "mods-n-tools": {
        ...fr.pages["mods-n-tools"],
        ...fr_aboutme
      },
      "websites": {
        ...fr.pages["websites"],
        ...fr_aboutme
      },
      "credits": {
        ...fr.pages["credits"],
        ...fr_aboutme
      }
  }
};
const languages: LocaleMessages<LanguageData> = {
  en: { ...enMerged },
  fr: { ...frMerged },
};

export default languages;
