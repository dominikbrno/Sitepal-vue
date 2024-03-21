import { createRouter , createWebHistory } from 'vue-router'

import emptyCharacter from '../components/emptyCharacter.vue'
import FullBodyCharacter from '../components/FullBodyCharacter.vue'
import ThreeDCharacter from '../components/ThreeDCharacter.vue'
import TwoDCharacter from '../components/TwoDCharacter.vue'


const routes = [
  {
    path: '/',
    name: 'TwoDCharacter',
     component: TwoDCharacter
  },
  {
    path: '/3d',
    name: 'ThreeDCharacter',
    component:ThreeDCharacter

  },
  {
    path: '/fb',
    name: 'FullBodyCharacter',
    component:FullBodyCharacter

  },
  {
    path: '/empty',
    name: 'emptyCharacter',
    component:emptyCharacter

  },

  
]

const router = createRouter({
history: createWebHistory('/api/examples/vue/index.html'),  routes
})




export default router
