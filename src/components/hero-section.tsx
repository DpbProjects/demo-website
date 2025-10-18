import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border">
      <div className="container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Introducing Velocity 2.0</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Build faster. Ship smarter. Scale effortlessly.
          </h1>

          <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            The complete platform for modern teams. Streamline your workflow, collaborate seamlessly, and deliver
            exceptional results with our all-in-one solution.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
