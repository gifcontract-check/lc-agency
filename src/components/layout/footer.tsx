const Footer = () => {
  return (
    <footer className="bg-background py-6">
      <div className="container mx-auto px-4 md:px-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} LC Agency. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
