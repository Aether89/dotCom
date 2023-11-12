# dotCom
## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install

# bun
bun install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev

# bun
bun run dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build

# bun
bun run build
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).

## Adding New Languages

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
    - Open the `src/themes/mythemes.ts` file.
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
//     ...wastelandTheme,
//     ...vampberryTheme,
//     ...lemon,
//   },
// };
```
