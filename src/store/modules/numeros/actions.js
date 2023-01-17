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
  return status
}
