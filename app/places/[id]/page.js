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
    <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
                <a href="/places"
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                    <svg className="flex-shrink-0 w-6 h-6 p-1 text-gray-500 transition duration-75 group-hover:text-gray-900"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path
                            d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                    </svg>
                    Lugares turísticos
                </a>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m1 9 4-4-4-4" />
                    </svg>
                    <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                        Detalles
                    </span>
                </div>
            </li>
        </ol>
    </nav>

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
