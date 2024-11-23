'use client';

import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function SingleMap({ location, title, imageUrl }) {
    const mapRef = useRef(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
                version: "weekly",
            });

            const { Map, InfoWindow } = await loader.importLibrary("maps");
            const { Marker } = await google.maps.importLibrary("marker");

            const mapOptions = {
                center: location, // Usa la ubicación pasada como prop
                zoom: 14,
                mapId: "MY_NEXTJS_MAPID",
            };

            const map = new Map(mapRef.current, mapOptions);

            // Crear un marcador en el mapa con la ubicación dada
            const marker = new Marker({
                map,
                position: location,
            });

            // Crear contenido para el InfoWindow con imagen y título
            const infoWindowContent = `
                <div style="max-width: 240px; font-size: 14px; color:red">
                    <img 
                        src="${imageUrl}" 
                        alt="${title}" 
                        style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 8px;"
                    />
                    <hr style= "width: 100%; height: 2px; background-color: black; margin: 5px 0;" ></hr>
                    <strong >${title}</strong>
                </div>
            `;

            const infoWindow = new InfoWindow({
                content: infoWindowContent,
            });

            marker.addListener("click", () => {
                infoWindow.open({
                    anchor: marker,
                    map,
                });
            });
        };

        initMap();
    }, [location, title, imageUrl]); 

    return <div style={{ height: "500px", width: "100%" }} ref={mapRef} />;
}
