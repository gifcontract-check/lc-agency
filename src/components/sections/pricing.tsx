import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Essentiel",
    price: "499€",
    description: "Idéal pour commencer et marquer votre présence en ligne.",
    features: [
      "Site vitrine one-page",
      "Design personnalisé",
      "Formulaire de contact",
      "Mise en ligne",
    ],
    isFeatured: false,
  },
  {
    name: "Professionnel",
    price: "999€",
    description: "La solution complète pour les entreprises qui veulent grandir.",
    features: [
      "Site multi-pages (5 pages)",
      "Intégration de contenu",
      "Optimisation SEO de base",
      "Blog",
    ],
    isFeatured: true,
  },
  {
    name: "E-commerce",
    price: "1999€",
    description: "Vendez vos produits en ligne avec une boutique performante.",
    features: [
      "Boutique en ligne complète",
      "Gestion de produits",
      "Paiements sécurisés",
      "Espace client",
    ],
    isFeatured: false,
  },
  {
    name: "Sur Mesure",
    price: "Devis",
    description: "Un projet complexe ? Nous créons la solution unique qu'il vous faut.",
    features: [
      "Fonctionnalités avancées",
      "Intégrations API tierces",
      "Espace membre complexe",
      "Accompagnement dédié",
    ],
    isFeatured: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Des formules pour chaque besoin</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Des tarifs transparents et adaptés à la taille de votre projet.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingTiers.map((tier) => (
            <Card key={tier.name} className={`flex flex-col ${tier.isFeatured ? 'border-accent shadow-accent/20 shadow-lg' : ''}`}>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.name !== 'Sur Mesure' && <span className="text-muted-foreground"> / une fois</span>}
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${tier.isFeatured ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'bg-primary'}`}>
                  {tier.name === 'Sur Mesure' ? 'Nous contacter' : 'Choisir cette formule'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
