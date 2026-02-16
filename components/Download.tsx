'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

import { Dictionary } from '@/types/dictionary';

export default function Download({ dict }: { dict: Dictionary['download'] }) {
  const [showAndroidSteps, setShowAndroidSteps] = useState(false);

  return (
    <section id="download" className="py-32 px-4 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter" dangerouslySetInnerHTML={{ __html: dict.title }} />
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: dict.description }} />

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* iOS Button */}
          <div className="flex flex-col items-center">
            <motion.a
              href="https://apps.apple.com/jp/app/2sec/id6755941014"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-accent transition-colors duration-300"
            >
              {dict.ios.button}
            </motion.a>
            <p className="mt-3 text-sm text-gray-500">{dict.ios.note}</p>
          </div>

          {/* Android Button / Toggle */}
          <div className="flex flex-col items-center">
            <motion.button
              onClick={() => setShowAndroidSteps(!showAndroidSteps)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-zinc-700 transition-colors duration-300"
            >
              {dict.android.button}
              <ChevronDown
                size={20}
                className={`transition-transform duration-300 ${showAndroidSteps ? 'rotate-180' : ''}`}
              />
            </motion.button>
            <p className="mt-3 text-sm text-gray-500">{dict.android.note}</p>
          </div>
        </div>

        {/* Android Instructions Section */}
        <AnimatePresence>
          {showAndroidSteps && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-12 max-w-xl mx-auto text-left bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="text-accent" size={24} />
                  {dict.android.installTitle}
                </h3>

                {/* APK Download Link */}
                <div className="mb-8 p-6 bg-accent/10 border border-accent/20 rounded-2xl flex flex-col items-center gap-4">
                  <p className="text-sm font-medium text-accent">Step 0: APKファイルをダウンロード</p>
                  <a
                    href={dict.android.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-accent text-black py-4 rounded-xl font-extrabold text-xl hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(243,253,83,0.3)]"
                  >
                    APKをダウンロード
                  </a>
                  <p className="text-[10px] text-accent/60">※ ダウンロード後、以下の手順でインストールしてください</p>
                </div>

                <div className="space-y-4">
                  {dict.android.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                        {index + 1}
                      </span>
                      <p className="text-gray-300 pt-1">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-accent/5 border border-accent/10 rounded-2xl">
                  <p className="text-xs text-accent/70 leading-relaxed text-center">
                    ※ 現在Android版はプレビュー配信のため、直接APKファイルをインストールしていただく形式となります。近日中にGoogle Playストアでも公開予定です。
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
