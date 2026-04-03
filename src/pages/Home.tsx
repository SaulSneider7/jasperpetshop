import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { About } from '../components/About';
import { Products } from '../components/Products';
import { SocialSection } from '../components/SocialSection';
import { SatisfiedCustomers } from '../components/SatisfiedCustomers';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Products />
      <SocialSection />
      <SatisfiedCustomers />
      <FAQ />
      <CTA />
    </>
  );
};
