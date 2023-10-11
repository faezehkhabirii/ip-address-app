import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet"; // Import Leaflet

import markerIcon from "../images/icon-location.svg";

const Map = ({ coordinates }) => {
  let state = {
    keyMAP: Math.random(),
  };

  // Define a custom icon using Leaflet
  const customIcon = L.icon({
    iconUrl: markerIcon, // Your custom marker icon URL
    iconSize: [30], // Size of the icon (smaller)
    iconAnchor: [12,12], // Anchor point of the icon
  });

  return (
    <MapContainer
      key={state.keyMAP}
      center={[coordinates.lat, coordinates.lng]}
      zoom={13}
      className="w-full h-3/5 z-0"
    >
      <TileLayer
         attribution="Google Maps"
         url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
        />
      <Marker position={[coordinates.lat, coordinates.lng]} icon={customIcon}>
        {/* You can add a Popup component here if needed */}
      </Marker>
    </MapContainer>
  );
};

export default Map;
