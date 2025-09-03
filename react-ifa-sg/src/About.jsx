import Footer from "./components/Footer";

function Tentang() {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen py-16 px-6 md:px-20">
      {/* Judul */}
      <div className="text-center mb-14 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-2 tracking-tight">
          Tentang Kami
        </h1>
        <p className="text-lg text-blue-700 font-medium">
          Informatika A Siang 2024 – Satu Visi, Satu Rasa, Satu Keluarga
        </p>
        <div className="w-24 h-1 bg-blue-300 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Tentang & Foto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
        {/* Foto */}
        <div className="relative group animate-slide-up">
          <img
            src="/src/assets/9.jpg"
            alt="Informatika A Siang"
            className="rounded-3xl shadow-xl w-full object-cover h-72 md:h-96 border border-blue-200 transform transition duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-200 to-blue-400 px-4 py-2 rounded-full shadow-md text-white font-semibold text-sm">
            ✨ Sejak 2024
          </div>
        </div>

        {/* Deskripsi */}
        <div className="text-justify text-gray-700 animate-slide-up">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            Mau Kenal Dengan Kami?
          </h2>
          <p className="leading-relaxed text-md">
            Kami adalah mahasiswa{" "}
            <strong className="text-blue-800">
              Universitas Satya Terra Bhinneka
            </strong>{" "}
            dari kelas <strong>Informatika A Siang 2024</strong> yang penuh
            semangat dan antusias terhadap dunia teknologi.
            <br />
            <br />
            Kami percaya bahwa teknologi bukan hanya alat, tapi juga jembatan
            menuju masa depan yang lebih baik. Kami ingin menjadi bagian dari
            perubahan melalui karya nyata yang berdampak.
            <br />
            <br />
            <strong className="block text-xl text-blue-700 italic text-center mt-4">
              "Ayo Ciptakan Beragam Inovasi, Dengan Berkolaborasi Bersama Kami"
            </strong>
          </p>
        </div>
      </div>

      {/* Visi & Misi */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Visi & Misi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-200 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Visi</h3>
            <p className="text-gray-700">
              Menjadi generasi informatika yang cerdas, kreatif, dan
              berintegritas dalam menjawab tantangan teknologi masa depan.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-200 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Misi</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Menumbuhkan budaya belajar dan kolaborasi dalam tim.</li>
              <li>Mengembangkan inovasi melalui proyek berbasis teknologi.</li>
              <li>Menjunjung tinggi etika dan profesionalisme di bidang IT.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nilai-Nilai */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
          Nilai-Nilai Kami
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Integritas", "Kreativitas", "Kerja Tim", "Komitmen", "Empati"].map(
            (value, idx) => (
              <div
                key={idx}
                className="bg-blue-100 text-blue-800 font-medium px-6 py-3 rounded-full shadow-sm hover:bg-blue-200 transition duration-300"
              >
                {value}
              </div>
            )
          )}
        </div>
      </div>

      {/* Perangkat Kelas */}
      <div className="space-y-14">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Perangkat Kelas IF A SIANG 2024
        </h2>

        {/* Dosen Wali */}
        <div className="grid grid-cols-1 justify-items-center">
          <div className="bg-gradient-to-tr from-blue-50 to-white p-8 rounded-3xl shadow-lg border border-blue-200 text-center max-w-md">
            <img
              src="/src/assets/dosen.jpg"
              alt="Mikha Dayan Sinaga"
              className="w-36 h-36 mx-auto mb-5 rounded-full object-cover border-2 border-blue-400 shadow-md"
            />
            <h4 className="text-xl font-bold text-gray-800 mb-1">
              Mikha Dayan Sinaga, S.Kom., M.Kom
            </h4>
            <p className="text-blue-700 text-base font-medium">
              Dosen Wali IF A SIANG 2024
            </p>
          </div>
        </div>

        {/* Anggota */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "Darma Putra Halawa",
              role: "Komting",
              image: "/src/assets/darma.jpg",
            },
            {
              name: "Vicky Sihombing",
              role: "Wakil Komting",
              image: "/src/assets/vicky.jpg",
            },
            {
              name: "Naila Kinanti",
              role: "Bendahara",
              image: "/src/assets/naila.jpg",
            },
            {
              name: "Nazwa Harien",
              role: "Sekretaris",
              image: "/src/assets/nazwah.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow-md border border-gray-200 text-center hover:shadow-lg transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto mb-3 rounded-full object-cover border-2 border-blue-300"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h4>
              <p className="text-blue-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="mt-20 bg-gradient-to-r from-blue-100 to-blue-50 py-12 rounded-3xl shadow-inner">
        <h3 className="text-center text-2xl font-bold text-blue-900 mb-8">
          🎉 Fun Facts IF A Siang 2024
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <h4 className="text-4xl font-bold text-blue-900">14.00</h4>
            <p className="text-blue-700">
              Jam mulai kuliah, tapi otak baru nyala jam 4😴
            </p>
          </div>
          <div className="p-4">
            <h4 className="text-4xl font-bold text-blue-900">+99</h4>
            <p className="text-blue-700">
              Ronde UNO & PS di sela-sela waktu kosong 🎮🃏
            </p>
          </div>
          <div className="p-4">
            <h4 className="text-4xl font-bold text-blue-900">∞</h4>
            <p className="text-blue-700">
              Sesi karaoke dadakan tanpa mikir nada 🎤
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Tentang />
      <Footer />
    </>
  );
}
