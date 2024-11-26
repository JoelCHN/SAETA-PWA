"use client";

import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  Tooltip,
} from "react-leaflet";
import { useState } from "react";
import UTMLatLng from "utm-latlng";
import L from "leaflet";

export function LeafletMap({
  stops_ida,
  stops_vuelta,
  address_ida,
  address_vuelta,
  short_name,
  long_name,
  route_type,
}) {
  const [showIda, setShowIda] = useState(true); // Estado para mostrar u ocultar la ruta de ida
  const [showVuelta, setShowVuelta] = useState(true); // Estado para mostrar u ocultar la ruta de vuelta

  const vhsPosition = [17.98689, -92.93028];
  const utm = new UTMLatLng();

  let ida_route = [];
  let vuelta_route = [];

  if (stops_ida && stops_vuelta) {
    stops_ida.map((stop) =>
      ida_route.push(
        utm.convertUtmToLatLng(stop.latitude, stop.altitude, 15, "N")
      )
    );

    stops_vuelta.map((stop) =>
      vuelta_route.push(
        utm.convertUtmToLatLng(stop.latitude, stop.altitude, 15, "N")
      )
    );
  }

  const customIconParadaUrl = "/icons/icons8-location-48.png";
  const customIconTerminalUrl = "/icons/icons8-home-address-48.png";
  const purpleOptions = { color: "purple", weight: 5 };
  const redOptions = { color: "red", weight: 5 };
  const customIconParada = new L.Icon({
    iconUrl: customIconParadaUrl,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });
  const customIconTerminal = new L.Icon({
    iconUrl: customIconTerminalUrl,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

  return (
    <section className="shadow">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full h-auto bg-black">
        <span className="text-white font-semibold md:text-balance text-sm md:ms-4 h-auto text-center md:text-left my-2">
          Ruta {route_type} {short_name}: {long_name}
        </span>
        <div className="flex flex-wrap gap-2 my-2 md:me-4 items-center justify-center">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showIda}
              onChange={() => setShowIda(!showIda)} // Cambia el estado de showIda
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-white">
              Mostrar ida (<i className="text-xs">{address_ida}</i>)
            </span>
          </label>

          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showVuelta}
              onChange={() => setShowVuelta(!showVuelta)} // Cambia el estado de showVuelta
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-white">
              Mostrar vuelta (<i className="text-xs">{address_vuelta}</i>)
            </span>
          </label>
        </div>
      </div>

      <MapContainer
        center={vhsPosition}
        zoom={14}
        scrollWheelZoom={false}
        className="w-full h-[500px] -z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {showIda && (
          <>
            {stops_ida.map((stop, index) => (
              <Marker
                key={`ida-${index}`}
                position={utm.convertUtmToLatLng(
                  stop.latitude,
                  stop.altitude,
                  15,
                  "N"
                )}
                icon={stop.is_terminal ? customIconTerminal : customIconParada}
              >
                <Popup>
                  <h1 className="text-base uppercase font-bold">{stop.name}</h1>
                  <span className="text-xs font-light italic">
                    {address_ida}
                  </span>
                  <p className="text-md">{stop.road}</p>
                </Popup>
              </Marker>
            ))}
            <Polyline pathOptions={purpleOptions} positions={ida_route}>
              <Tooltip sticky>
                <span className="text-sm italic font-bold">
                  Ruta {address_ida}
                </span>
              </Tooltip>
            </Polyline>
          </>
        )}

        {showVuelta && (
          <>
            {stops_vuelta.map((stop, index) => (
              <Marker
                key={`vuelta-${index}`}
                position={utm.convertUtmToLatLng(
                  stop.latitude,
                  stop.altitude,
                  15,
                  "N"
                )}
                icon={stop.is_terminal ? customIconTerminal : customIconParada}
              >
                <Popup>
                  <h1 className="text-base uppercase font-bold">{stop.name}</h1>
                  <span className="text-xs font-light italic">
                    {address_vuelta}
                  </span>
                  <p className="text-md">{stop.road}</p>
                </Popup>
              </Marker>
            ))}
            <Polyline pathOptions={redOptions} positions={vuelta_route}>
              <Tooltip sticky>
                <span className="text-sm italic font-bold">
                  Ruta {address_vuelta}
                </span>
              </Tooltip>
            </Polyline>
          </>
        )}
      </MapContainer>
    </section>
  );
}
