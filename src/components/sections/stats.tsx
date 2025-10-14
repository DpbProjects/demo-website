import type { FC } from "react";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
  variant?: "default" | "dark";
}

export const StatsSection: FC<StatsSectionProps> = ({
  stats,
  title,
  variant = "default",
}) => {
  const isDark = variant === "dark";

  return (
    <section
      className={`py-24 px-6 ${isDark ? "bg-neutral-900" : "bg-neutral-50"}`}
      aria-label="Statistics section"
    >
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className={`text-4xl md:text-5xl font-light text-center mb-20 tracking-tight ${isDark ? "text-white" : "text-neutral-900"}`}>
            {title}
          </h2>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center border-l border-neutral-300 dark:border-neutral-700 pl-8" 
              role="group"
            >
              {/* Large, clean numbers */}
              <div className={`text-5xl md:text-6xl font-light mb-3 tracking-tight ${isDark ? "text-white" : "text-neutral-900"}`}>
                {stat.value}
                {stat.suffix && (
                  <span className="text-4xl">{stat.suffix}</span>
                )}
              </div>
              
              {/* Minimal label */}
              <div className={`text-sm uppercase tracking-widest font-light ${isDark ? "text-neutral-500" : "text-neutral-500"}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};