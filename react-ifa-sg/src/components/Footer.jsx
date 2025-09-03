import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-blue-900 to-gray-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Keterangan Umum */}
          <div>
            <h2 className="text-xl font-bold mb-4 uppercase">
              Informatika A Siang 2024
            </h2>
            <p className="text-base text-justify text-gray-200">
              Website resmi kelas Informatika A Siang Universitas Satya Terra
              Bhinneka. Dibuat dengan semangat kebersamaan, kreativitas, dan
              teknologi.
            </p>
          </div>

          {/* Navigasi Cepat */}
          <div>
            <h2 className="text-xl font-bold mb-4">Navigasi</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/Hero" className="hover:text-blue-300 transition-colors duration-300">
                  🏠 Beranda
                </Link>
              </li>
              <li>
                <Link to="/Gallery" className="hover:text-blue-300 transition-colors duration-300">
                  🖼 Galeri
                </Link>
              </li>
              <li>
                <Link to="/About" className="hover:text-blue-300 transition-colors duration-300">
                  📖 About
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:text-blue-300 transition-colors duration-300">
                  📞 Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak & Sosial Media */}
          <div>
            <h2 className="text-xl font-bold mb-4">Kontak</h2>
            <p className="text-sm font-bold">Informatika A Siang 2024</p>
            <p className="text-sm">Universitas Satya Terra Bhinneka</p>

            <div className="flex space-x-4 mt-4">
              <a
                href="https://instagram.com/codingelements2024"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-400 transition-all duration-300"
              >
                <Instagram size={18} /> Instagram
              </a>
              <a
                href="https://wa.me/6283841189413"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-all duration-300"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href="mailto:ifasiang2024@gmail.com"
                className="flex items-center gap-2 hover:text-blue-300 transition-all duration-300"
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </div>
        </div>

        {/* Garis Bawah */}
        <div className="text-center text-sm border-t border-gray-500 py-4 text-gray-300">
          © 2024 Informatika A Siang. All rights reserved.
        </div>
      </footer>
    </>
  );
}
