"use client"; 

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import Link from 'next/link';
import Menu from '../components/ui/Menu';
import AsideMenu from '../components/ui/AsideMenu';
import Footer from '../components/ui/Footer';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuthStatus = () => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  };

  useEffect(() => {
    checkAuthStatus();
    setLoading(false);

    const handleStorageChange = () => checkAuthStatus();
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

    if (loading) {
        return (
          <div className="flex justify-center items-center h-screen">
          </div>
        );
      }

    return (
      <>
        {isAuthenticated ? (
          <p>Tus favoritos</p>
        ) : (
            <div className="flex justify-center items-center h-64 border border-gray-300 bg-white rounded-lg shadow-lg p-6 mt-8">
            <div className="text-center">
              <p className="text-lg font-semibold mb-4">
                Para añadir rutas o lugares turísticos como favoritos, por favor inicia sesión.
              </p>
              <Link href="/login">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  Iniciar Sesión
                </button>
              </Link>
            </div>
          </div>
        )}
        <AsideMenu />
        <Footer />
      </>
    );
  }
