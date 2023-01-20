import { clientAPI } from '../configs/configs'
import * as env from '../configs/configs'

const urlBase = env.urlGeneral
export default class Registros {
  static async saveRegistro(registro) {
    let deafult_body = {
      data_hora: '',
      usuario: {
        nome: '',
        telefone: '',
      },
      numero: 1,
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
        rej(err)
      }
    })
  }
}
