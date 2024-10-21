export default function Footer() {
    return (
      <footer className="bg-white text-black font-bold py-6  border-t-2  border-[#6BC5E8]">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 - SAETA. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 hover:underline">
              Twitter 
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 hover:underline">
              Facebook
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    );
  }
  