
import defaultTheme from './default.json';
import wasteland from './wasteland.json';
import vampberry from './vampberry.json';

const myThemes = {
  defaultTheme: 'default',
  themes: {
    ...defaultTheme,
    ...wasteland,
    ...vampberry,
  },
};

export default myThemes;