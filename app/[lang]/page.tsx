import Hero from '@/components/Hero';
import Concept from '@/components/Concept';
import Features from '@/components/Features';
import HowToUse from '@/components/HowToUse';
import Download from '@/components/Download';
import Information from '@/components/Information';
import Footer from '@/components/Footer';

export const dynamic = 'force-static';
export const revalidate = false;

import { getDictionary } from '@/lib/get-dictionary';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black">
      <Hero dict={dict.hero} />
      <Concept dict={dict.concept} />
      <Features dict={dict.features} />
      <HowToUse dict={dict.howToUse} />
      <Download dict={dict.download} />
      <Information dict={dict.information} />
      <Footer dict={dict.footer} />
    </main>
  );
}
