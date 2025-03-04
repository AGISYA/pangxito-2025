"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white text-gray-800 py-10">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between pt-6 pb-10 md:py-8">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="mb-4">
              <Image
                src="/images/logo-pangxito.png"
                alt="Pangxito Logo"
                width={140}
                height={50}
                priority
                className=""
              />
            </div>
            <div className="text-gray-700 mb-4 mt-1">
              Nikmati pangsit lezat setiap hari. Hubungi kami untuk informasi
              lebih lanjut!
            </div>
            <Link
              href="https://wa.me/your-number-here"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
            >
              <FaWhatsapp className="mr-2" /> Hubungi Kami
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-lg font-semibold mb-4 text-red-600">
              Navigasi
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", link: "#" },
                { name: "Produk", link: "#product-section" },
                { name: "Keunggulan", link: "#features" },
                { name: "Pesan Sekarang", link: "#pesan-sekarang" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="hover:text-red-500 transition duration-300 flex items-center"
                  >
                    <span className="mr-2">•</span> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="md:w-1/3">
            <h3 className="text-lg font-semibold mb-4 text-red-600">
              Ikuti Kami
            </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition duration-300"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
            <div className="text-sm text-gray-600">
              Alamat: Jl. Contoh No. 123, Kota, Indonesia
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 text-center text-sm text-gray-600">
          © {currentYear} Pangxito. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
