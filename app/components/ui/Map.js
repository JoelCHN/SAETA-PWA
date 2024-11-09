"use client";

import React, {useEffect} from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function Map() {

  const mapRef = React.useRef(null);

  useEffect(() => {
    const initMap = async () => {

      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');

      const vhsPosition = {
        lat: 40.416775,
        long: -3.703790
      };

      const mapOptions = {
        center: vhsPosition,
        zoom: 15,
        mapId: 'MY_NEXTJS_MAPID',
      };

      const map = new Map(mapRef.current, mapOptions);

    };

    initMap();
  }, []);

  return (
    <div style={{ height: '500px', }} ref={mapRef} />
  );
}