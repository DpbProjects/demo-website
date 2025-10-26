import Header from "@/components/header";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import CategoryGrid from "@/components/sections/category-grid";
import Promo from "@/components/sections/promo";
import ProductPanel from "@/components/sections/product-panel";
import SplitPanel from "@/components/sections/split-panel";
import About from "@/components/sections/about";

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
      </main>
      <Footer />
    </div>
  );
}
