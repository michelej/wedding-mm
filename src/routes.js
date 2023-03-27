import MainPage from './components/MainPage.vue'
import Confirmation from './components/Confirmation.vue'
import Information from './components/Information.vue'
import Admin from './components/AdminPage.vue'

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
  },
  {
    path: '/admin',
    component: Admin
  }
]

export default routes