import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-gray-100 items-center justify-items-center min-h-screen p-8 pb-10 gap-8 sm:p-1 font-sans">
      <main className="flex flex-col bg-[#3A9EC2] text-white border border-gray-300 rounded-xl gap-6 row-start-2 items-center shadow-xl p-6 sm:max-w-md sm:w-full">
        
        <h1 className="text-center text-white text-2xl font-bold pt-4 mb-6">
          Inicio de sesión
        </h1>

        <Image
          className="justify-center"
          src="/icon512_rounded.png"
          alt="App logo"
          width={100}
          height={100}
          priority
        />

        <div className="flex flex-col gap-4 w-full pt-6 mt-6 justify-center">
          <Link
            href="/dashboard"
            className="cursor-pointer rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-[#6BC5E8] text-sm sm:text-base h-10 sm:h-12 px-4 hover:shadow-lg"
            rel="noopener noreferrer"
          >
            Inicia sesión
          </Link>

          <Link
            href="/dashboard/register"
            className="cursor-pointer rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-gray-300 text-black gap-2 hover:bg-gray-500 text-sm sm:text-base h-10 sm:h-12 px-4 hover:shadow-lg"
            rel="noopener noreferrer"
          >
            Regístrate
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Aquí puedes agregar más contenido para el footer */}
      </footer>
    </div>
  );
}
