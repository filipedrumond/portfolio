import * as types from './mutation-types'
import store from '../..'
import Numeros from '../../../services/numeros'

export const loadNumeros = async ({ commit }) => {
  let numeros = await Numeros.getNumeros()
  numeros = numeros.data
  numeros = numeros.slice(0, 50)
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
