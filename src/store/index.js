import { createStore } from 'vuex'
import language from './modules/language'
import session from './modules/session'
import numeros from './modules/numeros'

export default createStore({
  modules: {
    language,
    session,
    numeros,
  },
})
