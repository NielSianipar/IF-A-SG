import BlurText from "./components/BlurText/BlurText";
import Footer from "./components/Footer";
import GradientText from "./components/GradientText/GradientText";
import Particles from "./components/Particles/Particles";

function Hero() {
  return (
    <>
      {/* Background utama */}
      <div className="absolute min-h-screen w-full bg-gradient-to-br from-blue-900 via-gray-800 to-gray-200 flex flex-col lg:flex-row justify-center items-center">
        {/* Bagian Teks */}
        <div className="w-full lg:w-1/2 px-10 py-20 text-gray-100 flex flex-col justify-center">
          <BlurText
            text={`UNIVERSITAS SATYA TERRA BHINNEKA 
            Informatika A Siang 2024`}
            delay={50}
            animateBy="words"
            direction="top"
            className="text-3xl font-semibold mb-10 text-gray-50"
          />

          <GradientText
            colors={["#cfd8dc", "#eceff1", "#ffffff"]}
            animationSpeed={2}
            showBorder={false}
            className="py-3 mt-4 text-justify font-light px-2 text-gray-200 text-sm sm:text-base"
          >
            Informatika A Siang bukan hanya sekadar ruang belajar, tetapi tempat
            tumbuhnya semangat, persahabatan, dan kerja sama yang tulus. Di
            kelas ini, setiap anggota saling mendukung, baik dalam tugas,
            diskusi, maupun tanggung jawab bersama. Perangkat kelas bekerja
            solid, menciptakan suasana yang rapi, nyaman, dan penuh kekompakan.
            Meski belajar di siang hari sering melelahkan, kehangatan, canda
            tawa, dan kebersamaan membuat setiap momen terasa berarti dan tak
            mudah dilupakan. Di balik tumpukan tugas dan jadwal yang padat,
            kelas ini selalu punya cara untuk saling menguatkan, berbagi
            semangat, dan terus bertumbuh sebagai satu keluarga.
          </GradientText>
        </div>

        {/* Bagian Gambar */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-6 lg:mt-10">
          <img
            src="/if-a-sg/src/assets/rame.jpg"
            alt="profile"
            className="rounded-3xl shadow-2xl w-4/5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-10 border-4 border-[#eceff1]"
          />
        </div>
      </div>

      {/* Partikel */}
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Particles
          particleColors={["#f0f0f0", "#d9d9d9"]}
          particleCount={120}
          particleSpread={10}
          speed={0.25}
          particleBaseSize={150}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Divider Navy */}
      <div className="w-full mt-6">
        <svg className="w-full" viewBox="0 0 1440 320">
          <path
            fill="#1e3a8a"
            fillOpacity="1"
            d="M0,96L60,122.7C120,149,240,203,360,208C480,213,600,171,720,154.7C840,139,960,149,1080,154.7C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>

      {/* Motto */}
      <div className="bg-gradient-to-r from-blue-900 to-gray-200 py-12 text-center text-gray-900 px-4 animate-fade-in-up shadow-inner">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-wide">
          ✨ Motto Kelas ✨
        </h3>
        <p className="italic max-w-2xl mx-auto text-base sm:text-lg">
          “Dalam setiap tawa ada cerita, dalam setiap lelah ada perjuangan, dan
          dalam setiap kebersamaan ada keluarga.”
        </p>
      </div>

      {/* Quotes */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-4 text-center text-gray-800 animate-fade-in">
        <p className="text-lg sm:text-xl font-medium italic">
          “Kalau kamu ngantuk pas kelas siang, kamu nggak sendiri kok.” 😴
        </p>
        <span className="block mt-2 text-sm text-gray-600">
          — Semua warga A Siang
        </span>
      </div>

      {/* Kata Mereka */}
      <div className="mt-10 mx-auto max-w-4xl bg-[#f1f2f6] bg-opacity-80 backdrop-blur-md p-6 rounded-lg shadow-md text-gray-900">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Kata Mereka</h2>
        <p className="italic text-sm sm:text-base">
          “Belajar bareng teman-teman A Siang itu seperti rumah kedua—penuh
          warna dan makna.”
        </p>
        <span className="block text-right mt-2 font-medium">- Daniel</span>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-center text-gray-100 max-w-4xl mx-auto bg-gradient-to-r from-blue-900 to-gray-800 py-8 rounded-lg shadow-lg">
        <div className="p-4">
          <h3 className="text-3xl sm:text-4xl font-bold text-[#f1f2f6]">55</h3>
          <p className="mt-1 text-[#f1f2f6]">Anggota Kelas</p>
        </div>
        <div className="p-4">
          <h3 className="text-3xl sm:text-4xl font-bold text-[#f1f2f6]">
            100%
          </h3>
          <p className="mt-1 text-[#f1f2f6]">Tugas Diselesaikan</p>
        </div>
        <div className="p-4">
          <h3 className="text-3xl sm:text-4xl font-bold text-[#f1f2f6]">∞</h3>
          <p className="mt-1 text-[#f1f2f6]">Tawa & Cerita</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Hero;



