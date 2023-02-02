require('bootstrap/js/dist/collapse')

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './routers'
import i18n from './i18n'
import VueTheMask from 'vue-the-mask'
import globalFiltersPlugin from './helpers/globalfilters/globalfilters'

export const app = createApp(App)
  .use(i18n)
  .use(router)
  .use(store)
  .use(VueTheMask)
  .use(globalFiltersPlugin)
  .mount('#app')
