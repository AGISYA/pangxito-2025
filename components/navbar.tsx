"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-pangxito.png"
              alt="Pangxito Logo"
              width={100}
              height={40}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-800 hover:text-red-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-800 hover:text-red-600 transition duration-300"
            >
              Produk
            </Link>
            <Link
              href="/#features"
              className="text-gray-800 hover:text-red-600 transition duration-300"
            >
              Keunggulan
            </Link>
            <Link
              href="/#pangxito"
              className="text-gray-800 hover:text-red-600 transition duration-300"
            >
              Tentang Kami
            </Link>
            <Link
              href="/#pesan-sekarang"
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-500 transition duration-300"
            >
              Pesan Sekarang
            </Link>
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
            <Link
              href="/"
              className="text-gray-800 hover:text-red-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-800 hover:text-red-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Produk
            </Link>
            <Link
              href="/#features"
              className="text-gray-800 hover:text-red-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Keunggulan
            </Link>
            <Link
              href="/#pangxito"
              className="text-gray-800 hover:text-red-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              href="/#pesan-sekarang"
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-500 transition duration-300 inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
