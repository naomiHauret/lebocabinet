import 'alpinejs'
import 'leaflet/dist/leaflet.css'
import 'glider-js/glider.min.css'
import lazyInit from '@helpers/lazyInit'
import initializeMap from '@components/leaflet-map'
import Glider from 'glider-js/glider'

// Initialize OpenStreetMap/Leaflet map when in viewport
const mapElement = document.querySelector('#clinic-map')
lazyInit(mapElement, () => {
  initializeMap(mapElement)
})

new Glider(document.querySelector('#carousel'), {
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  draggable: true,
  rewind: true,
  dots: '.carousel_dots',
  arrows: {
    prev: '.carousel_control-prev',
    next: '.carousel_control-next',
  },
})
