import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

// Necessary for the marker to show up
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
})

L.Marker.prototype.options.icon = DefaultIcon

export default function initializeMap(mapElement) {
  const coordinates = [mapElement.dataset.latitude, mapElement.dataset.longitude]
  const map = L.map(mapElement, {
    center: coordinates,
    zoom: 20,
  })
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  L.marker(coordinates).addTo(map)
}
