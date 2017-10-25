<template>
  <b-container fluid>
    <b-row style="height: 100vh">
      <b-col class="google-map-column">
        <gmap-map
          :center="center"
          :zoom="5"
          style="width: 100%; height: 100%;">
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position">
          </gmap-marker>
        </gmap-map>
      </b-col>
      <b-col class="list-column">
        <h1>{{ msg }}</h1>
        <b-alert show>
          Hello Google Maps
        </b-alert>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'GoogleMaps',
  data () {
    return {
      msg: 'Welcome to the Google Maps Testing Page',
      center: {lat: 10.0, lng: 10.0},
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.google-map-column {
  overflow-y: hidden;
}
.list-column {
  overflow-y: auto;
}

</style>
