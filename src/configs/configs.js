export const urlGeneral = process.env.VUE_APP_FULL_URL_API
import axios from 'axios'
import {
  showError,
  beginLoading,
  endLoading,
} from '../store/modules/toasts/actions'

axios.defaults.withCredentials = true

const api = axios.create({
  baseURL: urlGeneral,
  headers: {},
})
api.withCredentials = true

function addHeaders(config) {
  config.headers.HTTP_CONTENT_LANGUAGE =
    store.getters['translation/selectedLanguage']
  return config
}

function handleRequestSuccess(req) {
  if (req.url && req.url != '') {
    let url = req.url
    if (urlHasLoadingEffect(url)) {
      beginLoading()
    }
  }
  // TODO
  return req
}
function handleRequestError(err) {
  // TODO
  if (err.response && err.response.status === 401) {
    // new AuthService().logout()
    // window.reload()
  }
  return err
}
function handleResponseSuccess(req) {
  endLoading()

  // TODO
  return req
}
function handleResponseError(err) {
  endLoading()

  let treated_error = {
    status: '',
    message: 'Sem conexão com o servidor',
  }
  let error_level = {
    name: 'Erro',
    level: 'error',
  }

  if (err.hasOwnProperty('response') && err.response) {
    let response = err.response
    if (response.hasOwnProperty('data') && response.data) {
      let response_data = response.data
      treated_error.message = response_data.message
      treated_error.status = response.status
      error_level = switchAPIErrorType(response_data.type || '')
    }
  }

  let cod_message =
    treated_error.status != ''
      ? `Código: ${treated_error.status}`
      : '                      '

  let message = `${error_level.name}! ${cod_message}                              ${treated_error.message}`

  if (
    err.hasOwnProperty('response') &&
    err.response.hasOwnProperty('request')
  ) {
    let request = err.response.request
    if (request.responseURL != undefined && request.responseURL) {
      let url = request.responseURL
      if (urlHasErrorEffect(url)) {
        showError(message, error_level.level)
      }
    }
  }
  return Promise.reject(treated_error)
}

// Add a request interceptor
api.interceptors.request.use(
  handleRequestSuccess,
  handleRequestError,
  addHeaders
)
// Add a response interceptor
api.interceptors.response.use(handleResponseSuccess, handleResponseError)

export const clientAPI = api

function switchAPIErrorType(type) {
  let error_level = { type: 'error', name: 'Erro' }
  switch (type) {
  case 'WARN':
    error_level.name = 'Aviso'
    error_level.level = 'warning'
    break
  }
  return error_level
}

/** remove de algumas rotas o efeito de loading */
function urlHasLoadingEffect(url) {
  if (
    url.includes('authentication/valid') ||
    url.includes('authentication/profile')
  ) {
    return false
  }
  return true
}

/** remove de algumas rotas o efeito de erro */
function urlHasErrorEffect(url) {
  if (
    url.includes('authentication/valid') ||
    url.includes('authentication/profile')
  ) {
    return false
  }
  return true
}
