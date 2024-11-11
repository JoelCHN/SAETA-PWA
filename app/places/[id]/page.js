'use client';

import { usePathname } from 'next/navigation';
import PlacesData from '../../data/placesdata/PlacesData';
import React from "react";

export default function Details() {
const pathname = usePathname();
const id = pathname.split('/').pop();

const place = PlacesData.find((place) => place.id === parseInt(id));

if (!place) {
return <p>Lugar no encontrado</p>;
}

return (
<div className="p-6">
    <a href="../places/"
        className="cursor-pointer transition-transform transform hover:scale-105 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4" />
        </svg>


    </a>

    <h1 className="text-2xl font-bold text-center mb-4">
        Detalle del lugar turístico: <span className="text-black">{place.title}</span>
    </h1>
    <img className="w-full h-64 object-contain rounded-lg mb-6" src={place.imageUrl.src} alt={place.title} />

    <p className="text-black mb-5 mt-4 text-justify text-[1rem]"><strong>Descripción:</strong>{place.description}</p>
    <p className="text-black mb-5 mt-4 text-justify text-[1rem] w-full border-b-2 border-black pb-2">
        <strong>Historia:</strong> {place.history}
    </p>
    <p className="text-gray-600 text-md mt-4"><strong>Autores:</strong> {place.authors}</p>
    <p className="text-gray-600 text-md mt-4"><strong>Edad:</strong> {place.age}</p>
</div>
);
}
