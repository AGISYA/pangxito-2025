import ProductGrid from "@/components/product-grid";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-5">
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
