
import defaultTheme from './default.json';
import wastelandTheme from './wasteland.json';
import vampberryTheme from './vampberry.json';

const myThemes = {
defaultTheme: 'default',
themes: {
  ...defaultTheme,
  ...wastelandTheme,
  ...vampberryTheme,
},
};

export default myThemes;