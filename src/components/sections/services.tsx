import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brush, MonitorSmartphone, ShoppingCart, Wrench } from "lucide-react";

const services = [
  {
    icon: <MonitorSmartphone className="w-10 h-10 text-accent" />,
    title: "Sites Vitrines",
    description: "Présentez votre activité de manière professionnelle avec un site web moderne, performant et optimisé pour le référencement."
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-accent" />,
    title: "E-commerce",
    description: "Lancez votre boutique en ligne avec une plateforme robuste, sécurisée et conçue pour convertir vos visiteurs en clients."
  },
  {
    icon: <Brush className="w-10 h-10 text-accent" />,
    title: "Refonte de Site",
    description: "Donnez un nouveau souffle à votre site existant avec un design repensé, une meilleure expérience utilisateur et des technologies à jour."
  },
  {
    icon: <Wrench className="w-10 h-10 text-accent" />,
    title: "Maintenance",
    description: "Assurez la pérennité et la sécurité de votre site web avec nos forfaits de maintenance, incluant mises à jour et sauvegardes."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-headline text-primary">Nos Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Des solutions web complètes pour transformer votre présence en ligne.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/10 rounded-full">
                  {service.icon}
                </div>
                <CardTitle className="pt-4 font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
