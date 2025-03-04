import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Harga Terbaik",
    description: "Pangsit berkualitas dengan harga yang terjangkau.",
    image: "/images/harga.png",
  },
  {
    id: 2,
    title: "Rasa Enak",
    description: "Nikmati kelezatan pangsit tulang rangu 3in1 kami.",
    image: "/images/lezat.png",
  },
  {
    id: 3,
    title: "Terekomendasi",
    description: "Pelanggan puas dengan rasa dan kualitas kami.",
    image: "/images/rekomend.png",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Keunggulan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
