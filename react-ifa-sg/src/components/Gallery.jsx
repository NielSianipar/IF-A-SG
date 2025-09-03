import Masonry from "./Masonry";
import PixelTransition from "./PixelTransition/PixelTransition";
import Footer from "./Footer";

// Data foto (tinggi sama biar rapi)
const items = [
  { id: "1", img: "/src/assets/cewe.jpg", height: 450 },
  { id: "2", img: "/src/assets/2.jpg", height: 450 },
  { id: "3", img: "/src/assets/3.jpg", height: 450 },
  { id: "5", img: "/src/assets/5.jpg", height: 450 },
  { id: "6", img: "/src/assets/6.jpg", height: 450 },
  { id: "7", img: "/src/assets/cewe.jpg", height: 450 },
  { id: "8", img: "/src/assets/cowo.jpg", height: 450 },
  { id: "9", img: "/src/assets/1.jpg", height: 450 },
  { id: "10", img: "/src/assets/4.jpg", height: 450 },
];

// PixelTransition card
function AnimasiMomen({ img, text, delay = 0 }) {
  return (
    <PixelTransition
      firstContent={
        <img
          src={img}
          alt="Momen IF A Siang"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "1rem",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
          }}
        />
      }
      secondContent={
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
            backgroundColor: "#1e293b",
            borderRadius: "1rem",
          }}
        >
          <p
            style={{
              fontWeight: 900,
              fontSize: "1.2rem",
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            {text}
          </p>
        </div>
      }
      gridSize={12}
      pixelColor="#ffffff"
      animationStepDuration={0.4}
      animationDelay={delay}
      className="custom-pixel-card"
    />
  );
}

// Bagian header gallery
function FotoMoment() {
  return (
    <div className="py-10 bg-gradient-to-b from-white to-blue-50 shadow-sm rounded-xl text-center">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-indigo-800 tracking-wide">
        📸 MOMEN-MOMEN KEBERSAMAAN
      </h1>
      <h2 className="text-lg md:text-2xl font-medium mt-2 text-gray-700">
        Informatika A Siang 2024
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-gray-600">
        Kenangan terbaik selalu tercipta dari tawa, cerita, dan kebersamaan
        yang kita jalani bersama.
      </p>

      {/* Foto Pixel Animasi */}
      <div className="flex flex-col md:flex-row gap-6 mt-8 justify-center items-center">
        <AnimasiMomen img="/src/assets/8.jpg" text="INFORMATIKA A SIANG" delay={0} />
        <AnimasiMomen img="/src/assets/9.jpg" text="APOTIK TUTUP" delay={0.3} />
      </div>
    </div>
  );
}

// Wave divider
function WaveDivider() {
  return (
    <div className="w-full overflow-hidden leading-none">
      <svg
        className="relative block w-full h-14"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
      >
        <path
          d="M321.39 56.19C172.59 83.6 64.48 73.19 0 63.49V120h1200V0c-59.27 31.46-136.48 58.35-254.22 71.7-115.56 13.11-252.68-3.8-420.39-15.51-161.87-11.31-310.64-7.69-504.39 15.51z"
          fill="#f0f4ff"
        ></path>
      </svg>
    </div>
  );
}

// Gallery mini (versi rapet)
function GalleryMini() {
  return (
    <div className="p-2 mt-2">
      <div className="text-center mb-1">
        <h2 className="text-2xl md:text-3xl font-bold font-serif text-indigo-900">
          🎞 Gallery Mini IF A Siang
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
          “Setiap foto menyimpan cerita. Entah itu tawa lepas, momen serius, atau
          kebersamaan sederhana yang tak akan tergantikan.”
        </p>
      </div>

      {/* Masonry langsung tanpa jarak */}
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.97}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </div>
  );
}


// Quote penutup
function ClosingQuote() {
  return (
    <div className="text-center py-8 bg-gradient-to-r from-indigo-50 to-blue-50 mt-12 rounded-xl">
      <p className="text-lg italic text-gray-700 max-w-2xl mx-auto">
        “Setiap kebersamaan adalah potongan cerita yang akan kita bawa seumur hidup.”
      </p>
    </div>
  );
}

export default function Gallery() {
  return (
    <>
      <FotoMoment />
      <WaveDivider />
      <GalleryMini />
      <ClosingQuote />
      <Footer />
    </>
  );
}
