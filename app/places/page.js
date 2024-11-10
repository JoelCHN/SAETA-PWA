import Menu from "../components/ui/Menu";
import AsideMenu from "../components/ui/AsideMenu";
import Footer from "../components/ui/Footer";
import CartPlace from '../components/ui/CartPlace';

export default function Page() {
return (
<>

    <h1 className="text 4xl font-bold text-black text-center mb-6">Lugares turísticcos</h1>
    <p className="text 2xl  text-gray-800 p-4">Conoce los lugares turísticos que se encuentran en la zona de Villahermosa
        Tabasco <span className=" font-bold"> ¡Tú decides a donde ir!</span></p>
    <div className="p-6 bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CartPlace />
        <CartPlace />
        <CartPlace />
        <CartPlace />
        <CartPlace />
        <CartPlace />
    </div>
</>
);
}
