import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const About = () => {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-team');

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Notre Agence</h2>
            <p className="text-lg text-muted-foreground">
              Chez LC Agency, notre mission est de propulser les petites et moyennes entreprises dans le monde numérique. Nous croyons en une approche personnalisée, en créant des sites web qui non seulement sont esthétiques, mais qui génèrent également des résultats.
            </p>
            <p className="text-lg text-muted-foreground">
              Notre équipe passionnée combine expertise technique et créativité pour donner vie à votre vision. Nous sommes plus que de simples développeurs ; nous sommes vos partenaires pour la croissance.
            </p>
          </div>
          <div>
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover aspect-[3/2]"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
