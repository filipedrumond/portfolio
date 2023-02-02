import { createStore } from 'vuex'
import language from './modules/language'
import session from './modules/session'
import numeros from './modules/numeros'
import registros from './modules/registros'

export default createStore({
  modules: {
    language,
    session,
    numeros,
    registros,
  },
})
