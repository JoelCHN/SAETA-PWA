import Image from "next/image";

export default function Footer() {
    return (
      <footer>
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <a href="/dashboard" className="flex items-center">
                      <Image src="/icon512_rounded.png" alt="Logo" width="32" height="32" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SAETA</span>
                  </a>
                  <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
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
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 SAETA. Todos los derechos reservados.</span>
          </div>
      </footer>
    );
  }
  