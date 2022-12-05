import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './routers'
import i18n from './i18n'
import VueTheMask from 'vue-the-mask'


export const app = createApp(App)
  .use(i18n)
  .use(router)
  .use(store)
  .use(VueTheMask)
  .mount('#app')