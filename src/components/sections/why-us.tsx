import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: "Approche sur-mesure",
    description: "Nous prenons le temps de comprendre votre métier pour vous livrer un site qui vous ressemble et répond à vos objectifs."
  },
  {
    title: "Budget maîtrisé",
    description: "Nous proposons des solutions adaptées à toutes les bourses, avec une transparence totale sur les coûts."
  },
  {
    title: "Partenaire de confiance",
    description: "Plus qu'un prestataire, nous sommes votre partenaire digital sur le long terme pour vous accompagner dans votre croissance."
  },
  {
    title: "Expertise technique",
    description: "Nous utilisons les dernières technologies pour garantir des sites performants, sécurisés et évolutifs."
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          <div className="space-y-8 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Pourquoi nous choisir ?</h2>
            <p className="text-lg text-muted-foreground">
              Nous allons au-delà de la simple création de sites web. Nous construisons des partenariats pour assurer votre succès en ligne.
            </p>
            <ul className="space-y-6 text-left">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
