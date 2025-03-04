import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="container md:mt-96 mt-[650px]   mx-auto px-4">
        <div className="flex flex-col lg:flex-row   mx-10 items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <Image
              src="/images/E707D642-4A11-4BAF-8302-76B01675EA27.jpg"
              alt="Tentang Pangxito"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Tentang Pangxito
            </h2>
            <p className="text-gray-600 mb-6">
              Pangxito lahir dari passion kami terhadap kuliner Indonesia,
              khususnya pangsit. Kami memadukan resep tradisional dengan inovasi
              modern untuk menciptakan pangsit tulang rangu 3in1 yang lezat dan
              berkualitas.
            </p>
            <p className="text-gray-600 mb-6">
              Setiap produk Pangxito dibuat dengan bahan-bahan pilihan dan
              proses produksi yang higienis. Kami berkomitmen untuk selalu
              memberikan yang terbaik bagi pelanggan kami, dari rasa hingga
              layanan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">Bahan Berkualitas</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">Proses Higienis</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">Inovasi Rasa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
