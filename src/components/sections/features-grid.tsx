import type { FC, ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  variant?: "card" | "simple";
}

export const FeaturesGrid: FC<FeaturesGridProps> = ({
  features,
  columns = 3,
  variant = "card",
}) => {
  const gridColumns = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <section className="py-24 px-6 bg-white" aria-label="Features section">
      <div className="max-w-7xl mx-auto">
        <div className={`grid grid-cols-1 ${gridColumns[columns]} gap-16 md:gap-20`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center"
              role="article"
              aria-label={feature.title}
            >
              {/* Simple icon, no background */}
              <div 
                className="mb-6 text-neutral-900 w-8 h-8 mx-auto" 
                aria-hidden="true"
              >
                {feature.icon}
              </div>
              
              {/* Clean typography hierarchy */}
              <h3 className="text-2xl font-light mb-4 text-neutral-900 tracking-tight">
                {feature.title}
              </h3>
              
              <p className="text-neutral-600 leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};