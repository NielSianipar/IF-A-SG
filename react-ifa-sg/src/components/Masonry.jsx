import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Data Gambar
const items = [
  { id: 1, img: "/src/assets/cewe.jpg", height: 700 },
  { id: 2, img: "/src/assets/2.jpg", height: 400 },
  { id: 3, img: "/src/assets/3.jpg", height: 450 },
  { id: 5, img: "/src/assets/5.jpg", height: 450 },
  { id: 6, img: "/src/assets/6.jpg", height: 400 },
  { id: 8, img: "/src/assets/cowo.jpg", height: 400 },
  { id: 9, img: "/src/assets/1.jpg", height: 400 },
  { id: 10, img: "/src/assets/4.jpg", height: 400 },
];

function FotoMoment() {
  return (
    <div className="text-center py-12 bg-gradient-to-b from-white to-slate-100 shadow-sm rounded-xl">
    </div>
  );
}

function MasonryGallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const items = galleryRef.current.querySelectorAll(".gallery-item");
    gsap.from(items, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={galleryRef}
      className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-6 md:px-20 mt-10"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="mb-4 gallery-item break-inside-avoid"
        >
          <img
            src={item.img}
            alt={`Gallery ${item.id}`}
            className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-out"
          />
        </div>
      ))}
    </div>
  );
}

function GalleryMini() {
  return (
    <div className="px-6 md:px-20 mt-16">
    </div>
  );
}

export default function Gallery() {
  return (
    <>
      <FotoMoment />
      <GalleryMini />
      <MasonryGallery />
    </>
  );
}
