// Define an interface for each page object
interface Page {
  name: string;
  url: string;
  icon: string;
  [key: string]: string;
}

// Define the structure of your language data
interface LanguageData {
  [key: string]: string | { [key: string]: any };
  fullname: string;
  shortname: string;
  flag: string;
  $vuetify: {
    dataIterator: {
      rowsPerPageText: string;
      pageText: string;
    };
  };
    owner: string;
    sitetitle: string;
    pages: {
      [key: string]: Page;
    };
  message: {
    hello: string;
  };
}

export default LanguageData;
