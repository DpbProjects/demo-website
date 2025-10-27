import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 lg:py-24">
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-sm tracking-[0.5em] text-neutral-400 uppercase">
              New Product
            </p>
            <h1 className="text-4xl text-red-600 sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto lg:mx-0">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button className="bg-[#D87D4A] hover:bg-[#c4703f] text-white px-8 py-6 text-sm font-semibold tracking-wider">
              SEE PRODUCT
            </Button>
          </div>
          <div className="relative aspect-square lg:aspect-[4/3]">
            <Image
              src="/premium-black-wireless-headphones-on-dark-background.jpg"
              alt="XX99 Mark II Headphones"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;