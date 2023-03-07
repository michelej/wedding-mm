import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import routes from './routes'
import VueSimpleAlert from "vue-simple-alert";


Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

Vue.use(VueRouter)
Vue.use(VueSimpleAlert)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
