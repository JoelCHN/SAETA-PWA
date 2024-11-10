import Image from "next/image";
import { Map } from "../../components/ui/Map.js";

export default async function Page({ params }) {
  const id = (await params).id;
  const response = await fetch(
    `https://saeta-node-api.onrender.com/api/route/${id}`,
    {
      next: { revalidate: 60 },
    }
  );
  const routeDetails = await response.json();
  return (
    <>
      <section className="mb-4">
        <div
          className={`max-w-7xl p-6 bg-white border border-gray-200 rounded-lg shadow`}
        >
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
      </section>

      <div className={`mt-2 mb-2 border-b-4 border-[#ed1c24] mb-4`}></div>

      <section className="mb-4">
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
            <tbody>
              <tr>
                <td className="py-4">
                  {routeDetails.Going[0].stops.map((stop, index) => (
                    <div key={index} className="mb-2 p-1">
                      <div class="flex flex-col md:flex-row items-center md:justify-between">
                        <div class="flex-shrink-0">
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
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium text-gray-900 truncate">
                            {stop.name}
                          </p>
                          <p class="text-sm text-gray-500 truncate">
                            {stop.road}
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900">
                          {stop.is_terminal ? "Terminal" : "Parada"}
                        </div>
                      </div>
                    </div>
                  ))}
                </td>
                <td className="py-4">
                  {routeDetails.Return[0].stops.map((stop, index) => (
                    <div key={index} className="mb-2 p-1">
                      <div class="flex flex-col md:flex-row items-center md:justify-between">
                        <div class="flex-shrink-0">
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
                        <div class="flex-1 min-w-0 ms-4">
                          <p class="text-sm font-medium text-gray-900 truncate">
                            {stop.name}
                          </p>
                          <p class="text-sm text-gray-500 truncate">
                            {stop.road}
                          </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900">
                          {stop.is_terminal ? "Terminal" : "Parada"}
                        </div>
                      </div>
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Map
        ida={routeDetails.Going[0].stops}
        vuelta={routeDetails.Return[0].stops}
      />
    </>
  );
}
