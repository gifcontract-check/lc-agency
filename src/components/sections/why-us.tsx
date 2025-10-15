import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
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
  const whyUsImage = PlaceHolderImages.find(img => img.id === 'why-us-collaboration');

  return (
    <section id="why-us" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {whyUsImage && (
              <Image
                src={whyUsImage.imageUrl}
                alt={whyUsImage.description}
                width={600}
                height={600}
                className="rounded-lg shadow-xl object-cover aspect-square"
                data-ai-hint={whyUsImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-headline text-primary">Pourquoi nous choisir ?</h2>
            <p className="text-lg text-muted-foreground">
              Nous allons au-delà de la simple création de sites web. Nous construisons des partenariats pour assurer votre succès en ligne.
            </p>
            <ul className="space-y-6">
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
