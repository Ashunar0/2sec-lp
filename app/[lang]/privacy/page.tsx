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
              Last updated: January 31, 2026
            </p>

            <p className="mb-8 text-zinc-300">
              Thank you for using <strong>2sec</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy explains how we collect, use, and protect your information.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">1. Information We Collect and How We Use It</h2>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Camera and Microphone</h3>
            <p className="text-zinc-400 mb-4">
              Our app requires access to your device&apos;s camera and microphone to record 2-second video clips.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">User Account & Profile</h3>
            <p className="text-zinc-400 mb-4">
              When you use social features, we collect information such as your display name, profile picture, and user ID to enable friend connections and social interactions.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">User-Generated Content (Videos)</h3>
            <div className="text-zinc-400 mb-4 space-y-4">
              <p>
                <strong className="text-zinc-200">Local Storage:</strong> Videos recorded for personal use remain on your device.
              </p>
              <p>
                <strong className="text-zinc-200">Cloud Storage:</strong> When you explicitly choose to share videos with friends or post to the &quot;Seconds&quot; feed, those videos and their metadata are uploaded to our secure cloud servers (Firebase) to enable these sharing features.
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Social Data</h3>
            <p className="text-zinc-400 mb-4">
              To provide a safe environment, we store your friends list, friend requests, and block lists.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">2. Third-Party Services</h2>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Firebase (Google)</h3>
            <p className="text-zinc-400 mb-4">
              We use Firebase for authentication, database management (Firestore), and cloud storage.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Google AdMob</h3>
            <p className="text-zinc-400 mb-4">
              We use Google AdMob to display advertisements. AdMob may collect data such as your advertising ID to provide personalized ads. For more information, please refer to <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google&apos;s Privacy & Terms</a>.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">3. Safety and Moderation (UGC)</h2>
            <p className="text-zinc-400 mb-4">
              To maintain a safe community, we provide tools for users to report and block inappropriate content or users. We may review reported content to ensure compliance with our community standards.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">4. Data Security & Retention</h2>
            <p className="text-zinc-400 mb-4">
              We implement industry-standard security measures to protect your data. You can delete your shared content or your entire account at any time through the in-app settings, which will remove your data from our servers.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">5. Changes to This Policy</h2>
            <p className="text-zinc-400 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">6. Contact Us</h2>
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
