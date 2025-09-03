import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Code } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/Hero" },
    { name: "ABOUT", path: "/About" },
    { name: "GALLERY", path: "/Gallery" },
    { name: "CONTACT", path: "/Contact" },
  ];

  return (
    <>
      {/* Navbar abu muda + navy */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gray-100/80 border-b border-gray-300/40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-500 via-gray-400 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <img
                  src="/src/assets/logo.jpg"
                  alt="IF A Siang 2024"
                  className="absolute inset-0 w-14 h-14 rounded-2xl object-cover opacity-90"
                  onError={(e) => (e.target.style.display = "none")}
                />
                {/* Icon bulat pojok */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full shadow-lg">
                  <div className="w-full h-full bg-gradient-to-r from-gray-300 to-gray-400 rounded-full animate-pulse opacity-80"></div>
                </div>
              </div>

              {/* Teks Logo */}
              <div>
                <h1 className="text-2xl font-black tracking-tighter text-blue-900">
                  IF-A{" "}
                  <span className="bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent font-extrabold">
                    2024
                  </span>
                </h1>
                <p className="text-xs font-bold text-blue-700 tracking-wider uppercase">
                  SIANG
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="group relative px-6 py-3 text-sm font-bold text-blue-900 hover:text-blue-800 transition-all duration-300 rounded-xl hover:bg-blue-100/40"
                  >
                    {item.name}
                    <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-blue-900 group-hover:w-10 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-500"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://instagram.com/codingelements2024"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 
                           bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 
                           active:bg-gradient-to-r active:from-pink-500 active:via-red-500 active:to-yellow-500
                           text-white text-sm font-bold rounded-xl 
                           transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Join Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-xl text-blue-900 hover:text-blue-800 hover:bg-blue-100/40 transition-all duration-300 border border-blue-200/50"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-100/95 backdrop-blur-xl border-b border-gray-300/40 shadow-lg">
            <div className="px-6 pt-4 pb-6 space-y-2">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block px-5 py-4 text-sm font-bold text-blue-900 hover:text-blue-800 hover:bg-blue-100/40 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-300/40">
                <a
                  href="https://instagram.com/codingelements2024"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full px-5 py-4 
                             bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 
                             active:bg-gradient-to-r active:from-pink-500 active:via-red-500 active:to-yellow-500
                             text-white text-sm font-bold rounded-xl 
                             hover:scale-[1.02] transition-all duration-300 text-center"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
