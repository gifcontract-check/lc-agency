import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Combien de temps faut-il pour créer un site vitrine ?",
    answer: "En général, un site vitrine standard est livré en 2 à 4 semaines, selon la complexité et la rapidité de réception des contenus (textes, images) de votre part."
  },
  {
    question: "Proposez-vous des solutions pour les budgets serrés ?",
    answer: "Oui, nous croyons que chaque entreprise mérite une présence en ligne de qualité. Nous proposons des solutions flexibles et pouvons adapter nos offres pour répondre à vos contraintes budgétaires."
  },
  {
    question: "Mon site sera-t-il visible sur les mobiles et tablettes ?",
    answer: "Absolument. Tous les sites que nous créons sont 'responsive', c'est-à-dire qu'ils s'adaptent parfaitement à tous les formats d'écrans : ordinateurs, tablettes et smartphones."
  },
  {
    question: "Est-ce que je serai propriétaire de mon site web ?",
    answer: "Oui, à la livraison finale et après paiement complet, vous êtes l'unique propriétaire de votre site web et de tous ses contenus."
  },
  {
    question: "Proposez-vous un accompagnement après la mise en ligne ?",
    answer: "Oui, nous proposons des contrats de maintenance pour assurer la sécurité, les mises à jour et les sauvegardes de votre site. Nous restons également disponibles pour toute question ou évolution future."
  }
];

const Faq = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Questions Fréquemment Posées</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vous avez des questions ? Nous avons les réponses.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-lg font-bold text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
