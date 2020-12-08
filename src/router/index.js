import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
// import Header from '../views/Header.vue'
// import About from '../views/About.vue'
import Team from '../views/Team.vue'
// import Booking from '../views/Booking.vue'
// import Menu from '../views/Menu.vue'
// import Galerie from '../views/Galerie.vue'
// import Events from '../views/Events.vue'
// import Contact from '../views/Contact.vue'

const routes = [
  {path: '/',
    name: 'Home',
    component: App
  },
  // {path: '/#about',
  //   name: 'About',
  //   component: App
  // },
  {path: '/team',
   name: 'Team',
   component: Team},
  {path: '/booking',
   name: 'Booking',
   component: App},
  // {path: '/menu',
  //  name: 'Menu',
  //  component: Menu},
  // {path: '/galerie',
  //  name: 'Galerie',
  //  component: Galerie},
  // {path: '/events',
  //  name: 'Events',
  //  component: Events},
  // {path: '/contact',
  //  name: 'Contact',
  //  component: Contact},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  scrollBehavior: function (to) {
    // if (savedPosition) {
    //   return savedPosition;
    // }
    if (to.hash) {
      return {selector: to.hash}
      }
    else {
      return { left: 0, top: 0}}
  },
})


export default router
