import React, { useEffect } from 'react';
import L from 'leaflet';  // Imports the Leaflet library for creating interactive maps.
import 'leaflet/dist/leaflet.css'; //Imports the default Leaflet styles for the map.

// Functional component for displaying a map with a marker at a specific location
const LocationMap = ({ location }) => {
  useEffect(() => {
    // Create map instance with the specified location and zoom level
    const map = L.map('map').setView([location.latitude, location.longitude], 15);

    // Add tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Define a custom marker icon for the location
    const customIcon = new L.Icon({
      iconUrl: process.env.PUBLIC_URL + '/images/location-logo.png', // Adjust the path based on your setup
      iconSize: [32, 32], // Adjust the size of your marker image
      iconAnchor: [16, 32], // Adjust the anchor point if needed
    });

    // Add a marker with the custom icon to the specified location
    L.marker([location.latitude, location.longitude], { icon: customIcon }).addTo(map);

    // Cleanup function to remove the map instance when the component is unmounted
    return () => {
      map.remove();
    };
  }, [location.latitude, location.longitude]); // Dependencies for the useEffect hook

  // Return a div with the id "map" to render the map, and set its height
  return <div id="map" style={{ height: '400px' }} />;
};

export default LocationMap;