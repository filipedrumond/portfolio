import * as types from './mutation-types'

export default {
  [types.SET_REGISTROS](state, payload = { registros }) {
    state.registros = payload.registros
  },
}
