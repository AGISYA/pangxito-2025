"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Fungsi untuk membuka WhatsApp
const handleOrder = () => {
  const message = encodeURIComponent("Halo, saya ingin memesan.");
  window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Fungsi untuk scroll ke bagian tertentu atau refresh halaman
  const scrollToSection = (id: string) => {
    if (id === "hero") {
      if (window.location.pathname === "/") {
        window.location.reload(); // Refresh halaman jika sudah di halaman utama
      } else {
        router.push("/"); // Navigasi ke halaman utama jika berada di halaman lain
      }
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center"
          >
            <Image
              src="/images/logo-pangxito.png"
              alt="Pangxito Logo"
              width={100}
              height={40}
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-800 hover:text-red-600 transition duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-800 hover:text-red-600 transition duration-300"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-gray-800 hover:text-red-600 transition duration-300"
            >
              Produk
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-800 hover:text-red-600 transition duration-300"
            >
              Keunggulan
            </button>
            <button
              onClick={() => scrollToSection("order")}
              className="text-gray-800 hover:text-red-600 transition duration-300"
            >
              Kontak
            </button>
            {/* Tombol WhatsApp */}
            <button
              onClick={handleOrder}
              className="flex items-center justify-center px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="mr-2" /> Pesan Sekarang
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => {
                scrollToSection("hero");
                setIsMenuOpen(false);
              }}
              className="text-gray-800 hover:text-red-600 transition duration-300"
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection("about");
                setIsMenuOpen(false);
              }}
              className="text-gray-800 hover:text-red-600 transition duration-300"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => {
                scrollToSection("products");
                setIsMenuOpen(false);
              }}
              className="text-gray-800 hover:text-red-600 transition duration-300"
            >
              Produk
            </button>
            <button
              onClick={() => {
                scrollToSection("features");
                setIsMenuOpen(false);
              }}
              className="text-gray-800 hover:text-red-600 transition duration-300"
            >
              Keunggulan
            </button>
            {/* Tombol WhatsApp Mobile */}
            <button
              onClick={handleOrder}
              className="flex items-center justify-center px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="mr-2" /> Pesan
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
