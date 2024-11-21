import CartPlace from '../components/ui/CartPlace';
import PlacesData from '../data/placesdata/PlacesData';

export default function PlacesPage() {
return (
<>
    <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li aria-current="page">
                <div className="flex items-center text-gray-700">
                    <svg className="flex-shrink-0 w-6 h-6 p-1  text-gray-500 transition duration-75 group-hover:text-gray-900"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path
                            d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                    </svg>
                    <span className="inline-flex items-center text-sm font-medium">
                        Lugares turísticos
                    </span>
                </div>
            </li>
        </ol>
    </nav>

    <h1 className="text-2xl font-bold text-black text-center mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
        Lugares turísticos
    </h1>
    <p className="text-lg text-gray-800 p-4 sm:text-base md:text-lg lg:text-xl">
        Conoce los lugares turísticos que se encuentran en la zona de Villahermosa, Tabasco
        <span className="font-bold"> ¡Tú decides a dónde ir!</span>
    </p>
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PlacesData.map((place) => (
        <CartPlace key={place.id} id={place.id} title={place.title} age={place.age} imageUrl={place.imageUrl} />
        ))}
    </div>
</>
);
}
