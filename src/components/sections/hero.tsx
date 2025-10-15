import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-24 md:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
            Votre Vision, Notre Code : Le Succès en Ligne.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Nous créons des expériences web sur-mesure qui captivent vos clients et propulsent votre croissance.
          </p>
          <div className="mt-10">
            <a href="#contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6">
                Demander un Devis
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
