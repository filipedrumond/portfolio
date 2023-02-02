import { clientAPI } from '../configs/configs'
import * as env from '../configs/configs'

const urlBase = env.urlGeneral
export default class Login {
  static async doLoginAdmin(request_body) {
    return new Promise((res, rej) => {
      try {
        clientAPI
          .get(`${urlBase}/users`, { params: request_body })
          .then((response) => {
            res(response.data)
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
