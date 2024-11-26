"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Image from "next/image";

export function LeafletMapSolo({
  place_position,
  place_name,
  place_image,
  className,
}) {
  const customIconTerminalUrl = "/icons/icons8-home-address-48.png";
  const customIconTerminal = new L.Icon({
    iconUrl: customIconTerminalUrl,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

  return (
    <section className={`shadow ${className}`}>
      <MapContainer
        center={place_position}
        zoom={20}
        scrollWheelZoom={false}
        className="w-full h-[500px] -z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={place_position} icon={customIconTerminal}>
          <Popup>
            <h1 className="text-base uppercase font-bold">{place_name}</h1>
            <Image
              src={place_image}
              alt={place_name}
              width={400}
              height={600}
            />
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
