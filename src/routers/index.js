import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '../views/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// router.beforeEach(isLogged)

export default router
