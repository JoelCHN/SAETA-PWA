import Menu from '../components/ui/Menu';
import AsideMenu from '../components/ui/AsideMenu';
import Image from 'next/image';
import Footer from '../components/ui/Footer';
import Link from 'next/link';

export default function Address() {
return (
<>
    <section>
        <h1 className="text-center text-2xl font-bold py-4">Seleccione el tipo de transporte</h1>
    </section>
    <section className='flex flex-col gap-8 md:flex-row md:gap-4'>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Combi</h5>
                <p className="mb-3 font-normal text-gray-700 hidden">El transporte mas comun entre la cidudad</p>
            </div>
        </a>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mini Bus</h5>
                <p className="mb-3 font-normal text-gray-700 hidden">Vehiculos de tamaño mediano con mayor capacidad de personas</p>
            </div>
        </a>
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Camion</h5>
                <p className="mb-3 font-normal text-gray-700 hidden">Vehiculos de gran tamaño que circulas las principales rutas de la ciudad</p>
            </div>
        </a>
    </section>
    <section>
        <h1 className="text-center text-2xl font-bold py-4">Seleccione el gremio de transporte</h1>
    </section>
    <section className='flex flex-col gap-4 items-center md:flex-row'>
        <div className="w-full max-w-xs bg-white border border-gray-200 hover:bg-gray-100 rounded-lg shadow">
            <a href='/cities_routes/transport_union'>
            <div className="flex flex-col items-center">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900">ARVIT</h5>
            </div>
            </a>
        </div>
        <div className="w-full max-w-xs bg-white border border-gray-200 hover:bg-gray-100 rounded-lg shadow">
            <a href='/cities_routes/transport_union'>
            <div className="flex flex-col items-center">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900">UTPCAM</h5>
            </div>
            </a>
        </div>
        <div className="w-full max-w-xs bg-white border border-gray-200 hover:bg-gray-100 rounded-lg shadow">
            <a href='/cities_routes/transport_union'>
            <div className="flex flex-col items-center">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900">VICOSENTRA</h5>
            </div>
            </a>
        </div>
        <div className="w-full max-w-xs bg-white border border-gray-200 hover:bg-gray-100 rounded-lg shadow">
            <a href='/cities_routes/transport_union'>
            <div className="flex flex-col items-center">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900">UTUCC</h5>
            </div>
            </a>
        </div>
        <div className="w-full max-w-xs bg-white border border-gray-200 hover:bg-gray-100 rounded-lg shadow">
            <a href='/cities_routes/transport_union'>
            <div className="flex flex-col items-center">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900">SETRATAB</h5>
            </div>
            </a>
        </div>
        <div className="w-full max-w-xs bg-white border border-gray-200 hover:bg-gray-100 rounded-lg shadow">
            <a href='/cities_routes/transport_union'>
            <div className="flex flex-col items-center">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900">GENESIS XXI</h5>
            </div>
            </a>
        </div>
        <div className="w-full max-w-xs bg-white border border-gray-200 hover:bg-gray-100 rounded-lg shadow">
            <a href='/cities_routes/transport_union'>
            <div className="flex flex-col items-center">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900">LINEA DORADA</h5>
            </div>
            </a>
        </div>
    </section>
    <Footer />
</>
);
}
