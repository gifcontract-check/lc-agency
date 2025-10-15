import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} LC Agency. Tous droits réservés.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">
            Politique de confidentialité
          </Link>
          <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">
            Conditions d'utilisation
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
