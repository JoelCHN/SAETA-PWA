"use client";

import React, { useEffect, useState } from "react";
import UTMLatLng from "utm-latlng";
import { Loader } from "@googlemaps/js-api-loader";

export function Map({ ida, vuelta, idaAddress, vueltaAddress }) {
  const mapRef = React.useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [showIda, setShowIda] = useState(true);
  const [showVuelta, setShowVuelta] = useState(true);
  const idaLineRef = React.useRef(null);
  const vueltaLineRef = React.useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "weekly",
      });

      const { Map, InfoWindow, Polyline } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement, PinElement } =
        await google.maps.importLibrary("marker");

      const vhsPosition = { lat: 17.98689, lng: -92.93028 };
      const utm = new UTMLatLng();

      const mapOptions = {
        center: vhsPosition,
        zoom: 14,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new Map(mapRef.current, mapOptions);
      setMapInstance(map);
      const infoWindow = new InfoWindow();
      const pathCoordinatesIda = [];
      const pathCoordinatesVuelta = [];

      ida.forEach((element, index) => {
        const parser = new DOMParser();
        const pinSvgString =
          '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bus-stop"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2" /><path d="M16 17h-8" /><path d="M16 5l1.5 7h4.5" /><path d="M9.5 10h7.5" /><path d="M12 5v5" /><path d="M5 9v11" /></svg>';
        const pinSvg = parser.parseFromString(
          pinSvgString,
          "image/svg+xml"
        ).documentElement;

        const pin = new PinElement({
          glyph: pinSvg,
          glyphColor: "#ffffff",
          background: "#16537e",
          borderColor: "#2986cc",
        });

        const latLng = utm.convertUtmToLatLng(
          element.latitude,
          element.altitude,
          15,
          "N"
        );
        pathCoordinatesIda.push(latLng);

        const marker = new AdvancedMarkerElement({
          map: map,
          position: latLng,
          title: `Parada ${index + 1} - ${element.name}`,
          content: pin.element,
          gmpClickable: true,
        });

        marker.addListener("click", ({ domEvent, latLng }) => {
          const { target } = domEvent;
          infoWindow.close();
          infoWindow.setContent(marker.title);
          infoWindow.open(marker.map, marker);
        });
      });

      vuelta.forEach((element, index) => {
        const parser = new DOMParser();
        const pinSvgString =
          '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bus-stop"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2" /><path d="M16 17h-8" /><path d="M16 5l1.5 7h4.5" /><path d="M9.5 10h7.5" /><path d="M12 5v5" /><path d="M5 9v11" /></svg>';
        const pinSvg = parser.parseFromString(
          pinSvgString,
          "image/svg+xml"
        ).documentElement;

        const pin = new PinElement({
          glyph: pinSvg,
          glyphColor: "#ffffff",
          background: "#990000",
          borderColor: "#cc0000",
        });

        const latLng = utm.convertUtmToLatLng(
          element.latitude,
          element.altitude,
          15,
          "N"
        );
        pathCoordinatesVuelta.push(latLng);

        const marker = new AdvancedMarkerElement({
          map: map,
          position: latLng,
          title: `Parada ${index + 1} - ${element.name}`,
          content: pin.element,
          gmpClickable: true,
        });

        marker.addListener("click", ({ domEvent, latLng }) => {
          const { target } = domEvent;
          infoWindow.close();
          infoWindow.setContent(marker.title);
          infoWindow.open(marker.map, marker);
        });
      });

      idaLineRef.current = new Polyline({
        path: pathCoordinatesIda,
        geodesic: true,
        strokeColor: "#16537e",
        strokeOpacity: 1.0,
        strokeWeight: 5,
      });

      vueltaLineRef.current = new Polyline({
        path: pathCoordinatesVuelta,
        geodesic: true,
        strokeColor: "#990000",
        strokeOpacity: 1.0,
        strokeWeight: 5,
      });

      if (showIda) idaLineRef.current.setMap(map);
      if (showVuelta) vueltaLineRef.current.setMap(map);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    initMap();
  }, [ida, vuelta]);

  useEffect(() => {
    if (idaLineRef.current) {
      idaLineRef.current.setMap(showIda ? mapInstance : null);
    }
  }, [showIda, mapInstance]);

  useEffect(() => {
    if (vueltaLineRef.current) {
      vueltaLineRef.current.setMap(showVuelta ? mapInstance : null);
    }
  }, [showVuelta, mapInstance]);

  return (
    <section className="relative shadow">
      <div className="absolute flex items-center justify-center z-10 top-0 left-0 w-full h-10 bg-slate-800/50">
        <div className="flex flex-wrap justify-center items-center w-11/12 mx-auto select-none gap-2 max-w-[500px]">
          <div className="flex items-center">
            <input
              id="ida-checkbox"
              type="checkbox"
              checked={showIda}
              onChange={() => setShowIda(!showIda)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="ida-checkbox"
              className="ms-2 text-sm font-medium text-white"
            >
              Mostrar ruta de ida
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="vuelta-checkbox"
              type="checkbox"
              checked={showVuelta}
              onChange={() => setShowVuelta(!showVuelta)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor="vuelta-checkbox"
              className="ms-2 text-sm font-medium text-white"
            >
              Mostrar ruta de vuelta
            </label>
          </div>
        </div>
      </div>
      <div style={{ height: "500px" }} ref={mapRef} />
    </section>
  );
}
