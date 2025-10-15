'use client';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useUser } from '@/firebase';
import { getAuth, signOut } from "firebase/auth";
import Link from 'next/link';
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Pourquoi nous" },
  { href: "/#testimonials", label: "Avis" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isUserLoading } = useUser();
  const auth = getAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-xl font-bold text-primary">
            LC Agency
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          {isUserLoading ? (
            <div className="w-24 h-10 bg-muted rounded-md animate-pulse" />
          ) : user ? (
            <Button variant="outline" onClick={handleLogout}>Déconnexion</Button>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Se connecter</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">S'inscrire</Button>
              </Link>
            </>
          )}
        </div>
        
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                   <Link href="/" className="text-xl font-bold text-primary" onClick={() => setIsMenuOpen(false)}>
                    LC Agency
                  </Link>
                  <SheetTrigger asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Fermer le menu</span>
                      </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-6 text-lg">
                  {navLinks.map(link => (
                    <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="font-medium text-foreground hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-6 border-t">
                 {isUserLoading ? (
                    <div className="w-full h-10 bg-muted rounded-md animate-pulse" />
                  ) : user ? (
                    <Button variant="outline" onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="w-full">Déconnexion</Button>
                  ) : (
                    <div className="flex flex-col gap-4">
                       <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="ghost" className="w-full">Se connecter</Button>
                      </Link>
                      <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">S'inscrire</Button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
