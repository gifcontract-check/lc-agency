import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Prêt à démarrer votre projet ?</h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-muted-foreground">
            Nous sommes ravis de discuter de vos idées et de voir comment nous pouvons vous aider. Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et sans engagement.
          </p>
          <div className="mt-8">
            <a href="mailto:flex.bnb88@gmail.com">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg">
                flex.bnb88@gmail.com
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
