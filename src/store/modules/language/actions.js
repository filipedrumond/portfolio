import * as types from './mutation-types'
import store from '../..'
import { app } from '../../../main'

export const setLanguage = async ({ commit }, data = { lang, flag }) => {
  const language_defalut = { lang: 'pt', flag: 'br' }
  if (!data.flag && data.lang) {
    data = findFlag(data.lang)
  }

  const language = Object.assign({}, language_defalut, data)
  
  app.$i18n.locale = language.lang
  sessionStorage.setItem('lang', language.lang)

  commit(types.SET_LANGUAGE, { selected_language: language })
  return language
}

const findFlag = (lang) => {
  const language_possibilities = store.getters['language/getPossibilities'] || []
  const lang_flag = language_possibilities.find(element => element.lang === lang)

  return lang_flag
}