# V1.1.0
## New Features

## Fixes
### Drawer Layout ("src/layouts/default/Drawer.vue")
- The avatar and the v-divider have been encapsulated within a div. 
- The v-if condition, which was initially on the router-link, has been moved to this newly created div

# V1.0.0
## New Features

### Default Layout ("/src/layouts/default/Default.vue")
- Introduced a page layout with a fixed height that does not exceed the screen height.
- Displayed a suitable Navigation Bar based on the device type (Mobile or Desktop).

  #### App Bar 
  - The site title is displayed on the left.
  - The language switcher followed by the theme switcher is displayed on the right.
  - For mobile devices, a menu is displayed on the left to bring up the Navigation Bar.
  
  #### Navigation Bar
  - On Desktop (mouse interface), the bar is always visible and expands upon hover, closing when no longer hovered over. 
  - On Desktop (touch interface), the bar is always visible and expands upon click, closing when clicked elsewhere.
  - On Mobile, the bar is displayed as a menu in the App Bar and closes after an item is clicked.
  
  #### Main View 
  - The Max-Width varies depending on the device type (Mobile or Desktop).

### Drawer Layout ("src/layouts/default/Drawer.vue")
- Generates the list of content to be displayed in the Navigation Drawer.

### Footer Layout ("src/layouts/default/Footer.vue")
- Generates the list of content to be displayed in the Footer.

### Language Switcher Component ("src/components/LanguageSwitcher.vue")
- Does not appear if there are 0 or 1 languages.
- Toggles between languages if there are 2.
- Displays a menu to switch between languages if there are 3 or more.
- On Mobile, the language name is shortened on the button.
- On Desktop, the full language name is displayed on the button.

### Theme Switcher Component ("src/components/ThemeSwitcher.vue")
- Does not appear if there are 0 or 1 themes.
- Toggles between themes if there are 2.
- Displays a menu to switch between themes if there are 3 or more.

### Adding New Languages

1. **Create a JSON file for the new language**:
    - Navigate to the `src/i18n/` directory.
    - Create a new JSON file for the language you want to add. You can use an existing JSON file as a template.

```javascript
// For example, if you're adding Espanõl, you might create a `es.json` file.
```

2. **Import the new language file**:
    - Open the `src/i18n/languages.ts` file.
    - Import the JSON file you just created.

```javascript
// For example:
// import espanol from './es.json';
```

3. **Add the imported file to the `languages` constant**:
    - In the `languages.ts` file, add the imported file to the `languages` constant.

```javascript
// For example:
// const languages = {
//   ...en,
//   ...fr,
//   ...es,
// };
```

I see, thank you for the clarification. Here's the revised version of the instructions:

## Adding New Themes

1. **Create a JSON file for the new theme**:
    - Navigate to the `src/themes/` directory.
    - Create a new JSON file for the theme you want to add. You can use an existing JSON file as a template.

```javascript
// For example, if you're adding a lemon theme, you might create a `lemon.json` file.
```

2. **Import the new theme file**:
    - Open the `src/themes/myThemes.ts` file.
    - Import the JSON file you just created.

```javascript
// For example:
// import lemon from './lemon.json';
```

3. **Add the imported file to the `themes` object within the `myThemes` constant**:
    - In the `mythemes.ts` file, add the imported file to the `themes` object that is within the `myThemes` constant.

```javascript
// For example:
// const myThemes = {
//   defaultTheme: 'default',
//   themes: {
//     ...defaultTheme,
//     ...wasteland,
//     ...vampberry,
//     ...lemon,
//   },
// };
```

