<template>
  <b-container fluid>
    <b-row style="height: 100vh">
      <b-col class="google-map-column">
        <gmap-map
          :center="center"
          :zoom="15"
          style="width: 100%; height: 100%;"
          ref="map">
          <gmap-marker
            v-for="(m, index) in markers"
            :key="index"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            @click="center=m.position">
          </gmap-marker>
        </gmap-map>
      </b-col>
      <b-col class="list-column">
        <div class="form-group">
          <label for="addressInput">Address</label>
          <gmap-autocomplete class="form-control" id="addressInput"
            @place_changed="setPlace">
          </gmap-autocomplete>
        </div>
        {{latLng.lat}}, {{latLng.lng}}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'GoogleMaps',
  data () {
    return {
      markers: [{
        position: {lat: 10.0, lng: 10.0}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }],
      place: null,
      latLng: { lat: 49.2827291, lng: -123.12073750000002 }
    }
  },
  computed: {
    center: function () {
      return this.latLng
    }
  },
  methods: {
    setPlace (place) {
      try {
        console.log(place)
        this.latLng = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
        console.log(this.latLng)
      } catch (error) {
        console.log('error')
      }
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
