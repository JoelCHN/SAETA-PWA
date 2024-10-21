import Link from 'next/link';

export default function Menu() {
  return (
    <nav className="bg-white p-4 sm:p-8 justify-center border-b-2  border-[#6BC5E8]">
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <li>
          <Link href="/dashboard" className="text-black font-bold p-2 sm:p-4 hover:text-white hover:shadow-md hover:rounded hover:bg-[#6BC5E8]"> 
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/dashboard/address" className="text-black font-bold p-2 sm:p-4 hover:text-white hover:shadow-md hover:rounded hover:bg-[#6BC5E8]">
            Rutas
          </Link>
        </li>
        <li>
          <Link href="/dashboard/favorite"  className="text-black font-bold p-2 sm:p-4 hover:text-white hover:shadow-md hover:rounded hover:bg-[#6BC5E8]">
            Favoritos
          </Link>
        </li>
        <li>
          <Link href="/dashboard/coments"  className="text-black font-bold p-2 sm:p-4 hover:text-white hover:shadow-md hover:rounded hover:bg-[#6BC5E8]">
            Comentarios
          </Link>
        </li>
        <li>
          <Link href="/dashboard/places"  className="text-black font-bold p-2 sm:p-4 hover:text-white hover:shadow-md hover:rounded hover:bg-[#6BC5E8]">
            Lugares turísticos
          </Link>
        </li>
        <li>
            <Link href="/dashboard/about"  className="text-black font-bold p-2 sm:p-4 hover:text-white hover:shadow-md hover:rounded hover:bg-[#6BC5E8]">
            Acerca de
            </Link>
        </li>
      </ul>
    </nav>
  );
}
