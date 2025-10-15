'use client';
import { Button } from "@/components/ui/button";
import Logo from "@/components/icons/logo";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-xl font-bold text-primary">LC Agency</span>
        </div>
        <a href="#contact">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Demander un Devis
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
