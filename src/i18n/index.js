import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en.json'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: process.env.VUE_APP_DEFAULT_LOCALE,
  fallbackLocale: process.env.VUE_APP_DEFAULT_LOCALE,
  messages: {
    en: en
  }
})

Vue.prototype.$t = function (key, ...values) {
  return i18n._t(key, i18n.locale, i18n._getMessages(), this, ...values)
}

Vue.prototype.$tc = function (key, choice, ...values) {
  return i18n._tc(key, i18n.locale, i18n._getMessages(), this, choice, ...values)
}

Vue.prototype.$te = function (key, locale) {
  return i18n._te(key, i18n.locale, i18n._getMessages(), locale)
}

Vue.prototype.$d = function (value, ...args) {
  return i18n.d(value, ...args)
}

Vue.prototype.$n = function (value, ...args) {
  return i18n.n(value, ...args)
}

export default i18n
