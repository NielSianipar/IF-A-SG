import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./Contact.jsx";
import ScrollToTop from "./ScrollToTop.jsx"; // ✅ Tambah

createRoot(document.getElementById("root")).render(
  <Router>
    <ScrollToTop /> {/* ✅ Biar tiap pindah halaman auto ke atas */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/Hero" element={<Hero />} />
      <Route path="/About" element={<About />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </Router>
);
