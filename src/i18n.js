import { createI18n } from 'vue-i18n'

function loadLocaleMessages() {
  const locales = require.context(
    './locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
  const messages = {}
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      const message = locales(key).default || locales(key)
      messages[locale] = message
    }
  })
  return messages
}

export const messages = loadLocaleMessages()

export default createI18n({
  locale:
    sessionStorage.getItem('lang') ||
    navigator.language.substring(0, 2) ||
    process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale:
    navigator.language.substring(0, 2) ||
    process.env.VUE_APP_I18N_FALLBACK_LOCALE ||
    sessionStorage.getItem('lang'),
  messages,
})
