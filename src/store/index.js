import { createStore } from 'vuex'
import language from './modules/language'
import session from './modules/session'

export default createStore({
  modules: {
    language,
    session,
  },
})
