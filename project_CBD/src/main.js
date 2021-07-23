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
import ContactsPage from './components/ContactsPage'
import VModal from 'vue-js-modal'
import './css/leaflet.css';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { Icon } from 'leaflet';
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
Vue.filter('truncate', function (text, length, suffix) {
    if (text.length > length) {
        return text.substring(0, length) + suffix;
    } else {
        return text;
    }
});
Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.use(VModal)
Vue.component('home-page', HomePage)
Vue.component('aboutme-page', AboutmePage)
Vue.component('services-page', ServicesPage)
Vue.component('prices-page', PricesPage)
Vue.component('contacts-page', ContactsPage)
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[ 
  { path: '/homepage', component: HomePage },
  { path: '/aboutmepage', component: AboutmePage },
  { path: '/servicespage', component: ServicesPage },
  { path: '/pricespage', component: PricesPage },
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
