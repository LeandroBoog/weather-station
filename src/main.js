import Vue from 'vue'
import App from './App.vue'

import VueAxiosPlugin from 'vue-axios-plugin'
Vue.use(VueAxiosPlugin, {
  resHandleFunc: response => response.data
})

import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage)


// i dont even remember what this was for
Vue.config.productionTip = false

import VueGeolocation from "vue-browser-geolocation/src";
Vue.use(VueGeolocation)

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBo2DTaTpBeRvzTvC4Wgo7AQWyVGKFUTtE",
    libraries: ["places"]
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
