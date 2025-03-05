"use client"; // Tambahkan ini di baris pertama

import type React from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaWhatsapp } from "react-icons/fa";

interface HeroProps {
  hero: {
    title: string;
    description: string;
    name: string;
    feedback: string;
    image: string;
    photo?: string;
  };
}

const handleOrder = () => {
  const message = encodeURIComponent("Halo, saya ingin memesan.");
  window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
};

const Hero: React.FC<HeroProps> = ({ hero }) => {
  if (!hero) {
    return null;
  }

  return (
    <div className="h-screen">
      <Image
        alt={hero.title || "Hero Image"}
        src={hero.image || "/placeholder.svg"}
        fill
        className="absolute top-0 left-0 w-screen h-screen object-cover bg-center z-10"
        priority
      />

      <div className="absolute inset-0 bg-black opacity-30 z-20"></div>

      <div className="relative w-full h-full pt-16 md:pt-24 z-30">
        <div className="flex justify-start p-4 md:p-8">
          <div className="relative bg-white p-4 md:p-6 rounded-lg text-center shadow-lg max-w-xs md:max-w-sm transition-transform hover:scale-105">
            <div className="mb-2">
              <Image
                src="/images/logo-pangxito.png"
                alt="Pangxito Logo"
                width={150}
                height={50}
                priority
                className="mx-auto"
              />
            </div>
            <h1 className="sr-only">{hero.title}</h1>
            <div className="text-black mb-3 md:mb-4 text-sm md:text-base">
              {hero.description}
            </div>
            <button
              onClick={handleOrder}
              className="flex items-center justify-center px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="mr-2" /> Pesan Sekarang
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 bg-yellow-200 p-6 rounded-xl w-72 md:w-80 shadow-lg z-30 transition-transform transform hover:scale-105">
        <div className="flex items-start mb-4">
          <div className="relative w-14 h-14 mr-3 flex-shrink-0">
            <Image
              alt={`Foto pelanggan ${hero.name}`}
              src={hero.photo || "/images/2.jpg"}
              fill
              className="rounded-full shadow-md object-cover"
            />
          </div>
          <div>
            <h4 className="text-black font-bold text-lg mb-1">{hero.name}</h4>
            <p className="text-gray-800 text-sm italic">{hero.feedback}</p>
          </div>
        </div>
        <div
          className="text-yellow-500 flex justify-center mb-3"
          aria-label="4.5 dari 5 bintang"
        >
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <div className="border-t border-yellow-300 pt-2">
          <p className="text-gray-600 text-xs text-center">
            - Customer Feedback -
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
