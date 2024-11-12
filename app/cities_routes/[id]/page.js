import Image from "next/image";
import { Map } from "../../components/ui/Map.js";

export default async function Page({ params }) {
  try {
    const id = (await params).id;
    const response = await fetch(
      `https://saeta-node-api.onrender.com/api/route/${id}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const routeDetails = await response.json();

    // Verificación de datos esenciales
    const hasRouteDetails =
      routeDetails && routeDetails.Going && routeDetails.Return;
    const hasStops =
      hasRouteDetails &&
      routeDetails.Going[0]?.stops &&
      routeDetails.Return[0]?.stops;

    if (!hasRouteDetails || !hasStops) {
      throw new Error("Data format is incorrect or incomplete");
    }

    return (
      <>
        <nav className="flex mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <a
                href="/cities_routes"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Rutas
              </a>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg
                  class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                  Detalles
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <section className="mb-4">
          <div className="max-w-7xl flex flex-col md:flex-row md:justify-between items-center overflow-hidden bg-white border border-gray-200 rounded-lg shadow">
            <div className="order-2 md:order-1 p-6">
              <h1 className="text-4xl uppercase font-bold mb-2">
                Ruta {routeDetails.route_type} {routeDetails.short_name}
              </h1>
              <h2 className="text-2xl mb-2">{routeDetails.long_name}</h2>
              <span className="text-balance pe-3">
                Concesionario: {routeDetails.agency}
              </span>
              {routeDetails.status ? (
                <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">
                  Activa
                </span>
              ) : (
                <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                  Inactiva
                </span>
              )}
            </div>
            <div className="order-1 my-5 md:order-2 md:mb-0 flex items-center justify-center p-6">
              <Image
                className="aspect-[1111/512]"
                src={
                  routeDetails.agency === "ARVIT"
                    ? "/combis/Combi_ARVIT.png"
                    : "/combis/Combi_Vico.png"
                }
                alt={routeDetails.vehicle_type}
                width={350}
                height={350}
              />
            </div>
          </div>
        </section>

        <section className="mb-4 shadow rounded">
          <div className="relative overflow-x-auto overflow-y-auto max-h-96 rounded">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead
                className="text-xs text-gray-700 uppercase"
                style={{ backgroundColor: routeDetails.color }}
              >
                <tr>
                  <th
                    colSpan={2}
                    scope="col"
                    className="px-6 py-3 text-center text-xl text-white"
                  >
                    Recorrido
                  </th>
                </tr>
                <tr className="bg-white border-b">
                  <td className="px-6 py-4 text-center">
                    <b className="text-md font-bold uppercase">Ida:</b>{" "}
                    {routeDetails.Going[0].address}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <b className="text-md font-bold uppercase">Vuelta:</b>{" "}
                    {routeDetails.Return[0].address}
                  </td>
                </tr>
              </thead>
            </table>
            <article className="flex flex-row justify-between rounded">
              <div className="w-full mx-auto">
                {routeDetails.Going[0].stops.map((stop, index) => (
                  <div key={index} className="border p-4">
                    <div className="flex flex-col md:flex-row items-center text-center justify-center md:justify-between">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-8 w-8 p-1 bg-blue-900 text-white rounded-full"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-bus-stop"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                          <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2" />
                          <path d="M16 17h-8" />
                          <path d="M16 5l1.5 7h4.5" />
                          <path d="M9.5 10h7.5" />
                          <path d="M12 5v5" />
                          <path d="M5 9v11" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0 ms-0 md:ms-4">
                        <p className="text-xs md:text-sm font-medium text-gray-900 ">
                          {stop.name}
                        </p>
                        <p className="text-xs italic md:text-sm text-gray-500 ">
                          {stop.road}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-sm md:text-base font-semibold text-gray-900">
                        {stop.is_terminal ? "Terminal" : "Parada"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full mx-auto">
                {routeDetails.Return[0].stops.map((stop, index) => (
                  <div key={index} className="border p-4">
                    <div className="flex flex-col md:flex-row items-center text-center justify-center md:justify-between">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-8 w-8 p-1 bg-red-900 text-white rounded-full"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="icon icon-tabler icons-tabler-outline icon-tabler-bus-stop"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                          <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                          <path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2" />
                          <path d="M16 17h-8" />
                          <path d="M16 5l1.5 7h4.5" />
                          <path d="M9.5 10h7.5" />
                          <path d="M12 5v5" />
                          <path d="M5 9v11" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0 ms-0 md:ms-4">
                        <p className="text-xs md:text-sm font-medium text-gray-900 ">
                          {stop.name}
                        </p>
                        <p className="text-xs italic md:text-sm text-gray-500 ">
                          {stop.road}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-sm md:text-base font-semibold text-gray-900">
                        {stop.is_terminal ? "Terminal" : "Parada"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
        <Map
          ida={routeDetails.Going[0].stops}
          vuelta={routeDetails.Return[0].stops}
          idaAddress={routeDetails.Going[0].address}
          vueltaAddress={routeDetails.Return[0].address}
          longName={routeDetails.long_name}
          shortName={routeDetails.short_name}
          type={routeDetails.route_type}
          color={routeDetails.color}
        />
      </>
    );
  } catch (error) {
    console.error("Error fetching route details:", error);

    return (
      <>
        <section className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-xl uppercase font-bold mb-4">
            Detalles de la Ruta
          </h1>
          <p className="text-gray-700">
            No se pudieron cargar los detalles de la ruta en este momento. Por
            favor, inténtalo de nuevo más tarde.
          </p>
        </section>
      </>
    );
  }
}
