import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  },
  {
  path: '/uyeGiris',
  name: 'uyeGiris',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "UyeGiris" */ '../components/uyeGiris.vue')
},
{
  path: '/anasayfaSlider',
  name: 'anasayfaSlider',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "anasayfaSlider" */ '../components/anasayfaSlider.vue')
},
{
  path: '/navigation',
  name: 'navigation',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "navigation" */ '../components/navigation.vue')
},
{
  path: '/headerContent',
  name: 'headerContent',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "headerContent" */ '../components/headerContent.vue')
},
{
  path: '/uyeOl',
  name: 'uyeOl',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "uyeOl" */ '../components/uyeOl.vue')
},
{
  path: '/urunListe',
  name: 'urunListe',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "urunListe" */ '../components/urunListe.vue')
},
{
  path: '/urunDetay',
  name: 'urunDetay',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "urunListe" */ '../components/urunDetay.vue')
},
{
  path: '/sepet',
  name: 'sepet',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "urunListe" */ '../components/sepet.vue')
},
{
  path: '/urunDetayBenzerUrunler',
  name: 'urunDetayBenzerUrunler',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "urunListe" */ '../components/urunDetayBenzerUrunler.vue')
},
{
  path: '/sepetslider',
  name: 'sepetslider',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "urunListe" */ '../components/sepetslider.vue')
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
