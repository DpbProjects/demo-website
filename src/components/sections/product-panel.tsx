import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProductPanel: React.FC = () => {
  return (
    <section id="promo-zx7" className="py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Card className="relative overflow-hidden rounded-xl border-0 shadow-none">
          <div className="relative aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src="/zx7-speaker-on-modern-table-gray-background.jpg"
              alt="ZX7 Speaker"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-100/80 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 lg:px-16 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
                  ZX7 SPEAKER
                </h2>
                <Button
                  variant="outline"
                  className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white px-8 py-6 text-sm font-semibold tracking-wider bg-transparent"
                >
                  SEE PRODUCT
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProductPanel;
