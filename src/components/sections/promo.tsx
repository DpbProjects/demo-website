import Image from "next/image";
import { Button } from "@/components/ui/button";

const Promo: React.FC = () => {
  return (
    <section id="promo-zx9" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-[#D87D4A] rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-2 border-white transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border-2 border-white transform -translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 lg:py-24 px-8 lg:px-16 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <Image
                src="/zx9-premium-speaker-black-and-white.jpg"
                alt="ZX9 Speaker"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-6 text-center lg:text-left text-white">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                ZX9
                <br />
                SPEAKER
              </h2>
              <p className="text-white/90 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Button className="bg-black hover:bg-neutral-800 text-white px-8 py-6 text-sm font-semibold tracking-wider">
                SEE PRODUCT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
