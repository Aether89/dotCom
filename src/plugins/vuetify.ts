/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { useI18n } from 'vue-i18n'
import i18n from './vue-i18n'
import ThemeDefault from '@/themes/default.json'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const themes = {}

Object.assign(themes, ThemeDefault)

export default createVuetify({
  theme: {
    defaultTheme: 'default',
    themes,
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
})