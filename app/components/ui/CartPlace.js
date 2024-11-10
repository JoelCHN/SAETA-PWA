import React from "react";

const CartPlace = ({ title = "Título del lugar", description = "Descripción breve del lugar." }) => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/150"
        alt="Lugar turístico"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="p-4 flex justify-end">
        <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">Ver más</button>
      </div>
    </div>
  );
};

export default CartPlace;
