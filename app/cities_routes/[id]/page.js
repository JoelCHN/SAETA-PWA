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
        <section className="mb-4">
          <div className="max-w-7xl p-6 flex flex-col md:flex-row md:justify-between overflow-hidden bg-white border border-gray-200 rounded-lg shadow">
            <div className="order-2 md:order-1">
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
            <div className="order-1 mb-5 md:order-2 md:mb-0 flex items-center justify-center">
              <Image
                className="aspect-square border"
                src={routeDetails.vehicle_img}
                alt={routeDetails.vehicle_type}
                width={200}
                height={200}
              />
            </div>
          </div>
        </section>

        <div
          className={`mt-2 border-b-4 border-[${routeDetails.color}] mb-4`}
        ></div>

        <section className="mb-4 shadow">
          <div className="relative overflow-x-auto overflow-y-auto max-h-96">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th
                    colSpan={2}
                    scope="col"
                    className="px-6 py-3 text-center text-xl"
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
            <article className="flex flex-row justify-between">
              <div className="w-full px-3 mx-auto">
                {routeDetails.Going[0].stops.map((stop, index) => (
                  <div key={index} className="mb-2 p-1">
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
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {stop.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {stop.road}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {stop.is_terminal ? "Terminal" : "Parada"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-auto border-2 border-gray-300"></div>
              <div className="w-full px-3 mx-auto">
                {routeDetails.Return[0].stops.map((stop, index) => (
                  <div key={index} className="mb-2">
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
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {stop.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          {stop.road}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
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
