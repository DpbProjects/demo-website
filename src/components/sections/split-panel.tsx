import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SplitPanel: React.FC = () => {
  return (
    <section id="promo-yx1" className="py-8 pb-16 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <Card className="relative overflow-hidden rounded-xl border-0 shadow-none">
            <div className="relative aspect-square">
              <Image
                src="/yx1-wireless-earphones-in-charging-case-black.jpg"
                alt="YX1 Earphones"
                fill
                className="object-cover"
              />
            </div>
          </Card>
          <Card className="rounded-xl bg-neutral-100 border-0 shadow-none flex items-center justify-center p-8 lg:p-16">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
                YX1 EARPHONES
              </h2>
              <Button
                variant="outline"
                className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white px-8 py-6 text-sm font-semibold tracking-wider bg-transparent"
              >
                SEE PRODUCT
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SplitPanel;
