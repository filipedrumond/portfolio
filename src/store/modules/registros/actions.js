import * as types from './mutation-types'
import store from '../..'
import Registros from '../../../services/registros'

export const loadRegistrosEmAberto = async ({ commit }, params) => {
  let registros = await Registros.loadRegistros(params)
  commit(types.SET_REGISTROS, { registros })
  return registros
}
export const resetRegistros = async ({ commit }) => {
  commit(types.SET_REGISTROS, { registros: [] })
}

export const atualizarRegistro = async ({ commit }, registro) => {
  let registros = await Registros.updateRegistro(registro)
  return registros
}
