import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import SignUp from './pages/SignUp.vue'
import SignIn from './pages/SignIn.vue'
import MyHome from './pages/MyHome.vue'
import UserProfile from './pages/UserProfile.vue'
import '@/tailwind.css'

Vue.config.productionTip = false

// configure router
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: MyHome
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/users/:userId',
    name: 'userprofile',
    component: UserProfile,
    props: true
  }
]
var router = new VueRouter({
  routes: routes,
  mode: 'history'
})

// create vue app
new Vue({
  router: router,
  render: (h) => h(App)
}).$mount('#app')
