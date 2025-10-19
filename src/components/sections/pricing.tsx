import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const pricingTiers = [
  {
    name: "Starter",
    price: "179€",
    description: "Idéale pour : artisans, indépendants, CV en ligne, restaurant, coiffeur, auto-entrepreneur…",
    downPayment: "0% d'acompte",
    features: [
      "1 page d’accueil + 3 pages (ex : services, contact, à propos)",
      "Design responsive et moderne",
      "Hébergement et base de données via Firestore",
      "Panneau admin simple (ex : modifier le texte, photos, etc.)",
      "Option : +30€/page supplémentaire",
    ],
    isFeatured: false,
  },
  {
    name: "Pro",
    price: "399€",
    description: "Idéale pour : PME, restaurants, agences, garages, boutiques locales…",
    downPayment: "10% d'acompte",
    features: [
      "Site complet (5 à 8 pages)",
      "Design personnalisé selon charte graphique",
      "Optimisation SEO de base",
      "Panneau admin (modification de contenu, photos, avis, FAQ…)",
      "Connexion Firestore (auth, base de données, stockage images)",
      "Intégration Google Maps, réseaux sociaux, etc.",
      "Sécurité HTTPS incluse"
    ],
    isFeatured: true,
  },
  {
    name: "E-commerce",
    price: "699€",
    description: "Idéale pour : boutiques, créateurs, dropshippers, marques…",
    downPayment: "15% d'acompte",
    features: [
        "Tout de la formule “Pro”",
        "Catalogue produits",
        "Admin panel pour gérer les produits (ajout/suppression/modif prix/images)",
        "Panier + page de commande (paiement Stripe ou simulateur)",
        "SEO optimisé pour produits",
        "Option : +100€ pour paiement en ligne complet (Stripe)",
    ],
    isFeatured: false,
  },
  {
    name: "Sur-mesure",
    price: "Devis",
    description: "Idéale pour : projets SaaS, plateformes personnalisées ou refontes totales.",
    downPayment: "25% d'acompte",
    features: [
      "Fonctionnalités avancées",
      "Intégrations API",
      "Intégration d'IA",
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
              <CardHeader className="text-center items-center relative pt-12">
                {tier.isFeatured && (
                  <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                    <Badge variant="outline" className="border-accent text-accent bg-background">
                      <Star className="w-4 h-4 mr-2" /> Le plus choisi
                    </Badge>
                  </div>
                )}
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.name !== 'Sur Mesure' && tier.price !== 'Devis' && <span className="text-muted-foreground"> / une fois</span>}
                   <p className="text-sm text-muted-foreground mt-1">{tier.downPayment}</p>
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
                 <a href="#contact" className="w-full">
                  <Button className={`w-full ${tier.isFeatured ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : 'bg-primary'}`}>
                    {tier.name === 'Sur-mesure' ? 'Nous contacter' : 'Choisir cette formule'}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
