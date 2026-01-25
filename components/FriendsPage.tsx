'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Dictionary } from '@/types/dictionary';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import NextImage from 'next/image';

function FriendsPageContent({ dict }: { dict: Dictionary['friends'] }) {
    const searchParams = useSearchParams();
    const inviteId = searchParams.get('inviteId');
    const [isAttemptingOpen, setIsAttemptingOpen] = useState(true);

    useEffect(() => {
        // Preconnect to external image domain for faster loading
        const link1 = document.createElement('link');
        link1.rel = 'preconnect';
        link1.href = 'https://tools.applemediaservices.com';
        link1.crossOrigin = 'anonymous';
        document.head.appendChild(link1);

        const link2 = document.createElement('link');
        link2.rel = 'dns-prefetch';
        link2.href = 'https://tools.applemediaservices.com';
        document.head.appendChild(link2);

        if (inviteId) {
            const appUrl = `twosec://friends?inviteId=${inviteId}`;

            // Try to open the app automatically after a short delay
            const timer = setTimeout(() => {
                window.location.href = appUrl;
                setIsAttemptingOpen(false);
            }, 1000);

            return () => {
                clearTimeout(timer);
                if (link1.parentNode) link1.parentNode.removeChild(link1);
                if (link2.parentNode) link2.parentNode.removeChild(link2);
            };
        }

        return () => {
            if (link1.parentNode) link1.parentNode.removeChild(link1);
            if (link2.parentNode) link2.parentNode.removeChild(link2);
        };
    }, [inviteId]);

    return (
        <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black px-4 sm:px-6 pt-24 md:pt-32">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] aspect-square bg-accent/10 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[440px]"
            >
                <div className="bg-zinc-900/50 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                    {/* Top Accent Gradient */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

                    <div className="flex flex-col items-center">
                        {/* App Icon */}
                        <div className="w-24 h-24 mb-8 relative">
                            <div className="absolute inset-0 bg-accent blur-2xl opacity-20" />
                            <div className="relative w-full h-full border-2 border-accent bg-transparent rounded-3xl p-0 shadow-[0_0_40px_rgba(243,253,83,0.3)]">
                                <NextImage src="/icon.svg" alt="2sec" width={120} height={120} priority />
                            </div>
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                            {dict.title}
                        </h1>

                        <p className="text-zinc-400 mb-10 text-center leading-relaxed text-lg">
                            {dict.description.replace('{name}', inviteId || '...')}
                        </p>

                        <div className="w-full space-y-4">
                            <Button
                                size="lg"
                                className="w-full h-16 text-xl font-bold rounded-2xl bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/5 active:scale-95 transition-transform"
                                onClick={() => {
                                    if (inviteId) {
                                        window.location.href = `twosec://friends?inviteId=${inviteId}`;
                                    }
                                }}
                            >
                                {dict.openApp}
                            </Button>

                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={isAttemptingOpen ? 'opening' : 'fallback'}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className={`text-zinc-500 text-center min-h-[20px] ${isAttemptingOpen ? 'text-sm' : 'text-xs'}`}
                                >
                                    {isAttemptingOpen ? dict.autoOpening : dict.fallbackMessage}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* App Store Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-12 w-full pt-8 border-t border-white/5 flex flex-col items-center"
                        >
                            <p className="text-sm font-medium text-zinc-400 mb-5">
                                {dict.notInstalled}
                            </p>
                            <a
                                href="https://apps.apple.com/jp/app/2sec/id6755941014"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block transition-transform hover:scale-105 active:scale-95"
                            >
                                <NextImage
                                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                                    alt="Download on the App Store"
                                    width={160}
                                    height={53}
                                    className="h-12 w-auto"
                                    unoptimized
                                    loading="lazy"
                                />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default function FriendsPage({ dict }: { dict: Dictionary['friends'] }) {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <FriendsPageContent dict={dict} />
        </Suspense>
    );
}
