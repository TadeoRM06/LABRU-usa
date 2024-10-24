<template>
    <div class="dark-mode-map">
        <!-- Section header -->
        <div class="mx-auto max-w-5xl px-4 text-center md:pb-20">
            <h2 class="h2 text-white " data-aos="fade-up" data-aos-delay="100" >
                Find <span class="text-primary ">LA BRU </span>in a Northgate near you and enjoy the magic of Mexico.
            </h2>
        </div>
        <div class="map-and-locations flex md:flex-row flex-col-reverse" data-aos="fade-up" data-aos-delay="100" >
            <div id="map" ref="mapRef"></div>
            <div class="nearest-locations flex items-center flex-col">
                <h2 class="locations-title">Nearest Locations</h2>
                <div class="search-container flex flex-col">
                    <input v-model="postalCode" type="tel" placeholder="Enter your ZIP code"
                        class="postal-code-input rounded-full" maxlength="5">
                    <div class="flex align-middle justify-center mt-5">
                        <button class="relative rounded-full w-[30vh] bg-primary-light text-white py-3 px-6 transition duration-300 ease-in-out
                hover:bg-primary transform scale-100 flex items-center justify-center animate-pulse"
                            @click="findNearestLocations">
                            FIND US
                            <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4v16m0 0l-4-4m4 4l4-4" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div v-for="(location, index) in nearestLocations" :key="index" class="location-card"
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
const config = useRuntimeConfig();


const postalCode = ref('');
const nearestLocations = ref([]);
const mapRef = ref(null);
let map, google, markerClusterer;

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

// Custom SVG markers
const regularSvgMarker = {

};

const nearestSvgMarker = {

};

// You can add more custom SVG markers here

onMounted(async () => {
    const loader = new Loader({
        apiKey: config.public.apiKey,
        version: "weekly",
        libraries: ["places", "geometry"]
    });

    google = await loader.load();
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

    const markers = locations.map((location, index) => {
        const marker = new google.maps.Marker({
            position: location.position,
            map: map,
            title: location.name,
            icon: index === 0 ? nearestSvgMarker : regularSvgMarker,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
          <div style="color: #0B1016;">
            <h3><strong>place:</strong>${location.name}</h3>
            <p><strong>address:</strong> ${location.address}</p>
            <p><a href="${location.website}" target="_blank" style="color: #ffffff;">Website</a></p>
            <a href="${location.url}" target="_blank" style="background-color: #ffffff; color: #0B1016; padding: 5px 10px; text-decoration: none; display: inline-block; margin-top: 10px;">View in Google Maps</a>
          </div>
        `,
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });

        return marker;
    });

    // Initialize MarkerClusterer
    markerClusterer = new MarkerClusterer({ map, markers });
});

const findNearestLocations = () => {
    if (!google || !postalCode.value) return;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: `${postalCode.value}, USA` }, (results, status) => {
        if (status === "OK") {
            const userLocation = results[0].geometry.location;
            nearestLocations.value = locations
                .map((location) => ({
                    ...location,
                    distance: google.maps.geometry.spherical.computeDistanceBetween(
                        userLocation,
                        new google.maps.LatLng(location.position)
                    ),
                }))
                .sort((a, b) => a.distance - b.distance)
                .slice(0, 3);

            // Update markers on the map
            markerClusterer.clearMarkers();
            const newMarkers = nearestLocations.value.map((location, index) => {
                return new google.maps.Marker({
                    position: location.position,
                    map: map,
                    title: location.name,
                    icon: index === 0 ? nearestSvgMarker : regularSvgMarker,
                });
            });
            markerClusterer.addMarkers(newMarkers);

            // Center the map on the nearest location
            if (nearestLocations.value.length > 0) {
                map.setCenter(nearestLocations.value[0].position);
                map.setZoom(12);
            }
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
};
</script>

<style scoped>
.dark-mode-map {
    background-color: #000000;
    color: #f39c12;
    min-height: 100vh;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.title {
    font-size: 2rem;
    margin-bottom: 20px;
}

.search-container {
    display: flex;
    margin-bottom: 20px;
}

.postal-code-input {
    flex-grow: 1;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid white;
    background-color: #000000;
    color: white;
}

.search-button {
    padding: 10px 8px;
    font-size: 1rem;
    background-color: #f39c12;
    color: #0B1016;
    border: none;
    cursor: pointer;
}

.map-and-locations {
    display: flex;
    gap: 20px;
}

#map {
    height: 600px;
    flex-grow: 1;
}

.nearest-locations {
    background-color: #0B1016;
    padding: 20px;
    border-radius: 8px;
}

.locations-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: whitesmoke;
}

.location-card {
    background-color: #16202C;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    border: 2px solid;
}

.location-card h3 {
    margin-top: 0;
    color: white;
}

.website-link {
    color: #ffffff;
    text-decoration: none;
}

.website-link:hover {
    text-decoration: underline;
}
</style>