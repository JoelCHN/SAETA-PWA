import Footer from "../../components/ui/Footer";

export default function TransportUnion() {
    return (
        <>
            <header class="bg-white shadow py-4">
                <div class="container mx-auto text-center">
                    <h1 class="text-4xl font-bold text-gray-700">ARVIT</h1>
                    <p class="text-xl font-medium text-red-600">Autos Rápidos de Villahermosa</p>
                    <div class="border-t-2 border-red-600 my-4 w-1/3 mx-auto"></div>
                </div>
            </header>
            <section class="container mx-auto flex flex-col items-center mt-8">
                <img src="/Arvit_Icon.png" alt="Logo de ARVIT" class="w-40 h-auto mb-6"/>
                <img src="/Combi_ARVIT.png" alt="Imagen de vehículo ARVIT" class="w-80 h-auto"/>
            </section>
            <section class="container mx-auto mt-8 px-4">
                <h2 class="text-2xl font-semibold text-gray-700 text-center mb-4">Rutas Urbanas</h2>
                <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-disc list-inside text-gray-600">
                    <li>2</li>
                    <li>19</li>
                    <li>23</li>
                    <li>23-A</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>28</li>
                    <li>31</li>
                    <li>44</li>
                    <li>59</li>
                    <li>60</li>
                    <li>61</li>
                    <li>69</li>
                    <li>74</li>
                    <li>75</li>
                    <li>79</li>
                    <li>84</li>
                    <li>85</li>
                </ul>
            </section>
            <Footer />
        </>
    );
}