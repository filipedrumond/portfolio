import * as types from './mutation-types'

export default {
  [types.SET_SESSION](state, payload = { session }) {
    state.session = payload.session
  },
}
