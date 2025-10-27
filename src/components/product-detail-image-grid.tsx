import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductDetailImageGridProps {
  images: {
    topLeft: string;
    bottomLeft: string;
    right: string;
  };
  alt?: string;
  className?: string;
}

const ProductDetailImageGrid: React.FC<ProductDetailImageGridProps> = ({
  images,
  alt = "Product image",
  className,
}) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-8">
        {/* Left Column - Two Square Images */}
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-4 lg:gap-8">
          {/* Top Left Image */}
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src={images.topLeft}
              alt={`${alt} - view 1`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 40vw"
            />
          </div>

          {/* Bottom Left Image */}
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src={images.bottomLeft}
              alt={`${alt} - view 2`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 40vw"
            />
          </div>
        </div>

        {/* Right Column - Tall Image */}
        <div className="md:col-span-3 relative w-full overflow-hidden rounded-lg bg-neutral-100">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full w-full">
            <Image
              src={images.right}
              alt={`${alt} - featured view`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailImageGrid;
