import MainPage from './components/MainPage.vue'
import Confirmation from './components/Confirmation.vue'
import Information from './components/Information.vue'

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/confirmation',
    component: Confirmation
  },
  {
    path: '/information',
    component: Information
  }
]

export default routes