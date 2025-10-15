import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    id: "testimonial-1",
    name: "J.D.",
    role: "Fondatrice de 'Mon Atelier'",
    quote: "Le site est magnifique et nos ventes ont décollé."
  },
  {
    id: "testimonial-2",
    name: "M.P.",
    role: "Gérant de 'Bistro Le Gout'",
    quote: "Une équipe à l'écoute et très professionnelle."
  },
  {
    id: "testimonial-3",
    name: "C.M.",
    role: "Artisane",
    quote: "Le processus a été simple et transparent. Parfait !"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Ce que disent nos clients</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            La satisfaction de nos clients est notre plus grande réussite.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => {
            const image = PlaceHolderImages.find(img => img.id === testimonial.id);
            return (
              <Card key={testimonial.id} className="flex flex-col justify-between shadow-lg">
                <CardContent className="pt-6">
                  <blockquote className="text-lg text-foreground italic border-l-4 border-accent pl-4">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
                <div className="p-6 bg-secondary/50 flex items-center gap-4">
                  {image && (
                    <Avatar>
                      <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />
                      <AvatarFallback>{testimonial.name}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
