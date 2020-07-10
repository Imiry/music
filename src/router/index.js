import Vue from 'vue'
import VueRouter from 'vue-router'


//注意点：通过import xxx from xxx de 方式加载组件。无论组件有没有被用到，都会被加载进来
// import Recommed from '../views/Recommed'
// import Singer from '../views/Singer'
// import Rank from '../views/Rank'
// import Search from '../views/Search'

//实现vue组件的按需加载

const Recommed = () => import('../views/Recommed')
const Singer = () => import('../views/Singer')
const Rank = () => import('../views/Rank')
const Search = () => import('../views/Search')
// const Recommed = (resolve) => {
//   import('../views/Recommed').then((module) => {
//     resolve(module)
//   })
// }
// const Singer = (resolve) => {
//   import('../views/Singer').then((module) => {
//     resolve(module)
//   })
// }
// const Rank = (resolve) => {
//   import('../views/Rank').then((module) => {
//     resolve(module)
//   })
// }
// const Search = (resolve) => {
//   import('../views/Search').then((module) => {
//     resolve(module)
//   })
// }
Vue.use(VueRouter)


const routes = [
  { path: '/', redirect: '/recommed' },
  { path: '/recommed',
    component: Recommed,
  },
  { path: '/singer',
    component: Singer,
  },
  { path: '/rank',
    component: Rank,
  },
  { path: '/search', component: Search }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
