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
      let data = null;
      try {
        if (navigator.onLine || !localStorage.getItem("routes")) {
          const response = await fetch(
            "https://saeta-node-api.onrender.com/api/routes",
            { next: { revalidate: 60 } }
          );

          if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
          }

          data = await response.json();

          if (!localStorage.getItem("routes")) {
            localStorage.setItem("routes", JSON.stringify(data));
          }
        } else {
          data = JSON.parse(localStorage.getItem("routes"));
        }

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

        <section className="w-full h-full mx-auto flex items-center justify-center">
          <div className="flex items-center justify-center w-56 h-56">
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
            <p className="ms-4 text-gray-700 text-balance">Cargando Rutas...</p>
          </div>
        </section>
      </>
    );
  }

  if (error) {
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

        <section>
          <p className="text-lg text-gray-800 p-4 sm:text-base md:text-lg lg:text-xl">
            Error al cargar las rutas: {error}
          </p>
        </section>
      </>
    );
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
