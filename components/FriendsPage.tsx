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
        // Preconnect only if necessary
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = 'https://tools.applemediaservices.com';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);

        if (inviteId) {
            const appUrl = `twosec://friends?inviteId=${inviteId}`;

            // Faster auto-open for better UX (1000ms -> 300ms)
            const timer = setTimeout(() => {
                window.location.href = appUrl;
                setIsAttemptingOpen(false);
            }, 300);

            return () => {
                clearTimeout(timer);
                if (link.parentNode) link.parentNode.removeChild(link);
            };
        }

        return () => {
            if (link.parentNode) link.parentNode.removeChild(link);
        };
    }, [inviteId]);

    return (
        <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black px-4 sm:px-6 pt-20">
            {/* Optimized Background Decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] aspect-square bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[400px]"
            >
                <div className="bg-zinc-900/40 backdrop-blur-2xl border border-white/10 rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

                    <div className="flex flex-col items-center">
                        {/* Lightweight App Icon replacement */}
                        <div className="w-20 h-20 mb-8 relative">
                            <div className="absolute inset-0 bg-accent blur-2xl opacity-10" />
                            <div className="relative w-full h-full border border-accent/50 bg-black rounded-2xl p-0.5 shadow-[0_0_30px_rgba(243,253,83,0.15)] overflow-hidden">
                                <NextImage
                                    src="/4-Layer.png"
                                    alt="2sec"
                                    width={80}
                                    height={80}
                                    className="object-cover rounded-[14px]"
                                    priority
                                />
                            </div>
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight mb-3 text-white">
                            {dict.title}
                        </h1>

                        <p className="text-zinc-400 mb-8 text-center leading-relaxed text-base">
                            {dict.description.replace('{name}', inviteId || '...')}
                        </p>

                        <div className="w-full space-y-4">
                            <Button
                                size="lg"
                                className="w-full h-14 text-lg font-bold rounded-xl bg-white text-black hover:bg-zinc-200 active:scale-[0.98] transition-all"
                                onClick={() => {
                                    if (inviteId) {
                                        window.location.href = `twosec://friends?inviteId=${inviteId}`;
                                    }
                                }}
                            >
                                {dict.openApp}
                            </Button>

                            <p className={`text-zinc-500 text-center text-xs min-h-[16px]`}>
                                {isAttemptingOpen ? dict.autoOpening : dict.fallbackMessage}
                            </p>
                        </div>

                        {/* App Store Section */}
                        <div className="mt-10 w-full pt-8 border-t border-white/5 flex flex-col items-center">
                            <p className="text-xs font-medium text-zinc-500 mb-4">
                                {dict.notInstalled}
                            </p>
                            <a
                                href="https://apps.apple.com/jp/app/2sec/id6755941014"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block transition-transform hover:scale-105 active:scale-95"
                            >
                                <NextImage
                                    src="/apple-badge.svg"
                                    alt="Download on the App Store"
                                    width={135}
                                    height={45}
                                    className="h-10 w-auto"
                                    priority
                                />
                            </a>
                        </div>
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
                <div className="w-6 h-6 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
        }>
            <FriendsPageContent dict={dict} />
        </Suspense>
    );
}
