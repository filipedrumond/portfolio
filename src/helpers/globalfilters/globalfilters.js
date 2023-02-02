import { toMoney, fromMoney } from './money'
import { toFirstName } from './firstName'
import { toStatusName } from './statusNumeros'

const globalFiltersMethods = {
  toMoney,
  fromMoney,
  toFirstName,
  toStatusName,
}

const globalFiltersPlugin = (app, options = {}) => {
  const methods = globalFiltersMethods

  app.$filters = methods
  app.config.globalProperties.$filters = methods
  app.provide('$filters', globalFiltersPlugin)
}

export { globalFiltersMethods }
export default globalFiltersPlugin
