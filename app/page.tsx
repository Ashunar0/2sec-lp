import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowToUse from '@/components/HowToUse';
import Download from '@/components/Download';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black">
      <Hero />
      <Features />
      <HowToUse />
      <Download />
      
      <footer className="py-8 text-center text-gray-800 text-sm">
        &copy; {new Date().getFullYear()} 2sec. All rights reserved.
      </footer>
    </main>
  );
}
