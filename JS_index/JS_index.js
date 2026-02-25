// Initialisation de la carte sur Haïti
const map = L.map('map', {
    zoomControl: false // On cache pour un look plus propre
}).setView([18.5392, -72.335], 13);

// Design de la carte (Style clair et moderne)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Personnalisation de l'icône de marqueur (optionnel)
const redIcon = L.circleMarker([18.5414, -72.3015], {
    color: '#EF4444',
    fillColor: '#EF4444',
    fillOpacity: 0.5,
    radius: 15
}).addTo(map).bindPopup("<b>Tabarre 27</b><br>Tansyon wo.");

// Ajouter d'autres points ici dynamiquement plus tard...