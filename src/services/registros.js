import { clientAPI } from '../configs/configs'
import * as env from '../configs/configs'

const urlBase = env.urlGeneral
export default class Registros {
  static async saveRegistro(registro) {
    let deafult_body = {
      data_hora: '',
      status: 2,
      numero: 1,
      usuario: {
        nome: '',
        telefone: '',
      },
    }
    const request_body = Object.assign({}, deafult_body, registro)

    return new Promise((res, rej) => {
      try {
        clientAPI
          .post(`${urlBase}/registros`, request_body)
          .then((response) => {
            res(response)
          })
          .catch((error) => {
            rej(error)
          })
      } catch (err) {
        alert('Erro', err)
        rej(err)
      }
    })
  }

  static async loadRegistros(params) {
    return new Promise((res, rej) => {
      try {
        clientAPI
          .get(`${urlBase}/registros`, { params })
          .then((response) => {
            res(response.data)
          })
          .catch((error) => {
            alert('Erro', err)
            rej(error)
          })
      } catch (err) {
        rej(err)
      }
    })
  }

  static async updateRegistro(registro) {
    return new Promise((res, rej) => {
      try {
        clientAPI
          .put(`${urlBase}/registros/${registro.id}`, registro)
          .then((response) => {
            res(response)
          })
          .catch((error) => {
            alert('Erro', err)
            rej(error)
          })
      } catch (err) {
        rej(err)
      }
    })
  }
}
