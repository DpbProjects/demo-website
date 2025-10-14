import type { FC } from "react";
import { Button } from "@/components/ui/button";

interface CtaBannerProps {
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: "blue" | "gradient" | "dark";
}

export const CtaBanner: FC<CtaBannerProps> = ({
  title,
  description,
  buttonText = "Get Started",
  onButtonClick,
  variant = "blue",
}) => {
  const variantClasses = {
    blue: "bg-neutral-900 text-white",
    gradient: "bg-neutral-100 text-neutral-900",
    dark: "bg-black text-white",
  };

  const buttonClasses = {
    blue: "border-white text-white hover:bg-white hover:text-neutral-900",
    gradient: "border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white",
    dark: "border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <section
      className={`py-32 px-6 ${variantClasses[variant]}`}
      aria-label="Call to action"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Large, impactful headline */}
        <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tight leading-[0.95]">
          {title}
        </h2>
        
        <p className="text-lg md:text-xl font-light mb-12 opacity-80 leading-relaxed">
          {description}
        </p>
        
        {/* Minimal outlined button */}
        <button
          onClick={onButtonClick}
          aria-label={buttonText}
          className={`px-8 py-3 border-2 text-sm uppercase tracking-widest transition-all duration-300 ${buttonClasses[variant]}`}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};