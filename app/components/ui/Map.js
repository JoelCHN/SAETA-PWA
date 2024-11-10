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

      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary(
        "marker"
      );

      const vhsPosition = {
        lat: 17.98689,
        lng: -92.93028,
      };

      const mapOptions = {
        center: vhsPosition,
        zoom: 15,
        mapId: "MY_NEXTJS_MAPID",
      };

      const map = new Map(mapRef.current, mapOptions);

      ida.forEach((element) => {
        const busStopImg = document.createElement("img");
        busStopImg.src = "/icons/bus-stop.png";
        busStopImg.className = "w-8 h-8 text-white bg-white rouded-full";

        const marker = new AdvancedMarkerElement({
          map: map,
          position: {
            lat: element.latitude / 10000,
            lng: element.altitude / 10000,
          },
          title: element.name,
          content: busStopImg,
        });
      });

      vuelta.forEach((element) => {
        const busStopImg = document.createElement("img");
        busStopImg.src = "/icons/bus-stop.png";
        busStopImg.className = "w-8 h-8 text-white bg-white rouded-full";

        const marker = new AdvancedMarkerElement({
          map: map,
          position: {
            lat: element.latitude / 10000,
            lng: element.altitude / 10000,
          },
          title: element.name,
          content: busStopImg,
        });
      });
    };

    initMap();
  }, [ida, vuelta]);

  return <div style={{ height: "500px" }} ref={mapRef} />;
}
