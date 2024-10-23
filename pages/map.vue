<template>
  <div class="map-container mt-24">
    <div id="postal-code-form">
      <input v-model="postalCode" type="text" placeholder="Ingresa tu código postal">
      <button @click="findNearestLocations">Buscar</button>
    </div>
    <div id="nearest-locations">
      <h4 v-if="nearestLocations.length">Lugares más cercanos:</h4>
      <div v-for="(location, index) in nearestLocations" :key="index">
        <p><strong>{{ index + 1 }}. {{ location.name }}</strong></p>
        <p>Distancia: {{ (location.distance / 1000).toFixed(2) }} km</p>
        <p><strong>Teléfono:</strong> {{ location.phone || 'No disponible' }}</p>
        <p><strong>Sitio web:</strong> 
          <a v-if="location.website" :href="location.website" target="_blank">{{ location.website }}</a>
          <span v-else>No disponible</span>
        </p>
        <a :href="location.url" target="_blank" class="google-maps-button">
          Ver en Google Maps
        </a>
        <hr>
      </div>
    </div>
    <div id="map"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

const postalCode = ref('');
const nearestLocations = ref([]);
let map, infoWindow, geocoder, markerClusterer;
let userLocation = null;
let nearestLocationMarkers = [];

// Función para extraer coordenadas de URL de Google Maps
function extractCoordinatesFromUrl(url) {
  try {
    // Para URLs cortas de Google Maps
    if (url.includes('maps.app.goo.gl')) {
      const urlMappings = {
        'PMf5kniWSoGULjBJ6': { lat: 19.726185199015827, lng: -101.14208524235971 },
        'AG6xVCBLh4wqf3eL8': { lat: 19.703490344222583, lng: -101.19236006312148 },
         
        // Agrega más mapeos según necesites
      };
      const id = url.split('/').pop();
      return urlMappings[id] || null;
    }
    
    // Para URLs con coordenadas directas
    if (url.includes('maps?q=')) {
      const coords = url.split('maps?q=')[1].split(',');
      return {
        lat: parseFloat(coords[0]),
        lng: parseFloat(coords[1])
      };
    }
    
    if (url.includes('maps/@')) {
      const coords = url.split('maps/@')[1].split(',');
      return {
        lat: parseFloat(coords[0]),
        lng: parseFloat(coords[1])
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error extracting coordinates:', error);
    return null;
  }
}

const locations = [
  {
    url: "https://maps.app.goo.gl/PMf5kniWSoGULjBJ6",
    name: "Cervecería La Bru",
    phone: "+524439702330",
    website: "http://www.cervezalabru.com.mx/"
  },
  {
    url: "https://maps.app.goo.gl/AG6xVCBLh4wqf3eL8",
    name: "Santuario La Bru",
    phone: "+524439702330",
  },
  {
    url: "https://www.google.com/maps?q=25.6692,-100.3097",
    name: "Hey Guapa Monterrey",
    phone: "8181234567",
    website: "https://heyguapa.mx/"
  },
  {
    url: "https://www.google.com/maps?q=24.8049,-107.3940",
    name: "Hey Guapa Culiacán",
    phone: "6671234567",
    website: "https://heyguapa.mx/"
  }
];

const loader = new Loader({
  apiKey: "AIzaSyBMSXjwItRKJDOGHYwLpwl0Y5Wmiv1y44s",
  version: "weekly",
  libraries: ["places", "geometry"]
});

onMounted(async () => {
  try {
    const google = await loader.load();
    initMap(google);
  } catch (error) {
    console.error('Error loading Google Maps:', error);
  }
});

onUnmounted(() => {
  if (markerClusterer) {
    markerClusterer.clearMarkers();
  }
});

function initMap(google) {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 23.6345, lng: -102.5528 }, // Centro de México
  });

  infoWindow = new google.maps.InfoWindow();
  geocoder = new google.maps.Geocoder();

  const markers = locations.map((location, i) => {
    const position = extractCoordinatesFromUrl(location.url);
    if (!position) {
      console.error(`Could not extract coordinates for location: ${location.name}`);
      return null;
    }

    const marker = new google.maps.Marker({
      position: position,
      label: {
        text: (i + 1).toString(),
        color: "white"
      },
    });

    marker.addListener("click", () => {
      const content = `
        <div class="info-window">
          <h3>${location.name}</h3>
          <p><strong>Teléfono:</strong> ${location.phone || 'No disponible'}</p>
          <div class="social-links">
            ${location.website ? `<a href="${location.website}" target="_blank">Sitio Web</a>` : ''}
          </div>
          <a href="${location.url}" target="_blank" class="google-maps-button">
            Ver en Google Maps
          </a>
        </div>
      `;
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    });

    return marker;
  }).filter(marker => marker !== null);

  markerClusterer = new MarkerClusterer({ map, markers });
}

function findNearestLocations() {
  if (!geocoder) return;

  geocoder.geocode({ 'address': postalCode.value + ', Mexico' }, (results, status) => {
    if (status === 'OK') {
      userLocation = results[0].geometry.location;
      
      let sortedLocations = locations.map(location => {
        const position = extractCoordinatesFromUrl(location.url);
        if (!position) return null;

        const distance = google.maps.geometry.spherical.computeDistanceBetween(
          userLocation,
          new google.maps.LatLng(position)
        );
        return { ...location, position, distance };
      })
      .filter(location => location !== null)
      .sort((a, b) => a.distance - b.distance);

      nearestLocations.value = sortedLocations.slice(0, 3);
      markNearestLocations(nearestLocations.value, userLocation);
    } else {
      alert('No se pudo encontrar la ubicación para el código postal proporcionado: ' + status);
    }
  });
}

function markNearestLocations(locations, userLocation) {
  // Eliminar marcadores anteriores
  nearestLocationMarkers.forEach(marker => marker.setMap(null));
  nearestLocationMarkers = [];

  // Crear marcador de ubicación del usuario
  const userMarker = new google.maps.Marker({
    position: userLocation,
    map: map,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      fillColor: '#4285F4',
      fillOpacity: 1,
      strokeColor: '#4285F4',
      strokeOpacity: 1,
      strokeWeight: 1,
      scale: 10
    },
    title: "Tu ubicación"
  });
  nearestLocationMarkers.push(userMarker);

  // Crear nuevos marcadores para los lugares más cercanos
  locations.forEach((location, index) => {
    const marker = new google.maps.Marker({
      position: location.position,
      map: map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#FF69B4',
        fillOpacity: 1,
        strokeColor: '#FF69B4',
        strokeOpacity: 1,
        strokeWeight: 1,
        scale: 10
      },
      label: {
        text: (index + 1).toString(),
        color: "white"
      },
      title: location.name
    });

    nearestLocationMarkers.push(marker);
  });

  // Centrar el mapa para mostrar todos los marcadores
  const bounds = new google.maps.LatLngBounds();
  nearestLocationMarkers.forEach(marker => bounds.extend(marker.getPosition()));
  map.fitBounds(bounds);
}
</script>

<style scoped>
.map-container {
  position: relative;
  height: 100vh;
  width: 100%;
}

#map {
  height: 100%;
  width: 100%;
}

.info-window {
  max-width: 300px;
}

.info-window h3 {
  margin-top: 0;
}

.info-window p {
  margin-bottom: 5px;
}

.social-links a {
  margin-right: 10px;
}

#nearest-locations {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #999;
  border-radius: 5px;
  font-family: 'Roboto','sans-serif';
  max-width: 300px;
  max-height: 80vh;
  overflow-y: auto;
}

.google-maps-button {
  display: inline-block;
  background-color: #4285F4;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 10px;
}

#postal-code-form {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 5;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #999;
  border-radius: 5px;
  font-family: 'Roboto','sans-serif';
}
</style>