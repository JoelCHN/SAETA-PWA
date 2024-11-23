'use client';

import { usePathname } from 'next/navigation';
import PlacesData from '../../data/placesdata/PlacesData';
import React, { useState } from "react";

export default function Details() {
    const pathname = usePathname();
    const id = pathname.split('/').pop();

    const place = PlacesData.find((place) => place.id === parseInt(id));

    const [currentIndex, setCurrentIndex] = useState(0);

    if (!place) {
        return <p>Lugar no encontrado</p>;
    }
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === place.carrusel.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? place.carrusel.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="p-6">
            <nav className="flex mb-4" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <a href="/places" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                            <svg
                                className="flex-shrink-0 w-6 h-6 p-1 text-gray-500 transition duration-75 group-hover:text-gray-900"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 20"
                            >
                                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                            </svg>
                            Lugares turísticos
                        </a>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <svg
                                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">Detalles</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <h1 className="text-2xl font-bold text-center mb-4">
                Detalle del lugar turístico: <span className="text-black">{place.title}</span>
            </h1>
            <div className="mb-6 relative">
                <div className="relative w-full max-w-2xl h-64 mx-auto overflow-hidden rounded-lg">
                    <img
                        src={place.carrusel[currentIndex].src}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full h-full object-contain"
                    />
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
                    >
                        ◀
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
                    >
                        ▶
                    </button>
                </div>
                <div className="flex justify-center mt-2">
                    {place.carrusel.map((_, index) => (
                        <span
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                                index === currentIndex ? 'bg-blue-500' : 'bg-gray-400'
                            }`}
                        ></span>
                    ))}
                </div>
            </div>

            <p className="text-black mb-5 mt-4 text-justify text-[1rem]"><strong>Descripción:</strong>{place.description}</p>
            <p className="text-black mb-5 mt-4 text-justify text-[1rem] w-full border-b-2 border-black pb-2">
                <strong>Historia:</strong> {place.history}
            </p>
            <p className="text-gray-600 text-md mt-4"><strong>Autores:</strong> {place.authors}</p>
            <p className="text-gray-600 text-md mt-4"><strong>Fecha de inauguración:</strong> {place.age}</p>
        </div>
    );
}
