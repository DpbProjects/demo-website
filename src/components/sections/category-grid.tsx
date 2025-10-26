import CategoryCard from "@/components/category-card";

const CategoryGrid: React.FC = () => {
  return (
    <section id="categories" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          <CategoryCard
            image="/premium-headphones-product-shot.jpg"
            title="HEADPHONES"
            href="/headphones"
          />
          <CategoryCard
            image="/premium-speaker-product-shot.jpg"
            title="SPEAKERS"
            href="/speakers"
          />
          <CategoryCard
            image="/premium-earphones-product-shot.jpg"
            title="EARPHONES"
            href="/earphones"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
