import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getDictionary } from '@/lib/get-dictionary';

export default async function PrivacyPolicy({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black pt-24">
      <div className="w-full px-6 py-12 md:py-16 overflow-hidden">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-accent transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
          
          <div className="max-w-none">
            <p className="text-zinc-400 italic mb-8">
              Last updated: November 26, 2025
            </p>

            <p className="mb-8 text-zinc-300">
              Thank you for using <strong>2sec</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy explains how we collect, use, and protect your information when you use our mobile application.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">1. Information We Collect</h2>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Camera and Microphone</h3>
            <p className="text-zinc-400 mb-4">
              Our app requires access to your device&apos;s camera and microphone to function. We use this access solely to record 2-second video clips when you initiate them.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Local Storage</h3>
            <p className="text-zinc-400 mb-4">
              All videos recorded with 2sec are stored locally on your device. We do not upload your videos to any cloud server. You have full control over your data and can delete it at any time within the app.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">2. Third-Party Services</h2>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Google AdMob</h3>
            <p className="text-zinc-400 mb-4">
              We use Google AdMob to display advertisements. AdMob may collect and use data—such as your advertising ID—to provide personalized ads. For more information, please refer to <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google&apos;s Privacy & Terms</a>.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">3. Data Security</h2>
            <p className="text-zinc-400 mb-4">
              Your videos are stored locally on your device, so their security depends on your device&apos;s security settings. We recommend keeping your device secure to protect your data.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">4. Changes to This Policy</h2>
            <p className="text-zinc-400 mb-4">
              The App may collect user&apos;s device information, usage logs, and other data to improve the service. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">5. Contact Us</h2>
            <p className="text-zinc-400 mb-4">
              If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:asapp.company.2@gmail.com" className="text-accent hover:underline">asapp.company.2@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer dict={dict.footer} />
    </main>
  );
}
