import { Background } from '@/components/Background';
import { ParticleField } from '@/components/ParticleField';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Plans } from '@/components/Plans';
import { Comparison } from '@/components/Comparison';
import { Identity } from '@/components/Identity';
import { Support } from '@/components/Support';
import { Faq } from '@/components/Faq';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Plans />
        <Comparison />
        <Identity />
        <Support />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
