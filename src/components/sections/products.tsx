"use client";

import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useCollection } from "@/firebase/firestore/use-collection";
import { useFirestore } from "@/firebase";
import { collection } from "firebase/firestore";
import { Skeleton } from "../ui/skeleton";
import { useMemoFirebase } from "@/firebase/provider";
import { CheckCircle2 } from "lucide-react";
import { Button } from '../ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  forWhom: string;
  options: string[];
  extra?: string;
}

const Products = () => {
  const firestore = useFirestore();
  const productsCollection = useMemoFirebase(() => firestore ? collection(firestore, 'products') : null, [firestore]);
  const { data: products, isLoading } = useCollection<Product>(productsCollection);

  return (
    <section id="formules" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Nos Formules</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Des solutions claires et adaptées à chaque étape de votre développement.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <Skeleton className="h-8 w-1/2 mb-2" />
                  <Skeleton className="h-12 w-1/4" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  <div className="space-y-3">
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-5/6" />
                  </div>
                </CardContent>
                <CardFooter>
                   <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))
          ) : products && products.length > 0 ? (
            products.map((product) => (
              <Card key={product.id} className="flex flex-col border-2 hover:border-primary transition-all duration-300 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-primary">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{product.forWhom}</p>
                   <p className="text-4xl font-bold text-primary pt-4">{product.price}€</p>
                   <p className="text-xs text-muted-foreground">paiement unique</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-6 text-center">{product.description}</p>
                  <ul className="space-y-3">
                    {product.options.map((option, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                        <span className='text-muted-foreground'>{option}</span>
                      </li>
                    ))}
                  </ul>
                   {product.extra && (
                    <p className="text-sm text-center text-muted-foreground mt-6 pt-4 border-t">
                      {product.extra}
                    </p>
                  )}
                </CardContent>
                <CardFooter>
                  <a href="#contact" className='w-full'>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Choisir cette offre
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground">
              <p>Aucune formule disponible pour le moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
