import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import WhyUs from '@/components/sections/why-us';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <About />
      <Contact />
    </div>
  );
}
