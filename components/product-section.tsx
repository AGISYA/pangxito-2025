"use client";
import { useState } from "react";
import type React from "react";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { products, type Product } from "@/lib/product";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductSectionProps {
  showAllProducts?: boolean;
}
interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onOrder: (product: Product) => void;
}

const ProductDetailModal = ({
  product,
  onClose,
  onOrder,
}: ProductDetailModalProps) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg overflow-hidden max-w-2xl w-full">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 bg-yellow-400 p-1">
                <div className="relative w-full h-full bg-gray-100 overflow-hidden">
                  <Image
                    src={
                      product.images[selectedImageIndex] || "/placeholder.svg"
                    }
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex gap-1 p-1 bg-yellow-400">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative w-12 h-12 flex-shrink-0 overflow-hidden ${
                    selectedImageIndex === index ? "ring-2 ring-white" : ""
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="md:w-1/2 p-4 flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4 flex-grow">
              {product.detailDescription}
            </p>

            {/* Price */}
            <div className="mb-4">
              <span className="text-2xl font-bold text-gray-800">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })
                  .format(product.price)
                  .replace(/,00$/, "")}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
                    .format(product.originalPrice)
                    .replace(/,00$/, "")}
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                Tutup
              </button>
              <button
                onClick={() => onOrder(product)}
                className="flex-1 px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" />
                Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Update the ProductSection component to use the new modal
const ProductSection: React.FC<ProductSectionProps> = ({
  showAllProducts = false,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const displayedProducts = showAllProducts ? products : products.slice(0, 4);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    })
      .format(price)
      .replace(/,00$/, "");
  };

  const handleOrder = (product: Product) => {
    const message = encodeURIComponent(
      `Halo, saya ingin memesan ${product.name} seharga ${formatPrice(
        product.price
      )}.`
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, "_blank");
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <div
      className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 cursor-pointer h-full flex flex-col"
      onClick={() => handleProductClick(product)}
    >
      <div className="relative h-48 w-full">
        <Image
          src={product.images[0] || "/placeholder.svg"}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs">
            Baru
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-gray-800">
            {formatPrice(product.price)}
          </span>
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-full text-sm flex items-center transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              handleOrder(product);
            }}
          >
            <FaWhatsapp className="mr-1" />
            Pesan
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 text-center mb-8">
          Produk Kami
        </h2>

        <div className="mb-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="product-swiper"
          >
            {displayedProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {!showAllProducts && (
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="bg-yellow-400 hover:bg-yellow-600 text-red-600 py-2 px-6 rounded-full transition-colors duration-300 text-sm font-medium"
            >
              Lihat Semua Produk
            </Link>
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={closeModal}
          onOrder={handleOrder}
        />
      )}
    </section>
  );
};

export default ProductSection;
