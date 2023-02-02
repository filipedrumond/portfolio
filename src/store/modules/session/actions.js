import * as types from './mutation-types'
import store from '../..'
import Registros from '../../../services/registros'
import Numeros from '../../../services/numeros'
import Login from '../../../services/login'
import Cookies from 'js-cookie'

export const doLogin = async ({ commit }, data = { nome, telefone }) => {
  const defalut_session = {
    nome: '',
    telefone: '',
  }
  const session = Object.assign({}, defalut_session, data)

  commit(types.SET_SESSION, { session })
  return session
}

export const doLoginAdmin = async ({ commit }, data = { usuario, senha }) => {
  const defalut_session = {
    usuario: '',
    senha: '',
  }
  const request_body = Object.assign({}, defalut_session, data)
  let response = await Login.doLoginAdmin(request_body)
  if (response.length != 1) {
    alert('Usuário ou senha inválidos')
    return false
  }
  response = response[0]
  let session = {
    nome: response.usuario,
    permissao: response.permissao,
  }
  Cookies.set('session_nome', session.nome)
  Cookies.set('session_permissao', session.permissao)
  commit(types.SET_SESSION, { session })
  return true
}
