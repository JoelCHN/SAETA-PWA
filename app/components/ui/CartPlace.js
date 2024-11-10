"use client"; // Indica que este es un componente cliente

import React from "react";
import { useRouter } from "next/navigation"; // Usa la nueva API de navegación

const CartPlace = ({ id, title, age, imageUrl }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`../../places/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer"
    >
      <img className="w-full h-48 object-cover" src={imageUrl.src} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{age}</p>
      </div>
      <div className="p-4 flex justify-end">
        <button className="bg-blue-500 text-white py-1 px-3 rounded">Conocer más</button>
      </div>
    </div>
  );
};

export default CartPlace;
