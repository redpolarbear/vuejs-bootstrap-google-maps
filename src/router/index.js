import Vue from 'vue'
import Router from 'vue-router'
// import GoogleMaps from '@/components/GoogleMaps'
import GoogleMaps from '@/components/GoogleMaps'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'googlemaps',
      component: GoogleMaps
    }
  ]
})
