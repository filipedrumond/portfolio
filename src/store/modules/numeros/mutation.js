import * as types from './mutation-types'

export default {
  [types.SET_NUMEROS](state, payload = { numeros }) {
    state.numeros = payload.numeros
  },
  [types.SET_STATUS](state, payload = { status }) {
    state.status = payload.status
  },
  [types.SET_SELECTED_NUMEROS](state, payload = { selected_numeros }) {
    state.selected_numeros = payload.selected_numeros
  },
}
