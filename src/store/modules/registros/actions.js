import * as types from './mutation-types'
import store from '../..'
import Registros from '../../../services/registros'
import Numeros from '../../../services/numeros'
import moment from '../../../configs/moment'

export const loadRegistrosEmAberto = async ({ commit }, params) => {
  let registros = await Registros.loadRegistros(params)
  commit(types.SET_REGISTROS, { registros })
  return registros
}
export const resetRegistros = async ({ commit }) => {
  commit(types.SET_REGISTROS, { registros: [] })
}

export const atualizarRegistro = async ({ commit }, registro) => {
  let numeros_tratado = { id: registro.numero, status: registro.status }
  let response_numero = await Numeros.saveNumeros(numeros_tratado)

  let registros = await Registros.updateRegistro(registro)
  return registros
}

export const saveRegistro = async () => {
  let numeros = store.getters['numeros/getSelectedNumeros'] || []
  let numeros_tratados = Object.entries(numeros).map(([index, numero]) => {
    numero.status = 2
    return numero
  })
  let usuario = store.getters['session/getSession'] || {}

  let promises = []
  numeros_tratados.forEach((numero) => {
    let response_numero = Numeros.saveNumeros(numero)
    promises.push(response_numero)

    let request_body = {
      data_hora: moment().format('D/M/Y H:m'),
      status: numero.status,
      numero: numero.id,
      usuario,
    }
    let response_registro = Registros.saveRegistro(request_body)
    promises.push(response_registro)
  })
  let response = await Promise.all(promises)
  return response
}
