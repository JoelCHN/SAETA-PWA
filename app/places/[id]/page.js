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
      <a href="../places/" className="bg-black text-white p-4 text-[.7rem] rounded-lg shadow-xl hover:text-black hover:bg-white hover:border">Volver</a>

      <h1 className="text-2xl font-bold text-center mb-4">
        Detalle del lugar turístico: <span className="text-black">{place.title}</span>
      </h1>
      <img className="w-full h-64 object-contain rounded-lg mb-6" src={place.imageUrl.src} alt={place.title} />

      <p className="text-black mb-5 mt-4 text-justify text-[1rem]"><strong>Descripción:</strong>{place.description}</p>
      <p className="text-black mb-5 mt-4 text-justify text-[1rem] w-full border-b-2 border-black pb-2"><strong>Historia:</strong> {place.history}</p>
      <p className="text-gray-600 text-md mt-4"><strong>Autores:</strong> {place.authors}</p>
      <p className="text-gray-600 text-md mt-4"><strong>Edad:</strong> {place.age}</p>
    </div>
  );
}