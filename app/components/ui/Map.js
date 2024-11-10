"use client";

import React, { useEffect } from "react";
import UTMLatLng from "utm-latlng";
import { Loader } from "@googlemaps/js-api-loader";

export function Map({ ida, vuelta }) {
  const mapRef = React.useRef(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: "weekly",
      });

      const { Map, InfoWindow } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement, PinElement } =
        await google.maps.importLibrary("marker");

      const vhsPosition = {
        lat: 17.98689,
        lng: -92.93028,
      };

      const utm = new UTMLatLng();

      const mapOptions = {
        center: vhsPosition,
        zoom: 15,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new Map(mapRef.current, mapOptions);
      const infoWindow = new InfoWindow();

      ida.forEach((element, index) => {
        const busStopImg = document.createElement("img");
        busStopImg.src = "/icons/bus-stop.png";
        busStopImg.className = "w-8 h-8";

        const pin = new PinElement({
          glyph: busStopImg,
          scale: 1.5,
        });

        const latLng = utm.convertUtmToLatLng(
          element.latitude,
          element.altitude,
          15,
          "N"
        );

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
        const busStopImg = document.createElement("img");
        busStopImg.src = "/icons/bus-stop.png";
        busStopImg.className = "w-8 h-8";

        const pin = new PinElement({
          glyph: busStopImg,
          scale: 1.5,
        });

        const latLng = utm.convertUtmToLatLng(
          element.latitude,
          element.altitude,
          15,
          "N"
        );

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
    };

    initMap();
  }, [ida, vuelta]);

  return <div style={{ height: "500px" }} ref={mapRef} />;
}
