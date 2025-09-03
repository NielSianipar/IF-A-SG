import { useState } from "react";
import { Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Footer from "./components/Footer";

export default function Contact() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const kirimWhatsApp = (e) => {
    e.preventDefault();
    const nomorWA = "6283841189413"; // Nomor kamu (ubah 0 jadi 62)
    const text = `Halo, saya *${nama}* (${email}) ingin menyampaikan pesan:\n\n${pesan}`;
    const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Header Kontak */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-800 py-14 text-center text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-3">📬 Hubungi Kami</h1>
        <p className="max-w-2xl mx-auto text-gray-200">
          Punya pertanyaan, saran, atau ingin berkolaborasi?  
          Silakan hubungi kami melalui form atau media kontak di bawah ini.
        </p>
      </div>

      {/* Konten Utama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 py-14 bg-gradient-to-br from-white to-gray-100">
        
        {/* Form Kontak */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Punya kritik atau saran? Kirim di sini!</h2>
          <form className="space-y-4" onSubmit={kirimWhatsApp}>
            <div>
              <label className="block font-medium text-gray-700">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama lengkap"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Alamat email"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Pesan</label>
              <textarea
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                placeholder="Tulis pesan kamu..."
                rows="4"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-all"
            >
              <MessageCircle size={18} /> Kirim via WhatsApp
            </button>
          </form>
        </div>

        {/* Info Kontak */}
        <div className="space-y-6">
          {/* Alamat */}
          <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-bold text-blue-900 mb-2">
              <MapPin size={20} /> Alamat
            </h3>
            <p className="text-gray-700">
              Universitas Satya Terra Bhinneka  
              Jl. Sunggal Gg. Bakul, Medan Sunggal
            </p>
          </div>

          {/* Kontak */}
          <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-bold text-blue-900 mb-2">
              <Phone size={20} /> Kontak
            </h3>
            <div className="flex flex-col gap-1 text-gray-700">
              <a href="https://instagram.com/codingelements2024" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-pink-600 transition">
                <Instagram size={18} /> @codingelements2024
              </a>
              <a href="https://wa.me/6283841189413" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-green-600 transition">
                <MessageCircle size={18} /> 083841189413
              </a>
              <a href="mailto:ifasiang2024@egmail.com" className="flex items-center gap-2 hover:text-blue-600 transition">
                <Mail size={18} /> ifasiang2024@egmail.com
              </a>
            </div>
          </div>

          {/* Lokasi */}
          <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-bold text-blue-900 mb-2">
              <MapPin size={20} /> Lokasi
            </h3>
            <iframe
              title="Lokasi Kampus"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0600921132905!2d98.612541!3d3.5736559999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fc7e012030d%3A0x376fa497cff6be89!2sUniversitas%20Satya%20Terra%20Bhinneka!5e0!3m2!1sid!2sid!4v1754384900745!5m2!1sid!2sid"
              className="w-full h-48 rounded-lg border-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
