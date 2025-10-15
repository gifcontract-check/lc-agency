export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="prose prose-lg max-w-4xl mx-auto">
        <h1>Politique de Confidentialité</h1>
        <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

        <h2>1. Introduction</h2>
        <p>
          Bienvenue sur le site de LC Agency. Nous nous engageons à protéger la vie privée de nos utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web.
        </p>

        <h2>2. Collecte de vos informations</h2>
        <p>
          Nous pouvons collecter des informations vous concernant de différentes manières. Les informations que nous pouvons collecter sur le site comprennent :
        </p>
        <h3>Données personnelles</h3>
        <p>
          Les informations d'identification personnelle, telles que votre nom, votre adresse e-mail, que vous nous fournissez volontairement lorsque vous vous inscrivez sur le site ou lorsque vous choisissez de participer à diverses activités liées au site, comme laisser un avis.
        </p>
        <h3>Données de navigation</h3>
        <p>
          Les informations que votre navigateur envoie automatiquement chaque fois que vous visitez notre site, comme votre adresse IP, le type de navigateur, les temps d'accès et les pages que vous avez consultées.
        </p>

        <h2>3. Utilisation de vos informations</h2>
        <p>
          Avoir des informations précises sur vous nous permet de vous offrir une expérience fluide, efficace et personnalisée. Spécifiquement, nous pouvons utiliser les informations collectées à votre sujet via le site pour :
        </p>
        <ul>
          <li>Créer et gérer votre compte.</li>
          <li>Vous envoyer un e-mail concernant votre compte ou votre commande.</li>
          <li>Permettre la communication entre utilisateurs.</li>
          <li>Gérer les achats, commandes, paiements et autres transactions liées au site.</li>
          <li>Améliorer l'efficacité et le fonctionnement du site.</li>
        </ul>

        <h2>4. Sécurité de vos informations</h2>
        <p>
          Nous utilisons des mesures de sécurité administratives, techniques et physiques pour aider à protéger vos informations personnelles. Bien que nous ayons pris des mesures raisonnables pour sécuriser les informations personnelles que vous nous fournissez, sachez que malgré nos efforts, aucune mesure de sécurité n'est parfaite ou impénétrable.
        </p>

        <h2>5. Nous contacter</h2>
        <p>
          Si vous avez des questions ou des commentaires sur cette politique de confidentialité, veuillez nous contacter à :
        </p>
        <p>flex.bnb88@gmail.com</p>
      </div>
    </div>
  );
}
