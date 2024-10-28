"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
return (
<>
    <div className="justify-center items-center flex flex-col">
    <section className="flex flex-col bg-[#3A9EC2] text-white border border-gray-300 rounded-xl gap-6 row-start-2 items-center shadow-xl p-6 sm:max-w-md sm:w-full">
    <h1 className="text-center text-white text-2xl font-bold pt-4">
                Registro
            </h1>

            <Image className="justify-center" src="/icon512_rounded.png" alt="App logo" width={100} height={100}
                priority />

            <form className="flex flex-col gap-4 w-full pt-6 justify-center">
                <div className="w-full">
                    <label htmlFor="username" className="block text-sm font-medium text-white">Nombre de usuario</label>
                    <input type="text" name="username" id="username" required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6BC5E8] sm:text-sm"
                        placeholder="Tu nombre de usuario" />
                </div>

                <div className="w-full">
                    <label htmlFor="email" className="block text-sm font-medium text-white">Correo electrónico</label>
                    <input type="email" name="email" id="email" required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6BC5E8] sm:text-sm"
                        placeholder="Tu correo electrónico" />
                </div>

                <div className="w-full">
                    <label htmlFor="password" className="block text-sm font-medium text-white">Contraseña</label>
                    <input type="password" name="password" id="password" required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6BC5E8] sm:text-sm"
                        placeholder="Tu contraseña" />
                </div>

                <button type="submit"
                    className="cursor-pointer rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-black text-white gap-2 hover:bg-[#6BC5E8] text-sm sm:text-base h-10 sm:h-12 px-4 hover:shadow-lg">
                    Regístrate
                </button>
            </form>

            <div className="w-full text-center mt-4">
                <p className="text-white">¿Ya tienes cuenta?</p>
                <Link href="/" className="text-sm text-white hover:text-black underline">
                Inicia sesión aquí
                </Link>
            </div>
    </section>
    </div>
</>
);
}
