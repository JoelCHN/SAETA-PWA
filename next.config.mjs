import withPWAModule from "@ducanh2912/next-pwa";

const withPWA = withPWAModule({
  dest: "public",
  register: true, // Registra automáticamente el Service Worker
  skipWaiting: true, // Actualiza el Service Worker inmediatamente
  disable: process.env.NODE_ENV === "development", // Desactiva PWA en desarrollo
  // fallbacks: {
  //   document: "/offline", // if you want to fallback to a custom page rather than /_offline
  // },
  customWorkerDir: "public", // Ubicación del archivo custom-sw.js
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other options you like
  reactStrictMode: true,
};

export default withPWA(nextConfig);
