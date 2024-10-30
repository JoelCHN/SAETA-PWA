import Image from "next/image";
import Link from "next/link";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">Bienvenido a SAETA</h2>
      <Image src="/Banner_SAETA_Vsa.png" alt="App logo" width={1280} height={720} />
      
      <p className="text-balance mt-4">
        El Sistema de Autotransporte y Enlace de Tabasco inició operaciones en 1983, siendo el mayor esfuerzo hecho en la capital del Estado por eficientar el transporte público urbano, y a pesar de haber sido liquidado en 1992, su legado continúa siendo parte de nuestra cotidianidad.
      </p>
      
      <p className="text-balance mt-4">
        Muchas de las rutas de este sistema de transporte se han conservado hasta nuestros días: algunas se han fusionado entre sí, otras se han abandonado y muchas tantas fueron prolongadas de su trazo original para satisfacer las necesidades de la creciente mancha urbana.
      </p>
      
      <p className="text-balance  mt-4">
        En esta página encontrarás las rutas de transporte público en Villahermosa previa a la implementación de Transbús, es decir, los itinerarios de rutas anteriores al 2008 que fueron administradas por las distintas uniones de transportistas que surgieron tras la desaparición del SAETA.
      </p>
      
      <h3 className="text-2xl font-bold mt-6">¿Dónde consulto las rutas?</h3>
      <ul className="list-disc ml-6 text-balance">
        <li>
          Puedes encontrar las rutas ya sea consultando el panel lateral donde se encuentran en orden numérico o en las páginas de la parte superior clasificados por las uniones concesionadas que las administraron.
        </li>
        <li>
          En todas las rutas encontrarás un mapa interactivo donde se puede observar su itinerario sobre la traza urbana de la ciudad.
        </li>
        <li>
          En la parte inferior de cada ruta encontrarás el estado actual en que se encuentra: ACTIVA, INACTIVA O SUSTITUIDA.
        </li>
      </ul>
      
      <p className="text-balance mt-4">
        Si fuiste o eres usuario habitual de alguna de estas rutas puedes en los comentarios hacer las observaciones correspondientes sobre ellas: corrección de itinerarios, localización de paradas y terminales, alguna anécdota o recuerdo y demás. Con esa información, en el futuro, se podría crear una página que concentre las rutas actuales de transporte en nuestra ciudad.
      </p>
      
      <Image className="mt-4" src="/Banner_Bien.png" alt="App logo" width={1280} height={720} />
      <Footer />
    </>
  );
}
