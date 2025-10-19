'use client';

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const emailTemplate = `Sujet : Demande de devis - Formule [Nom de la formule]

Bonjour,

Je suis intéressé(e) par la formule "[Nom de la formule]" que vous proposez.

Pourriez-vous me recontacter pour discuter des prochaines étapes ?

Cordialement,

[Votre Nom]`;

const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(emailTemplate);
    setCopied(true);
    toast({
      title: "Copié !",
      description: "Le modèle d'e-mail a été copié dans votre presse-papiers.",
    });
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Prêt à démarrer votre projet ?</h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-muted-foreground">
            Contactez-nous directement par e-mail. Pour nous faciliter la tâche, vous pouvez copier le modèle ci-dessous.
          </p>
          <div className="mt-8">
            <a href="mailto:flex.bnb88@gmail.com">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg">
                flex.bnb88@gmail.com
              </Button>
            </a>
          </div>

          <Card className="mt-12 text-left shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Modèle d'e-mail</CardTitle>
              <Button variant="ghost" size="icon" onClick={handleCopy}>
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                <span className="sr-only">Copier le modèle</span>
              </Button>
            </CardHeader>
            <CardContent>
              <pre className="bg-background p-4 rounded-md whitespace-pre-wrap font-mono text-sm text-muted-foreground">
                {emailTemplate}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
