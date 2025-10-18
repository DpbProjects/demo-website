"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: "1",
    quote: "Velocity transformed how our team collaborates. We shipped our product 3x faster than expected.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "/diverse-woman-portrait.png",
    initials: "SC",
  },
  {
    id: "2",
    quote: "The best investment we made this year. Our development workflow has never been smoother.",
    author: "Marcus Rodriguez",
    role: "Lead Engineer at DataSync",
    avatar: "/man.jpg",
    initials: "MR",
  },
  {
    id: "3",
    quote: "Incredible platform with outstanding support. Velocity helped us scale from 10 to 100 users seamlessly.",
    author: "Emily Watson",
    role: "Product Manager at CloudBase",
    avatar: "/professional-woman.png",
    initials: "EW",
  },
]

export function TestimonialsSection() {
  return (
    <section className="border-b border-border py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Loved by teams worldwide</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            See what our customers have to say about their experience with Velocity.
          </p>
        </div>

        <Tabs defaultValue="1" className="mx-auto max-w-4xl">
          <TabsList className="mb-8 grid w-full grid-cols-3">
            {testimonials.map((testimonial) => (
              <TabsTrigger key={testimonial.id} value={testimonial.id}>
                {testimonial.author.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {testimonials.map((testimonial) => (
            <TabsContent key={testimonial.id} value={testimonial.id}>
              <Card className="border-border">
                <CardContent className="pt-6">
                  <blockquote className="mb-6 text-pretty text-xl leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
