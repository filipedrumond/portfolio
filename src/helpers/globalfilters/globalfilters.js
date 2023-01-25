import { toMoney, fromMoney } from './money'

const globalFiltersMethods = {
  toMoney,
  fromMoney,
}

const globalFiltersPlugin = (app, options = {}) => {
  const methods = globalFiltersMethods

  app.$filters = methods
  app.config.globalProperties.$filters = methods
  app.provide('$filters', globalFiltersPlugin)
}

export { globalFiltersMethods }
export default globalFiltersPlugin
