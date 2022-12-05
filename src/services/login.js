import { clientAPI } from '../configs/configs'
import * as env from '../configs/configs'
import { MOD_SUBMODULO } from '../helpers/constants/authentication'

const urlBase = env.urlGeneral + '/authentication'
export default class Login {
  static async doLogin(data) {
    return new Promise((res, rej) => {
      try {
        clientAPI
          .post(
            `${urlBase}/login`,
            { ...MOD_SUBMODULO },
            {
              auth: {
                username: data.login,
                password: data.password,
              },
            }
          )
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

  static async checkToken() {
    return new Promise((res, rej) => {
      try {
        clientAPI
          .get(`${urlBase}/valid`)
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

  static async getProfileDataUsingCookie() {
    return new Promise((res, rej) => {
      try {
        clientAPI
          .post(`${urlBase}/profile`, { ...MOD_SUBMODULO })
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
