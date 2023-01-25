import * as types from './mutation-types'
import store from '../..'
import Numeros from '../../../services/numeros'

export const loadNumeros = async ({ commit }) => {
  let numeros = await Numeros.getNumeros()
  numeros = numeros.data
  commit(types.SET_NUMEROS, { numeros })
  return numeros
}
export const loadStatus = async ({ commit }) => {
  let status = await Numeros.getNumerosStatus()
  status = status.data

  commit(types.SET_STATUS, { status })
  // for (let index = 2; index < 200; index++) {
  //   const element = { id: index, status: 1 }
  //   await Numeros.populateNumeros(element)
  // }
  return status
}
export const setNumeros = async ({ commit }, numeros) => {
  commit(types.SET_SELECTED_NUMEROS, { selected_numeros: numeros })
}
