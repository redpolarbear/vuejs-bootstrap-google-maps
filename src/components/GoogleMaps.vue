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
        <b-card bg-variant="light">
          <b-media>
            <b-img slot="aside" blank rounded="circle" blank-color="#ccc" width="48" alt="placeholder" />
            <div class="mt-0">
              <h6>John Tom 
                <small>@jtom</small>
                <small> - Sept 21</small>
              </h6>
            </div>
            <b-row>
              <b-col>
                <h4 class="text-uppercase text-center">I have ...</h4>
                <b-media>
                  <!-- <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" /> -->
                  <b-img slot="aside" :src="book.imageLinks.thumbnail" height="112"/>
                  <h6 class="m-0">{{ book.title }}</h6>
                  <p class="m-0">{{ book.authors[0]}}</p>
                  <p class="m-0">{{ book.categories[0] }}</p>
                  <!-- <p class="m-0">{{ book.pageCount }}</p> -->
                  <p class="m-0">{{ book.industryIdentifiers[0].identifier }} / {{ book.industryIdentifiers[1].identifier }}</p>
                  <p class="m-0">{{ book.publisher }}</p>
                  <p class="m-0">{{ book.publishedDate }}</p>
                  <!-- <p>{{ book.description }}</p> -->
                </b-media>
              </b-col>
              <b-col align-self="center" class="text-center" xl="auto" lg="12">
                <i class="fa fa-exchange fa-3x" aria-hidden="true"></i>
              </b-col>
              <b-col>
                <h4 class="text-uppercase text-center">and looking for ...</h4>
                <b-media>
                  <b-img slot="aside" blank blank-color="#ccc" width="64" alt="placeholder" />
                  <h6 class="mt-0">Nested</h6>
                  <p class="mb-0">
                    Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </b-media>
              </b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col>
                <b-button variant="link">
                  <i class="fa fa-comment-o" aria-hidden="true"></i>
                </b-button>
                <b-button variant="link">
                  <i class="fa fa-retweet" aria-hidden="true"></i>
                </b-button>
                <b-button variant="link">
                  <i class="fa fa-heart-o" aria-hidden="true"></i>
                </b-button>
                <b-button variant="link">
                  <i class="fa fa-share" aria-hidden="true"></i>
                </b-button>  
              </b-col>
              <b-col class="text-right">
                <b-button size="sm">
                  Request
                </b-button>
                <b-button size="sm">
                  Contact
                </b-button>
              </b-col>
            </b-row>
          </b-media>
        </b-card>
        <b-card-group deck class="flex-wrap">
          <b-card no-body
            class="mt-2 mb-2"
            style="max-width: 17rem; min-width: 17rem;"
            v-for="(item,i) in 10" :key="i">
            <b-card-header class="pt-2 pb-2" >
              <b-row no-gutters>
                <b-col md="auto">
                  <!-- user.avatar -->
                  <b-img blank rounded="circle" blank-color="#ccc" width="48" />
                </b-col>
                <b-col class="ml-2" align-self="top">
                  <!-- username -->
                  <h6 class="m-0">John Tom</h6>
                  <!-- unique name -->
                  <h6 class="m-0"><small class="text-secondary">@jtom</small>
                    <!-- moment -->
                    <small> - Sept 21</small>
                  </h6>
                </b-col>
              </b-row>
            </b-card-header>
            <!-- book.thumbnail - background -->
            <b-card-img :src="book.imageLinks.thumbnail" class="book-card-background"></b-card-img>
            <b-card-body>
              <b-row class="book-card-body-image-row" align-h="center">
                <!-- book.thumbnail - cover -->
                <b-img rounded class="book-card-body-image" :src="book.imageLinks.thumbnail"></b-img>
              </b-row>
              <b-row class="text-center card-text justify-content-center mt-2">
                <!-- book.title -->
                <h6>Scattergories Word Search Puzzles</h6>
                <!-- book.author -->
                <h6><small>Mark Danna</small></h6>
              </b-row>
            </b-card-body>
            <b-card-footer class="pt-1 pb-1">
              <b-row align-h="between" no-gutters>
                <b-col>
                  <b-button variant="link">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                  </b-button>
                  <b-button variant="link">
                    <i class="fa fa-retweet" aria-hidden="true"></i>
                  </b-button>
                  <b-button variant="link">
                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                  </b-button>
                </b-col>
                <b-col md="auto" align-self="center">
                  <b-button size="sm" variant="info">
                    <i class="fa fa-exchange" aria-hidden="true"></i> More
                  </b-button>
                </b-col>
              </b-row>
            </b-card-footer>
          </b-card>
        </b-card-group>
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
      marker: [],
      book: {
        title: 'Scattergories Word Search Puzzles',
        authors: [
          'Mark Danna'
        ],
        publisher: 'Sterling Publishing Company, Inc.',
        publishedDate: '2009-06-02',
        description: 'Fans of Hasbro’s classic SCATTERGORIES can now play anywhere, anytime--and even compete when there’s no other player around! And those who simply love word searches will enjoy a new, seamlessly intertwined game-and-puzzle experience. Here are 60 searches, each with 12 theme categories--perhaps \'Book Titles” or \'Terms of Endearment”--and a letter of the alphabet. Players try to come up with as many answers that start with that letter as they can. Then, they look in the grid, see if their answers are there, and get points for every one they find. Extra letters in the grid spell out a few more items in one of the categories. Those in need of a little help can find word lists in the back to guide them!',
        industryIdentifiers: [{
          type: 'ISBN_10',
          identifier: '1402759770'
        },
        {
          type: 'ISBN_13',
          identifier: '9781402759772'
        }
        ],
        readingModes: {
          text: false,
          image: true
        },
        pageCount: 159,
        printType: 'BOOK',
        categories: [
          'Games'
        ],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: '0.0.1.0.preview.1',
        imageLinks: {
          smallThumbnail: 'http://books.google.com/books/content?id=1W4rRQL1KwEC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail: 'http://books.google.com/books/content?id=1W4rRQL1KwEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        },
        language: 'en',
        previewLink: 'http://books.google.ca/books?id=1W4rRQL1KwEC&printsec=frontcover&dq=isbn:1402759770&hl=&cd=1&source=gbs_api',
        infoLink: 'http://books.google.ca/books?id=1W4rRQL1KwEC&dq=isbn:1402759770&hl=&source=gbs_api',
        canonicalVolumeLink: 'https://books.google.com/books/about/Scattergories_Word_Search_Puzzles.html?hl=&id=1W4rRQL1KwEC'
      }
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
.book-card-background.card-img {
  filter: blur(2px) grayscale(100%) opacity(0.6);
  max-height: 12rem;
  object-fit: cover;
}
.book-card-body-image {
  border: 10px solid rgba(255, 255, 255, 0.5);
  height: 168px;
  margin-bottom: -8rem;
  position: relative;
  width: auto;
  top: -8rem;
}

</style>
