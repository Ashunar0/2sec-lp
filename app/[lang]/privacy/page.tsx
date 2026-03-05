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
              Last updated: March 5, 2026
            </p>

            <p className="mb-4 text-zinc-300">
              Thank you for using <span className="brand-text text-xs align-baseline mx-0.5">2sec</span> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). This Privacy Policy explains how we collect, use, and protect your information.
            </p>
            <p className="mb-8 text-zinc-300">
              <strong className="text-white">Age Requirement:</strong> You must be at least 13 years of age to use this App. If you are under 13, please do not use this App or provide any personal information.
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

            <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">User-Generated Content (Videos & Comments)</h3>
            <div className="text-zinc-400 mb-4 space-y-4">
              <p>
                <strong className="text-zinc-200">Local Storage:</strong> Videos recorded for personal use remain on your device.
              </p>
              <p>
                <strong className="text-zinc-200">Cloud Storage:</strong> When you explicitly choose to share videos with friends or post to the &quot;Seconds&quot; feed, those videos and their metadata are uploaded to our secure cloud servers (Firebase) to enable these sharing features.
              </p>
              <p>
                <strong className="text-zinc-200">Comments:</strong> Comments you post on videos are stored in our cloud servers and are visible to other users. Please be aware that content you post publicly may be seen by anyone using the App.
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Social Data</h3>
            <p className="text-zinc-400 mb-4">
              To provide a safe environment, we store your friends list, friend requests, block lists, and your interactions (likes, comments) within the App.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">2. Third-Party Services</h2>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Firebase (Google)</h3>
            <p className="text-zinc-400 mb-4">
              We use Firebase for authentication, database management (Firestore), and cloud storage. Data is processed by Google in accordance with their privacy policy.
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Google AdMob</h3>
            <p className="text-zinc-400 mb-4">
              We may use Google AdMob to display advertisements. AdMob may collect data such as your advertising ID to provide personalized ads. For more information, please refer to <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google&apos;s Privacy & Terms</a>.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">3. Safety and Moderation (UGC)</h2>
            <p className="text-zinc-400 mb-4">
              To maintain a safe community, we provide tools for users to report and block inappropriate content or users. We may review reported content to ensure compliance with our community standards. We reserve the right to remove content and suspend accounts that violate our Terms of Use.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">4. Data Security & Retention</h2>
            <p className="text-zinc-400 mb-4">
              We implement industry-standard security measures to protect your data. You can delete your shared content or your entire account at any time through the in-app settings, which will remove your data from our servers. We will retain your data only as long as necessary to provide our services or as required by applicable law.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">5. Your Rights</h2>
            <p className="text-zinc-400 mb-2">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1 ml-4">
              <li><strong className="text-zinc-300">Access</strong> the personal information we hold about you.</li>
              <li><strong className="text-zinc-300">Correct</strong> any inaccurate personal information.</li>
              <li><strong className="text-zinc-300">Delete</strong> your account and associated personal data.</li>
              <li><strong className="text-zinc-300">Object</strong> to or restrict certain uses of your data.</li>
            </ul>
            <p className="text-zinc-400 mb-4">
              To exercise any of these rights, please contact us at <a href="mailto:asapp.company.2@gmail.com" className="text-accent hover:underline">asapp.company.2@gmail.com</a>. You may also delete your account directly from the in-app settings at any time.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">6. Changes to This Policy</h2>
            <p className="text-zinc-400 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and, where appropriate, through an in-app notification.
            </p>

            <h2 className="text-xl font-bold mt-12 mb-4 text-white">7. Contact Us</h2>
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
