import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowToUse from '@/components/HowToUse';
import Download from '@/components/Download';
import Information from '@/components/Information';
import Footer from '@/components/Footer';

export const dynamic = 'force-static';
export const revalidate = false;

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black">
      <Hero />
      <Features />
      <HowToUse />
      <Download />
      <Information />
      <Footer />
    </main>
  );
}
