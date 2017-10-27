<template>
  <b-container fluid>
    <b-row class="gmap-row">
      <b-col class="gmap-col">
        <div class="google-map" :id="mapName"></div>
      </b-col>
      <b-col class="gmap-list-col">
        <b-input-group>
          <b-input-group-addon>
            <i class="fa fa-map-marker fa-lg"></i>
          </b-input-group-addon>
          <b-form-input
            id="pac-input"
            type="text"
            placeholder="Enter a location">
          </b-form-input>
          <!-- <b-input-group-btn>
            <b-button><i class="fa fa-camera fa-lg"></i></b-button>
          </b-input-group-btn> -->
        </b-input-group>
        {{ latLng }}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'googlemaps',
  data () {
    return {
      mapName: 'gmap',
      map: null,
      infoWindow: null,
      latLng: {},
      marker: []
    }
  },
  mounted () {
    const options = {
      center: new google.maps.LatLng(49.2827291, -123.12073750000002),
      zoom: 12
    }
    this.map = new google.maps.Map(document.getElementById(this.mapName), options)
    this.infoWindow = new google.maps.InfoWindow()
    const input = document.getElementById('pac-input')
    let autocomplete = new google.maps.places.Autocomplete(input)
    autocomplete.bindTo('bounds', this.map)
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //     var pos = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     }
    //     this.infoWindow.setPosition(pos)
    //     this.infoWindow.setContent('Location found.')
    //     this.infoWindow.open(this.map)
    //     console.log(pos)
    //     this.map.setCenter(pos)
    //   }.bind(this), function () {
    //     this.handleLocationError(true, this.infoWindow, this.map.getCenter())
    //   })
    // } else {
    //   // Browser doesn't support Geolocation
    //   this.handleLocationError(false, this.infoWindow, this.map.getCenter())
    // }
    autocomplete.addListener('place_changed', function () {
      const place = autocomplete.getPlace()
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        return
      }
      if (place.geometry.viewport) {
        this.map.fitBounds(place.geometry.viewport)
        this.latLng = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
      } else {
        this.map.setCenter(place.geometry.location)
        this.map.setZoom(15)
      }
      console.log(place)
    }.bind(this))

    const myLocations = [
      { lat: 49.2488091, lng: -122.98051040000001 },
      { lat: 49.2827291, lng: -123.12073750000002 },
      { lat: 49.270622, lng: -123.13474100000002 },
      { lat: 49.279794, lng: -123.11567000000002 },
      { lat: 49.2629521, lng: -123.11449959999999 }
    ]
    // const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const markers = myLocations.map(function (location, i) {
      let m = new google.maps.Marker({
        position: location
        // label: labels[i % labels.length]
      })
      m.addListener('click', function () {
        this.map.setCenter(m.getPosition())
      })
      return m
    })
    this.marker = new MarkerClusterer(this.map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'})
  },
  methods: {
    handleLocationError (browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos)
      if (browserHasGeolocation) {
        infoWindow.setContent('Error: The Geolocation service failed.')
      } else {
        infoWindow.setContent('Error: Your browser doesn\'t support geolocation.')
      }
      infoWindow.open(this.map)
    }
  }
}
</script>

<style scoped>
.gmap-row {
  height: 100vh;
}
.gmap-col {
  overflow-y: hidden;
}
.gmap-list-col {
  overflow-y: scroll;
}
.google-map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}


</style>
