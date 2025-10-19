import Contact from '@/components/sections/contact';
import Faq from '@/components/sections/faq';
import Hero from '@/components/sections/hero';
import Process from '@/components/sections/process';
import Products from '@/components/sections/products';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import WhyUs from '@/components/sections/why-us';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Products />
      <Testimonials />
      <Faq />
      <Contact />
    </div>
  );
}
