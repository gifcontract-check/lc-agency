"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useCollection } from "@/firebase/firestore/use-collection";
import { useFirestore } from "@/firebase";
import { collection } from "firebase/firestore";
import { useMemo } from "react";
import { Skeleton } from "../ui/skeleton";
import { useMemoFirebase } from "@/firebase/provider";

interface Testimonial {
  id: string;
  name: string;
  quote: string;
}

const Testimonials = () => {
  const firestore = useFirestore();
  const testimonialsCollection = useMemoFirebase(() => collection(firestore, 'testimonials'), [firestore]);
  const { data: testimonials, isLoading } = useCollection<Testimonial>(testimonialsCollection);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Ce que disent nos clients</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            La satisfaction de nos clients est notre plus grande réussite.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col justify-between shadow-lg h-full">
                       <CardContent className="pt-6 flex-grow">
                        <Skeleton className="h-4 w-3/4 mb-4" />
                        <Skeleton className="h-4 w-1/2" />
                      </CardContent>
                      <div className="p-6 bg-secondary/50">
                        <Skeleton className="h-6 w-1/4" />
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))
            ) : testimonials && testimonials.length > 0 ? (
              testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col justify-between shadow-lg h-full">
                      <CardContent className="pt-6 flex-grow">
                        <blockquote className="text-lg text-foreground italic border-l-4 border-accent pl-4">
                          "{testimonial.quote}"
                        </blockquote>
                      </CardContent>
                      <div className="p-6 bg-secondary/50">
                        <p className="font-bold text-primary">{testimonial.name}</p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))
            ) : (
               <CarouselItem className="w-full">
                <p className="text-center text-muted-foreground">Aucun témoignage pour le moment.</p>
              </CarouselItem>
            )}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
