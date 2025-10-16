import type { FC } from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  variant?: "default" | "compact";
  heading?: string;
  subheading?: string;
}

export const Testimonials: FC<TestimonialsProps> = ({
  testimonials,
  variant = "default",
  heading = "What our customers say",
  subheading = "Don't just take our word for it",
}) => {
  return (
    <section className="py-24 px-6 bg-neutral-50" aria-label="Testimonials section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-light tracking-wide uppercase text-neutral-500 mb-4">
            {subheading}
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">
            {heading}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              aria-label={`Testimonial from ${testimonial.author}`}
            >
              {/* Quote */}
              <div className="mb-6">
                <svg
                  className="w-8 h-8 text-neutral-300 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p
                  className={`text-neutral-700 leading-relaxed ${
                    variant === "compact" ? "text-base" : "text-lg"
                  } font-light`}
                >
                  {testimonial.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                {testimonial.avatar && (
                  <div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="text-neutral-600 font-medium text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-medium text-neutral-900">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

