import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProductSection from "@/components/product-section";
import FeaturesSection from "@/components/features-section";
import RecipesPangxito from "@/components/recipes-pangxito";
import OrderNow from "@/components/order-now";
import Footer from "@/components/footer";
import AboutUs from "@/components/aboutus";
import ScrollToTop from "@/components/scroll-totop";

export default function Home() {
  const heroData = {
    title: "Pangxito",
    description: "Pangsit tulang rangu 3in1",
    name: "Abdiagisya",
    feedback: "Lezat banget dan gurih, cocok untuk cemilan kapan saja!",
    image: "/images/2.jpg",
    photo: "/images/IMG-20240722-WA0030.jpg",
  };

  return (
    <div className="bg-white">
      <Navbar />
      <section id="hero">
        <Hero hero={heroData} />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="products">
        <ProductSection showAllProducts={false} />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="recipes">
        <RecipesPangxito />
      </section>
      <section id="order">
        <OrderNow />
      </section>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
