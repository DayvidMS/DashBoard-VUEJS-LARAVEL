import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../views/Home/HomeComponent'
import ProductsComponent from '../views/Products/ProductsComponent'
import ClientsComponent from '../views/Clientes/ClientsComponent'
const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/LoginView.vue')
  },
  {
    path: '/produtos',
    name: 'products',
    component: ProductsComponent
  },
  {
    path: '/clients',
    name: 'clients',
    component: ClientsComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
