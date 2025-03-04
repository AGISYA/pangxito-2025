"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const recipes = [
  {
    id: 1,
    title: "PANGXITO GORENG",
    description:
      "Bisa diolah menjadi pangxito goreng dan ditambah dengan saus.",
  },
  {
    id: 2,
    title: "PANGXITO REBUS",
    description: "Cocok juga dijadikan pangsit rebus yang lembut dan kenyal.",
  },
  {
    id: 3,
    title: "PANGXITO KUAH",
    description:
      "Bisa juga dijadikan pangsit kuah dengan bumbu pedas manis gurih yang bikin ketagihan.",
  },
];

const RecipesPangxito = () => {
  return (
    <div className="container mx-auto py-10 bg-white mt-5">
      <div className="flex flex-col md:flex-row justify-center items-start">
        {/* Hero Image */}
        <div className="relative mb-6 md:w-1/2 w-full flex justify-center md:mt-16">
          <Image
            alt="Hero Image"
            src="/images/1.jpg"
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-[70%] md:w-[500px] h-auto transform transition-transform duration-1000 hover:scale-105"
          />
        </div>

        {/* List Recipes */}
        <div className="w-full md:w-1/2 px-6 md:mt-16 text-left">
          <h2 className="text-4xl font-bold text-red-600 mb-6">
            Pangxito 3in1
          </h2>
          {recipes.map((product) => (
            <div key={product.id} className="flex items-start mb-4">
              <FaCheckCircle className="text-purple-500 text-2xl mr-3" />
              <div>
                <h5 className="text-xl md:text-xl font-semibold text-red-600 mb-1">
                  {product.title}
                </h5>
                <p className="text-sm md:text-lg text-gray-800 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
          <p className="text-lg text-gray-800 mt-6">
            Mau tahu cara masak Pangxito? Cara Penyajian
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipesPangxito;
