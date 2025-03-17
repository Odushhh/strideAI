import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyStrideAI from '@/components/WhyStrideAI';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full snap-proximity">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyStrideAI />
        <HowItWorks />
        {/*<Benefits /> */}
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
