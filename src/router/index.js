import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Header.vue'
import About from '../views/About.vue'
import Team from '../views/Team.vue'
import Booking from '../views/Booking.vue'
import Menu from '../views/Menu.vue'
import Galerie from '../views/Galerie.vue'
import Events from '../views/Events.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {path: '/',
    name: 'Home',
    component: Home},
  {path: '/about',
    name: 'About',
    component: About},
  {path: '/team',
   name: 'Team',
   component: Team},
  {path: '/booking',
   name: 'Booking',
   component: Booking},
  {path: '/menu',
   name: 'Menu',
   component: Menu},
  {path: '/galerie',
   name: 'Galerie',
   component: Galerie},
  {path: '/events',
   name: 'Events',
   component: Events},
  {path: '/contact',
   name: 'Contact',
   component: Contact},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
