import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Layers, Rocket } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance with our optimized infrastructure and edge network delivery.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance certifications keep your data safe and secure at all times.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with your favorite tools and services through our extensive API and integration library.",
  },
  {
    icon: Rocket,
    title: "Scale with Confidence",
    description: "From startup to enterprise, our platform grows with you without compromising performance.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-b border-border py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Powerful features designed to help your team work smarter and achieve more.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border transition-colors hover:border-primary/50">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
