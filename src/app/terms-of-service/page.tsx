export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="prose prose-lg max-w-4xl mx-auto">
        <h1>Conditions d'Utilisation</h1>
        <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

        <h2>1. Accord sur les conditions</h2>
        <p>
          En accédant à ce site, vous acceptez d'être lié par ces conditions d'utilisation, toutes les lois et réglementations applicables, et acceptez d'être responsable du respect de toutes les lois locales applicables. Si vous n'êtes pas d'accord avec l'une de ces conditions, il vous est interdit d'utiliser ou d'accéder à ce site.
        </p>

        <h2>2. Licence d'utilisation</h2>
        <p>
          La permission est accordée de télécharger temporairement une copie du matériel (information ou logiciel) sur le site web de LC Agency pour une visualisation transitoire personnelle et non commerciale uniquement. Ceci est l'octroi d'une licence, pas un transfert de titre.
        </p>

        <h2>3. Contenu utilisateur</h2>
        <p>
          Le site peut vous inviter à discuter, contribuer ou participer à des blogs, des forums de discussion, et d'autres fonctionnalités, et peut vous donner l'occasion de créer, soumettre, afficher, transmettre, exécuter, publier, distribuer ou diffuser du contenu et des matériaux à nous ou sur le site, y compris, mais sans s'y limiter, du texte, des écrits, des vidéos, des photographies, des graphiques, des commentaires, des suggestions ou des informations personnelles ou autre matériel (collectivement, le "Contenu").
        </p>
        <p>
          Vous conservez tous vos droits de propriété sur votre Contenu. Cependant, en publiant du Contenu sur le site, vous nous accordez une licence mondiale, non exclusive, libre de redevances, transférable pour utiliser, reproduire, distribuer, préparer des œuvres dérivées, afficher et exécuter ce Contenu en relation avec le service.
        </p>
        
        <h2>4. Lois applicables</h2>
        <p>
          Ces conditions sont régies et interprétées conformément aux lois de France et vous vous soumettez irrévocablement à la juridiction exclusive des tribunaux de cet État ou de ce lieu.
        </p>

        <h2>5. Nous contacter</h2>
        <p>
          Pour toute question concernant ces conditions, veuillez nous contacter à :
        </p>
        <p>flex.bnb88@gmail.com</p>
      </div>
    </div>
  );
}
