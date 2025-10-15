import { Search, Palette, Code, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: <Search className="w-8 h-8 text-accent" />,
    title: "Découverte et Stratégie",
    description: "Nous analysons vos besoins et objectifs pour définir une stratégie digitale solide et sur mesure."
  },
  {
    icon: <Palette className="w-8 h-8 text-accent" />,
    title: "Design et Conception",
    description: "Nos designers créent une maquette unique et intuitive, axée sur l'expérience utilisateur (UX/UI)."
  },
  {
    icon: <Code className="w-8 h-8 text-accent" />,
    title: "Développement et Intégration",
    description: "Votre site est développé avec les dernières technologies pour garantir performance et sécurité."
  },
  {
    icon: <Rocket className="w-8 h-8 text-accent" />,
    title: "Lancement et Suivi",
    description: "Nous déployons votre site et restons à vos côtés pour assurer sa maintenance et son évolution."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Notre Processus</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            De l'idée au succès en ligne, un parcours en quatre étapes clés.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                 <div className="mb-4 relative">
                  <div className="absolute -inset-2 bg-accent/10 rounded-full animate-pulse"></div>
                  <div className="relative p-4 bg-background rounded-full border-2 border-accent">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
