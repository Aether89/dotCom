import { createI18n } from 'vue-i18n'
import languages from '@/i18n/languages'

const messages = {
...languages
}

const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n