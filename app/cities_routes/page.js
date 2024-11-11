import Image from "next/image";
import Link from "next/link";
import Footer from "../components/ui/Footer";

export default async function Address() {
  try {
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
          <ul className="w-full flex flex-col gap-4">
            {routes.map((route) => (
              <li key={route.id}>
                <Link
                  href={`cities_routes/${route.id}`}
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl hover:bg-gray-100"
                >
                  <Image
                    src={
                      route.agency === "ARVIT"
                        ? "/agency/Arvit_Icon.png"
                        : "/agency/Vicosertra_Icon.png"
                    }
                    width={400}
                    height={200}
                    alt={route.agency}
                    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      RUTA {route.short_name} | {route.long_name}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700">
                      {route.route_type}{" "}
                      {route.status ? (
                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400">
                          Activa
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                          Inactiva
                        </span>
                      )}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <Footer />
      </>
    );
  } catch (error) {
    console.error("Error fetching routes:", error);

    return (
      <>
        <section className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-xl uppercase font-bold mb-4">
            Rutas de transporte
          </h1>
          <p className="text-gray-700">
            No se pudieron cargar las rutas en este momento. Por favor,
            inténtalo de nuevo más tarde.
          </p>
        </section>
        <Footer />
      </>
    );
  }
}
