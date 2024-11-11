import CartPlace from '../components/ui/CartPlace';
import PlacesData from '../data/placesdata/PlacesData';

export default function PlacesPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-black text-center mb-6">Lugares turísticos</h1>
      <p className="text-xl text-gray-800 p-4">
        Conoce los lugares turísticos que se encuentran en la zona de Villahermosa, Tabasco
        <span className="font-bold"> ¡Tú decides a dónde ir!</span>
      </p>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PlacesData.map((place) => (
          <CartPlace
            key={place.id}
            id={place.id}
            title={place.title}
            age={place.age}
            imageUrl={place.imageUrl}  
          />
        ))}
      </div>
    </>
  );
}
