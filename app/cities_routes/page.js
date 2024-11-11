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
        <section className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-xl uppercase font-bold mb-4">
            Rutas de transporte
          </h1>
          <ul className="flex flex-col gap-4">
            {routes.map((route) => (
              <li key={route.id}>
                <Link
                  href={`cities_routes/${route.id}`}
                  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-5xl hover:bg-gray-100"
                >
                  <Image
                    src={route.vehicle_img}
                    alt={route.vehicle_type}
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
