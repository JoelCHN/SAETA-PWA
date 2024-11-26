import PlacesData from "../../data/placesdata/PlacesData";
import { Carrusel } from "../../components/ui/Carrusel";
import { LeafletMapSolo } from "../../components/ui/LeafletMapSolo";
import ComentCard from "../../components/ui/ComentSection.js";

export default async function Details({ params }) {
  const id = (await params).id;

  const place = PlacesData.find((place) => place.id === parseInt(id));

  if (!place) {
    return <p>Lugar no encontrado</p>;
  }

  return (
    <>
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/places"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 p-1 text-gray-500 transition duration-75 group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>
              Lugares turísticos
            </a>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                Detalles
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <section className="mb-4 flex flex-col gap-3 md:flex-row md:gap-6">
        <Carrusel images={place.carrusel} />
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mt-4">{place.title}</h1>
          <div className="mt-1">
            <span className="text-gray-500 text-sm italic">
              <b>Autor:</b> {place.authors}
            </span>
            <br />
            <span className="text-gray-500 text-sm italic">
              <b>inauguración:</b> {place.age}
            </span>
          </div>
          <p className="text-gray-700 mt-4">{place.description}</p>
        </div>
      </section>
      <div className="w-full border my-4"></div>
      <section className="mb-4 flex flex-col gap-3 md:flex-row md:gap-6">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold">Historia</h2>
          <p className="text-gray-700 mt-2">{place.history}</p>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold">Ubicación</h2>
          <LeafletMapSolo
            place_position={[place.location.lat, place.location.lng]}
            place_name={place.title}
            place_image={place.imageUrl.src}
            className="mt-2"
          />
        </div>
      </section>
      <ComentCard placeId={id} />
    </>
  );
}
