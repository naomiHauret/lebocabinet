export default function initializeMap(mapElement) {
  const coordinates = [mapElement.dataset.latitude, mapElement.dataset.longitude]
  const map = L.map(mapElement, {
    center: coordinates,
    zoom: 16,
  })
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  L.marker(coordinates).addTo(map)
}
