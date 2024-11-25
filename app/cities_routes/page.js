import RoutesCard from "../components/ui/RoutesCard";
import Footer from "../components/ui/Footer";
import AgencyData from "../data/city_routes/AgencyData";

export default async function Address() {
  const response = await fetch(
    "https://saeta-node-api.onrender.com/api/routes",
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  const routes = await response.json();

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
            className="w-full md:max-w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          {routes.map((route) => (
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
          ))}
        </ul>
      </section>
      <Footer />
    </>
  );
}
