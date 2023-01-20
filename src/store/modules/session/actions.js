import * as types from './mutation-types'
import store from '../..'
import Registros from '../../../services/registros'
import Numeros from '../../../services/numeros'

import moment from '../../../configs/moment'

export const doLogin = async ({ commit }, data = { nome, telefone }) => {
  const defalut_session = {
    nome: '',
    telefone: '',
  }
  const session = Object.assign({}, defalut_session, data)

  commit(types.SET_SESSION, { session })
  return session
}

export const saveRegistro = async () => {
  let numeros = store.getters['numeros/getSelectedNumeros'] || []
  let numeros_tratados = numeros.map((numero) => {
    numero.status = 2
    return numero
  })
  let usuario = store.getters['session/getSession'] || {}

  let promises = []
  numeros_tratados.forEach((numero) => {
    let response_numero = Numeros.saveNumeros(numero)
    promises.push(response_numero)

    let request_body = {
      usuario,
      data_hora: moment().format('D/M/Y H:m'),
      numero: numero.id,
    }
    let response_registro = Registros.saveRegistro(request_body)
    promises.push(response_registro)
  })
  let response = await Promise.all(promises)
  return response
}
