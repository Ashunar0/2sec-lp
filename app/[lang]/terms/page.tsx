import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getDictionary } from '@/lib/get-dictionary';

export default async function TermsOfUse({ params: { lang } }: { params: { lang: string } }) {
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

                    <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Terms of Use (EULA)</h1>

                    <div className="max-w-none">
                        <p className="text-zinc-400 italic mb-8">
                            Last updated: January 31, 2026
                        </p>

                        <p className="mb-8 text-zinc-300">
                            By downloading or using the <strong>2sec</strong> application, these terms will automatically apply to you.
                        </p>

                        <h2 className="text-xl font-bold mt-12 mb-4 text-white">1. Standard EULA</h2>
                        <p className="text-zinc-400 mb-4">
                            The use of this App is governed by Apple&apos;s Standard Licensed Application End User License Agreement (Standard EULA). In addition to the terms of the Standard EULA, the following User-Generated Content (UGC) rules apply.
                            <br />
                            (Link: <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</a>)
                        </p>

                        <h2 className="text-xl font-bold mt-12 mb-4 text-white">2. User-Generated Content (UGC) Policy</h2>
                        <p className="text-zinc-400 mb-4">
                            &quot;2sec&quot; allows users to share short video clips with friends and the community. To ensure a safe experience, we have a Zero-Tolerance Policy regarding objectionable content.
                        </p>

                        <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Prohibited Content:</h3>
                        <p className="text-zinc-400 mb-2">You may not post content that is:</p>
                        <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1 ml-4">
                            <li>Harassing, abusive, threatening, or harmful to others.</li>
                            <li>Sexually explicit or pornographic.</li>
                            <li>Violent, graphic, or encouraging illegal acts.</li>
                            <li>Discriminatory (based on race, religion, gender, etc.).</li>
                            <li>Infringing on the privacy or intellectual property of others.</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Moderation and Enforcement:</h3>
                        <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1 ml-4">
                            <li>We provide in-app tools for users to report (flag) and block any user or content.</li>
                            <li>Reported content will be reviewed within 24 hours.</li>
                            <li>If found in violation of these terms, we will remove the content and/or suspend the user&apos;s account immediately.</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-12 mb-4 text-white">3. Limitation of Liability</h2>
                        <p className="text-zinc-400 mb-4">
                            You use the App at your own risk. We are not responsible for any personal interactions or the content shared by users.
                        </p>

                        <h2 className="text-xl font-bold mt-12 mb-4 text-white">4. Contact</h2>
                        <p className="text-zinc-400 mb-4">
                            If you have any questions or report violations, please contact: <a href="mailto:asapp.company.2@gmail.com" className="text-accent hover:underline">asapp.company.2@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer dict={dict.footer} />
        </main>
    );
}
