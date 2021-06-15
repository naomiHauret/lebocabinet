import 'leaflet/dist/leaflet.css'
import 'glider-js/glider.min.css'
import lazyInit from '@helpers/lazyInit'
import initializeMap from '@components/leaflet-map'
import initializeMenu from '@components/menu'
import Glider from 'glider-js/glider'

// Initialize OpenStreetMap/Leaflet map when in viewport
const mapElement = document.querySelector('#clinic-map')
lazyInit(mapElement, () => {
  initializeMap(mapElement)
})

// Menu
const navbar = document.querySelector('[data-interactive="navbar"]')
window.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop
    const classname = "has-shadow"
    if (scroll > 20) {
      navbar.classList.add(classname)
    } else {
      navbar.classList.remove(classname)
    }
  }
)


const menuControls = document.querySelectorAll('[data-interactive="menu-control"]')
const menuTarget = document.querySelector('[data-interactive="menu-fold"]')
initializeMenu(menuControls, menuTarget)

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
