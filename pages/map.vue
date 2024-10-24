<template>
  <div class="dark-mode-map">
    <div class="map-and-locations flex md:flex-row flex-col-reverse mt-24">
      <div id="map" ref="mapRef" class="map"></div>
      <div class="nearest-locations flex items-center flex-col">
        <h2 class="locations-title">Nearest Locations</h2>
        <div class="search-container flex flex-col">
          <input 
            v-model="postalCode" 
            type="tel" 
            placeholder="Enter your ZIP code"
            class="postal-code-input rounded-full"
            maxlength="5"
          >
          <div class="flex align-middle justify-center mt-5">
            <button class="relative rounded-full w-[30vh] bg-primary-light text-white py-3 px-6 transition duration-300 ease-in-out
              hover:bg-primary transform scale-100 flex items-center justify-center animate-pulse" @click="findNearestLocations">
              FIND US      
              <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m0 0l-4-4m4 4l4-4" />
              </svg>
            </button>
          </div>
        </div>
        <div v-for="(location, index) in nearestLocations" :key="index" 
             class="location-card" 
             :class="{ 'border-[#FC6D26]': index === 0, 'border-[#16202C]': index !== 0 }">
          <h3>{{ location.name }}</h3>
          <p class="text-white">Distance: {{ (location.distance / 1609.34).toFixed(2) }} miles</p>
          <a :href="location.url" target="_blank" rel="noopener noreferrer" 
             class="text-sm mt-2 inline-block bg-primary-light text-white rounded-full py-1 px-4 transition duration-300 ease-in-out hover:bg-primary">
            View in Google Maps
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import myIcon from '@/public/icons/pinRegular.svg';


const postalCode = ref('');
const nearestLocations = ref([]);
const mapRef = ref(null);
let map, google, markerClusterer, geocoder;

// Definir las variables de los marcadores aquí, pero inicializarlas después de cargar la API de Google Maps
let closeSvgMarker;
let regularSvgMarker;

const locations = [
  {
    url: "https://maps.app.goo.gl/YA68UvsLrsMHsXhh9",
    name: "Northgate Market - South Gate",
    address: "11660 Firestone Blvd, Norwalk, CA 90650",
    position: { lat: 33.913431260335535, lng: -118.08486537430285 }
  },
  {
    url: "https://maps.app.goo.gl/8xtYteAPsnnnXyag7",
    name: "Northgate Market - Santa Ana",
    address: "770 S Harbor Blvd, Santa Ana, CA 92704",
    position: { lat: 33.73701201229799, lng: -117.92141702872351 }
  },
  {
    url: "https://maps.app.goo.gl/7p46ddHPturRFhUY9",
    name: "Northgate Market - Los Angeles",
    address: "425 S Soto St, Los Angeles, CA 90033",
    website: "http://www.northgatemarket.com/",
    position: { lat: 34.04018551664899, lng: -118.21289004193324 }
  }
];

onMounted(async () => {
  const loader = new Loader({
    apiKey: "AIzaSyBMSXjwItRKJDOGHYwLpwl0Y5Wmiv1y44s",
    version: "weekly",
    libraries: ["places", "geometry"]
  });


  // Espera a que la API de Google Maps esté completamente cargada
  google = await loader.load();

  // Inicializa el mapa
  map = new google.maps.Map(mapRef.value, {
    center: { lat: 33.80772982455205, lng: -117.83720603568841 },
    zoom: 10,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#131C27" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#131C27" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#131C27" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#B88430" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#0B1016" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#16202C" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });




  // Inicializa el Geocoder para buscar el código postal
  geocoder = new google.maps.Geocoder();

  // Inicializa los marcadores ahora que google.maps está disponible
  closeSvgMarker = {
    url: '/icons/botellaP2.png',
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
  };

  regularSvgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "#FC6D26",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
  };

  // Crea los marcadores
  const markers = locations.map((location, index) => {
    const marker = new google.maps.Marker({
      position: location.position,
      map: map,
      title: location.name,
      icon: index === 0 ? closeSvgMarker : regularSvgMarker,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="color: #0B1016;">
          <h3><strong>place:</strong>${location.name}</h3>
          <p><strong>address:</strong> ${location.address}</p>
          <p><a href="${location.website}" target="_blank" style="color: #ffffff;">Website</a></p>
          <a href="${location.url}" target="_blank" style="background-color: #ffffff; color: #0B1016; padding: 5px 10px; text-decoration: none; display: inline-block;">View in Google Maps</a>
        </div>`,
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    return marker;
  });

  markerClusterer = new MarkerClusterer({ map, markers });
});

const findNearestLocations = () => {
  if (!postalCode.value) return;

  geocoder.geocode({ address: postalCode.value }, (results, status) => {
    if (status === "OK" && results[0]) {
      const userLocation = results[0].geometry.location;

      nearestLocations.value = locations
        .map(location => {
          const locationLatLng = new google.maps.LatLng(location.position.lat, location.position.lng);
          const distance = google.maps.geometry.spherical.computeDistanceBetween(userLocation, locationLatLng);
          return { ...location, distance };
        })
        .sort((a, b) => a.distance - b.distance);
    } else {
      alert("We couldn't find that postal code.");
    }
  });
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
}

.locations-title {
  font-size: 24px;
  color: #FC6D26;
}

.postal-code-input {
  padding: 10px;
  margin-bottom: 10px;
}

.location-card {
  background-color: #16202C;
  border: 2px solid;
  border-radius: 10px;
  padding: 15px;
  margin-top: 15px;
  text-align: center;
}

button:hover {
  background-color: #FF8500;
}
</style>
