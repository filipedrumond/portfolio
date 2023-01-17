import * as types from './mutation-types'
import store from '../..'

export const doLogin = async ({ commit }, data = { nome, telefone }) => {
  const defalut_session = {
    nome: '',
    telefone: '',
  }
  const session = Object.assign({}, defalut_session, data)

  commit(types.SET_SESSION, { session })
  return session
}
