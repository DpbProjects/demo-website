import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import CategoryGrid from "@/components/sections/category-grid";
import Promo from "@/components/sections/promo";
import ProductPanel from "@/components/sections/product-panel";
import SplitPanel from "@/components/sections/split-panel";
import About from "@/components/sections/about";
import ProductDetailImageGrid from "@/components/product-detail-image-grid";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <Promo />
        <ProductPanel />
        <SplitPanel />
        <About />
        <ProductDetailImageGrid
          images={{
            topLeft:
              "/premium-black-wireless-headphones-on-dark-background.jpg",
            bottomLeft:
              "/premium-black-wireless-headphones-on-dark-background.jpg",
            right: "/premium-black-wireless-headphones-on-dark-background.jpg",
          }}
        />
      </main>
      <Footer />
    </div>
  );
}
