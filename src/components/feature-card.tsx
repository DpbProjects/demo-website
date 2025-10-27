import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  isNew?: boolean;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
  href,
  isNew = false,
  className,
}) => {
  return (
    <Card
      className={cn(
        "group overflow-hidden rounded-xl border-0 shadow-md hover:shadow-lg transition-shadow bg-white",
        className
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative aspect-square w-full bg-neutral-100 flex items-center justify-center p-8 lg:p-12">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="px-12 py-8 lg:py-12 lg:pr-12 flex flex-col justify-center">
          {isNew && (
            <p className="text-xs lg:text-sm font-normal tracking-[0.5em] text-[#D87D4A] mb-4 lg:mb-6">
              NEW PRODUCT
            </p>
          )}

          <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold tracking-wide mb-6 lg:mb-8 leading-tight">
            {title}
          </h2>

          <p className="text-neutral-600 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8 max-w-md">
            {description}
          </p>

          <div>
            <Button
              asChild
              className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-bold text-xs tracking-wider px-8 py-4 h-auto"
            >
              <Link href={href}>SEE PRODUCT</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
