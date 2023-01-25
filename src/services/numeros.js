import { clientAPI } from '../configs/configs'
import * as env from '../configs/configs'

const urlBase = env.urlGeneral
export default class Numeros {
  static async getNumeros() {
    return new Promise((res, rej) => {
      try {
        clientAPI
          .get(`${urlBase}/numeros`)
          .then((response) => {
            res(response)
          })
          .catch((error) => {
            rej(error)
          })
      } catch (err) {
        rej(err)
      }
    })
  }
  static async getNumerosStatus() {
    return new Promise((res, rej) => {
      try {
        clientAPI
          .get(`${urlBase}/status`)
          .then((response) => {
            res(response)
          })
          .catch((error) => {
            rej(error)
          })
      } catch (err) {
        rej(err)
      }
    })
  }
  static async populateNumeros(body) {
    return new Promise((res, rej) => {
      try {
        clientAPI
          .post(`${urlBase}/numeros`, body)
          .then((response) => {
            res(response)
          })
          .catch((error) => {
            rej(error)
          })
      } catch (err) {
        rej(err)
      }
    })
  }
  static async saveNumeros(numero) {
    let numero_tratado = {
      id: numero.id,
      status: numero.status,
    }
    return new Promise((res, rej) => {
      try {
        clientAPI
          .put(`${urlBase}/numeros/${numero_tratado.id}`, numero_tratado)
          .then((response) => {
            res(response)
          })
          .catch((error) => {
            rej(error)
          })
      } catch (err) {
        rej(err)
      }
    })
  }
}
