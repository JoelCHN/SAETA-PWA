"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";  
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      setError("Error al iniciar sesión: " + error.message);
    }
  };

  return (
    <>
      <div className="justify-center items-center flex flex-col">
        <section className="flex flex-col bg-[#3A9EC2] border border-gray-300 rounded-xl gap-6 row-start-2 items-center shadow-xl p-6 sm:max-w-md sm:w-full">
          <h1 className="text-center text-white text-2xl font-bold pt-4">
            Iniciar Sesión
          </h1>

          <Image
            className="justify-center"
            src="/icon512_rounded.png"
            alt="App logo"
            width={100}
            height={100}
            priority
          />

          <form className="flex flex-col gap-4 w-full pt-6 justify-center" onSubmit={handleLogin}>
            <div className="w-full">
              <label htmlFor="email" className="block text-sm font-medium text-white">Correo electrónico</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6BC5E8] sm:text-sm"
                placeholder="Tu correo electrónico"
              />
            </div>

            <div className="w-full">
              <label htmlFor="password" className="block text-sm font-medium text-white">Contraseña</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6BC5E8] sm:text-sm"
                placeholder="Tu contraseña"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="cursor-pointer rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-[#6BC5E8] text-sm sm:text-base h-10 sm:h-12 px-4 hover:shadow-lg"
            >
              Iniciar Sesión
            </button>
          </form>

          <div className="w-full text-center mt-4">
            <p className="text-white">¿No tienes una cuenta?</p>
            <Link href="/register" className="text-sm text-white hover:text-black underline">
              Registrarse aquí
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
