"use client";
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp } from "react-icons/fa";

const OrderNow = () => {
  const handleOrder = () => {
    const message = encodeURIComponent("Halo, saya ingin memesan.");
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };
  return (
    <div
      id="pesan-sekarang"
      className="bg-white py-16 text-center flex flex-col items-center"
    >
      <h1 className="text-2xl font-extrabold text-red-800 mb-6 max-w-lg">
        Temukan Kenikmatan PANGXITO Hari Ini!
      </h1>

      <button
        onClick={handleOrder}
        className="flex items-center justify-center px-6 py-3 text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp className="mr-2 text-lg" /> Pesan Sekarang
      </button>

      <div className="mt-12 w-full max-w-xl">
        <h3 className="text-xl font-bold text-red-700 mb-6">Hubungi Kami</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
          {/* Bagian Lokasi */}
          <div className="flex flex-col items-center text-center">
            <FaMapMarkerAlt className="text-2xl text-red-600 mb-2" />
            <p className="text-base md:text-lg text-gray-700 font-semibold">
              Jl. Kenangan No. 123, Jakarta
            </p>
          </div>

          {/* Bagian Jam Operasional */}
          <div className="flex flex-col items-center text-center">
            <FaClock className="text-2xl text-red-600 mb-2" />
            <p className="text-base md:text-lg text-gray-700 font-semibold">
              08:00 - 22:00
            </p>
          </div>

          {/* Bagian Kontak */}
          <div className="flex flex-col items-center text-center">
            <FaPhone className="text-2xl text-red-600 mb-2" />
            <p className="text-base md:text-lg text-gray-700 font-semibold">
              081234567890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
