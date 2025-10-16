import type { FC } from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  heading: string;
  subtitle: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  variant?: "default" | "gradient" | "dark";
}

export const Hero: FC<HeroProps> = ({
  heading,
  subtitle,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  variant = "default",
}) => {
  const backgroundClasses = {
    default: "bg-white",
    gradient: "bg-neutral-50",
    dark: "bg-neutral-900 text-white",
  };

  const textClasses = {
    default: "text-neutral-900",
    gradient: "text-neutral-900",
    dark: "text-white",
  };

  const subtitleClasses = {
    default: "text-neutral-600",
    gradient: "text-neutral-600",
    dark: "text-neutral-400",
  };

  return (
    <section
      className={`py-32 px-6 ${backgroundClasses[variant]}`}
      aria-label="Hero section"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Large, clean typography */}
        <h1 className={`text-7xl md:text-8xl font-light tracking-tight mb-8 leading-[0.95] ${textClasses[variant]} text-gray-300!`}>
          {heading}
        </h1>
        
        <p className={`text-xl md:text-2xl font-light mb-12 max-w-2xl leading-relaxed mx-auto ${subtitleClasses[variant]}`}>
          {subtitle}
        </p>
        
        {/* Minimal button styling */}
        <div className="flex gap-6 items-center justify-center">
          <button
            onClick={onPrimaryClick}
            aria-label={primaryButtonText}
            className="text-sm tracking-wider uppercase border-b-2 border-neutral-900 dark:border-white pb-1 hover:opacity-60 transition-opacity"
          >
            {primaryButtonText}
          </button>
          <button
            onClick={onSecondaryClick}
            aria-label={secondaryButtonText}
            className="text-sm tracking-wider uppercase text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};