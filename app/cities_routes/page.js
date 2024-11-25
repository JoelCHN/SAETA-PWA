"use client";

import { useState, useEffect } from "react";
import RoutesCard from "../components/ui/RoutesCard";
import AgencyData from "../data/city_routes/AgencyData";

export default function Address() {
  const [routes, setRoutes] = useState([]);
  const [selectedAgency, setSelectedAgency] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await fetch(
          "https://saeta-node-api.onrender.com/api/routes",
          { next: { revalidate: 60 } }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setRoutes(data); // Guardar las rutas en el estado
        setLoading(false); // Desactivar el estado de carga
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  const handleAgencyChange = (event) => {
    setSelectedAgency(event.target.value);
  };

  const filteredRoutes = selectedAgency
    ? routes.filter((route) => route.agency === selectedAgency)
    : routes;

  if (loading) {
    return <p>Cargando rutas...</p>;
  }

  if (error) {
    return <p>Error al cargar las rutas: {error}</p>;
  }

  return (
    <>
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li aria-current="page">
            <div className="flex items-center text-gray-700">
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              <span className="inline-flex items-center text-sm font-medium">
                Rutas
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <section className="w-full h-full flex flex-col">
        <h1 className="text-xl uppercase font-bold mb-4">
          Rutas de transporte
        </h1>
        <div className="flex flex-col justify-center gap-2 md:flex-row md:justify-between mb-4">
          <select
            id="agency-select"
            className="w-full md:max-w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            value={selectedAgency}
            onChange={handleAgencyChange} // Evento para capturar el cambio
          >
            <option value="">Todas las agencias</option>
            {AgencyData.map((agency) => (
              <option key={agency.value} value={agency.value}>
                {agency.label}
              </option>
            ))}
          </select>
        </div>
        <ul className="w-full flex flex-col gap-4">
          {filteredRoutes.length > 0 ? (
            filteredRoutes.map((route) => (
              <RoutesCard
                key={route.id}
                id={route.id}
                agency={route.agency}
                short_name={route.short_name}
                long_name={route.long_name}
                route_type={route.route_type}
                status={route.status}
                color={route.color}
              />
            ))
          ) : (
            <li className="text-center text-gray-500">Sin datos disponibles</li>
          )}
        </ul>
      </section>
    </>
  );
}
