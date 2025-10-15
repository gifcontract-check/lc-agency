import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
    role: "Gérant de 'Bistro Le Goût'",
    quote: "Une équipe à l'écoute et très professionnelle."
  },
  {
    id: "testimonial-3",
    name: "C.M.",
    role: "Artisane",
    quote: "Le processus a été simple et transparent. Parfait !"
  },
  {
    id: "testimonial-4",
    name: "A.L.",
    role: "Coach sportif",
    quote: "Mon nouveau site a boosté ma visibilité en ligne."
  },
  {
    id: "testimonial-5",
    name: "S.B.",
    role: "Consultant indépendant",
    quote: "Très satisfait du résultat, je recommande vivement."
  },
  {
    id: "testimonial-6",
    name: "N.T.",
    role: "Photographe",
    quote: "Un portfolio en ligne qui met vraiment mon travail en valeur."
  },
  {
    id: "testimonial-7",
    name: "E.R.",
    role: "Propriétaire de chambres d'hôtes",
    quote: "Les réservations ont augmenté depuis la refonte."
  },
  {
    id: "testimonial-8",
    name: "F.G.",
    role: "Restaurateur",
    quote: "Un site moderne qui reflète l'ambiance de mon restaurant."
  },
  {
    id: "testimonial-9",
    name: "H.K.",
    role: "Créatrice de bijoux",
    quote: "Ma boutique en ligne est à la fois belle et fonctionnelle."
  },
  {
    id: "testimonial-10",
    name: "L.B.",
    role: "Architecte",
    quote: "Professionnalisme et créativité. Le combo parfait."
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
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="flex flex-col justify-between shadow-lg h-full">
                    <CardContent className="pt-6 flex-grow">
                      <blockquote className="text-lg text-foreground italic border-l-4 border-accent pl-4">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                    <div className="p-6 bg-secondary/50">
                      <p className="font-bold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
