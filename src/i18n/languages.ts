// Define the structure of your language data
import { LocaleMessages } from "vue-i18n";
import LanguageData from '@/Interface/LanguageData';

// Import your JSON files
import en from './en.json';
import fr from './fr.json';

// Specify the type of your imported JSON files using LocaleMessage
const languages: LocaleMessages<LanguageData> = {
  ...en as LocaleMessages<LanguageData>,
  ...fr as LocaleMessages<LanguageData>,
};

export default languages;