import localFont from "next/font/local";
import "./globals.css";
import Menu from "./components/ui/Menu";
import AsideMenu from "./components/ui/AsideMenu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SAETA",
  description: "Servicio de enrutamiento en Tabasco",
  // the new configuration to that by it`s a PWA
  manifest:"/manifest.json",
  icons:{
    favicon: "/icon512_rounded.png",
    apple: "/icon512_maskable.png",
  },
  theme:"#6bc5e8"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <script defer src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
        <Menu/>
        <AsideMenu/>
        <div className="p-4 sm:ml-64">
				  <div className="p-4 mt-14">
            {children}
				  </div>
			  </div>
      </body>
    </html>
  );
}
