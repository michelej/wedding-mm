import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import routes from './routes'
import VueSimpleAlert from "vue-simple-alert";


Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

const DEFAULT_TITLE = 'Boda de Michel & Marlis';
router.afterEach((to) => {    
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

Vue.use(VueRouter)
Vue.use(VueSimpleAlert)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
