// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import 'vue-material/dist/vue-material.css'
import App from 'src/App'

Vue.use(VueMaterial)
Vue.use(VueRouter)

Vue.material.theme.register('default', {
  primary: 'blue',
  accent: 'red'
})

// 2. Define route components
const Home = { template: '<App/>', components: { App } }
const Retailer = { template: '<div>retailer</div>' }
const Workshop = { template: '<div>workshop</div>' }

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/workshop', component: Workshop },
    { path: '/retailer', component: Retailer }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

