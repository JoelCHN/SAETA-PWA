"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(form);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-gray-100 items-center justify-items-center min-h-screen p-8 pb-10 gap-8 sm:p-1 font-sans">
      <main className="flex flex-col bg-[#3A9EC2] text-white border border-gray-300 rounded-xl gap-6 row-start-2 items-center shadow-xl p-6 sm:max-w-md sm:w-full">
        
        <h1 className="text-center text-white text-2xl font-bold pt-4">
          Registro
        </h1>

        <Image
          className="justify-center"
          src="/icon512_rounded.png"
          alt="App logo"
          width={100}
          height={100}
          priority
        />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full pt-6 justify-center">
          <div className="w-full">
            <label htmlFor="username" className="block text-sm font-medium text-white">Nombre de usuario</label>
            <input
              type="text"
              name="username"
              id="username"
              value={form.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6BC5E8] sm:text-sm"
              placeholder="Tu nombre de usuario"
            />
          </div>

          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium text-white">Correo electrónico</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
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
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6BC5E8] sm:text-sm"
              placeholder="Tu contraseña"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-[#6BC5E8] text-sm sm:text-base h-10 sm:h-12 px-4 hover:shadow-lg"
          >
            Regístrate
          </button>
        </form>

        <div className="w-full text-center mt-4">
          <p className="text-white">¿Ya tienes cuenta?</p>
          <Link
            href="/"
            className="text-sm text-white hover:text-black underline"
          >
            Inicia sesión aquí
          </Link>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    
      </footer>
    </div>
  );
}
