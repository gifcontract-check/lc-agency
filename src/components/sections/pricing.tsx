import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: "180€",
    description: "Idéale pour : artisans, indépendants, CV en ligne, restaurant, coiffeur, auto-entrepreneur…",
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
                  {tier.name !== 'Sur Mesure' && tier.price !== 'Devis' && <span className="text-muted-foreground"> / une fois</span>}
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
