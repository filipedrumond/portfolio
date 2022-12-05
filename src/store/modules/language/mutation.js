import * as types from './mutation-types'

export default {
  [types.SET_LANGUAGE](state, payload={selected_language}) {
    state.language.current = payload.selected_language
  },
}

