import Image from "next/image";

export default function Footer() {
    return (
      <footer>
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <a href="/dashboard" className="flex items-center">
                      <Image src="/icon512_rounded.png" alt="Logo" width="32" height="32" />
                  </a>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                      <li>
                          <a href="/dashboard/about" className="hover:underline me-4 md:me-6">Acerca de</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline me-4 md:me-6">Políticas de privacidad</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Contáctenos</a>
                      </li>
                  </ul>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
              <span className="block text-sm text-gray-500 text-center">© 2024 SAETA. Todos los derechos reservados.</span>
              <span className="block text-xs text-gray-500 text-center">Toda la información corresponde a la proporcionada por la ex Secretaría de Comunicaciones y Transportes, hoy Secretaría de Movilidad del Estado de Tabasco, mediante la Plataforma Nacional de Transparencia: folios <a href="https://transparencia.tabasco.gob.mx/media/estrados/2876_1.pdf" target="_blank">01661217</a> y <a href="https://transparencia.tabasco.gob.mx/media/estrados/12944_1.pdf" target="_blank">01903119</a></span>
          </div>
      </footer>
    );
  }
