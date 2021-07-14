// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './css/style.css'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage'
import AboutmePage from './components/AboutmePage'
import ServicesPage from './components/ServicesPage'
import PricesPage from './components/PricesPage'
import CertificatesPage from './components/CertificatesPage'
import ContactsPage from './components/ContactsPage'

Vue.component('home-page', HomePage)
Vue.component('aboutme-page', AboutmePage)
Vue.component('services-page', ServicesPage)
Vue.component('prices-page', PricesPage)
Vue.component('certificates-page', CertificatesPage)
Vue.component('contacts-page', ContactsPage)
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[ 
  { path: '/homepage', component: HomePage },
  { path: '/aboutmepage', component: AboutmePage },
  { path: '/servicespage', component: ServicesPage },
  { path: '/pricespage', component: PricesPage },
  { path: '/certificatespage', component: CertificatesPage },
  { path: '/contactspage', component: ContactsPage },
  ],
  linkActiveClass: 'is-active',
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
