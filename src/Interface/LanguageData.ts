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
  global: {
    owner?: string; // Optional property
    sitetitle?: string; // Optional property
    pages: {
      [key: string]: {
        name: string;
        url: string;
        icon: string;
      };
    };
  };
  message: {
    hello: string;
  };
}

  export default LanguageData;