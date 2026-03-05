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
                            Last updated: March 5, 2026
                        </p>

                        <p className="mb-4 text-zinc-300">
                            By downloading or using the <span className="brand-text text-xs align-baseline mx-0.5">2sec</span> application, these terms will automatically apply to you.
                        </p>
                        <p className="mb-8 text-zinc-300">
                            <strong className="text-white">Age Requirement:</strong> You must be at least 13 years of age to use this App. By using this App, you confirm that you meet this age requirement. If you are under 13, please do not use this App.
                        </p>

                        <h2 className="text-xl font-bold mt-12 mb-4 text-white">1. Standard EULA</h2>
                        <p className="text-zinc-400 mb-4">
                            The use of this App is governed by Apple&apos;s Standard Licensed Application End User License Agreement (Standard EULA). In addition to the terms of the Standard EULA, the following User-Generated Content (UGC) rules apply.
                            <br />
                            (Link: <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</a>)
                        </p>

                        <h2 className="text-xl font-bold mt-12 mb-4 text-white">2. User-Generated Content (UGC) Policy</h2>
                        <p className="text-zinc-400 mb-4">
                            <span className="brand-text text-xs align-baseline mx-0.5">2sec</span> allows users to share short video clips and comments with friends and the community. To ensure a safe experience, we have a Zero-Tolerance Policy regarding objectionable content.
                        </p>

                        <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Prohibited Content:</h3>
                        <p className="text-zinc-400 mb-2">You may not post content that is:</p>
                        <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1 ml-4">
                            <li>Harassing, abusive, threatening, or harmful to others.</li>
                            <li>Sexually explicit or pornographic.</li>
                            <li>Violent, graphic, or encouraging illegal acts.</li>
                            <li>Discriminatory (based on race, religion, gender, etc.).</li>
                            <li>Infringing on the privacy or intellectual property of others.</li>
                            <li>Spam, impersonation, or otherwise deceptive.</li>
                        </ul>

                        <h3 className="text-lg font-semibold mt-8 mb-2 text-zinc-200">Moderation and Enforcement:</h3>
                        <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-1 ml-4">
                            <li>We provide in-app tools for users to report (flag) and block any user or content.</li>
                            <li>Reported content will be reviewed as soon as practicable.</li>
                            <li>If found in violation of these terms, we will remove the content and/or suspend the user&apos;s account.</li>
                        </ul>

                        <h2 className="text-xl font-bold mt-12 mb-4 text-white">3. Disclosure to Authorities</h2>
                        <p className="text-zinc-400 mb-4">
                            We cooperate with lawful requests from law enforcement and courts. When required by applicable law or a valid legal process (such as a court order or subpoena), we may disclose user information, including sender identification data, to the appropriate authorities. We will handle such requests in accordance with applicable Japanese law, including the Act on the Limitation of Liability for Damages of Specified Telecommunications Service Providers and the Disclosure of Identification Information of the Senders.
                        </p>

                        <h2 className="text-xl font-bold mt-12 mb-4 text-white">4. Limitation of Liability</h2>
                        <p className="text-zinc-400 mb-4">
                            You use the App at your own risk. We are not responsible for any personal interactions or the content shared by users. To the extent permitted by applicable law, our total liability shall not exceed the amount you paid us in the twelve months prior to the claim.
                        </p>

                        <h2 className="text-xl font-bold mt-12 mb-4 text-white">5. Governing Law</h2>
                        <p className="text-zinc-400 mb-4">
                            These Terms of Use are governed by and construed in accordance with the laws of Japan. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the Tokyo District Court as the court of first instance.
                        </p>

                        <h2 className="text-xl font-bold mt-12 mb-4 text-white">6. Contact</h2>
                        <p className="text-zinc-400 mb-4">
                            If you have any questions or wish to report violations, please contact: <a href="mailto:asapp.company.2@gmail.com" className="text-accent hover:underline">asapp.company.2@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer dict={dict.footer} />
        </main>
    );
}
