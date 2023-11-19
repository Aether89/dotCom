// Define the structure of your language data
interface LanguageData {
  fullname: string;
  shortname: string;
  flag: string;
  $vuetify: {
    dataIterator: {
      rowsPerPageText: string;
      pageText: string;
    };
  };
  global: {
    owner: string;
    sitetitle: string;
    pages: {
      [key: string]: {
        name: string;
        url: string;
        component: string;
      };
    };
  };
  message: {
    hello: string;
  };
}

// Define the structure of your language files
interface LanguageFile {
  [key: string]: LanguageData;
}

// Import your JSON files
import en from './en.json';
import fr from './fr.json';

// Specify the type of your imported JSON files
const languages: LanguageFile = {
  ...en as LanguageFile,
  ...fr as LanguageFile,
};

export default languages;
