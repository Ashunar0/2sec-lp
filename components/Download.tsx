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

        <AnimatePresence>
          {showAndroidSteps && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mt-16 max-w-2xl mx-auto text-left bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative"
            >
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

              <h3 className="text-3xl font-bold mb-10 tracking-tight text-white flex items-center gap-3">
                <CheckCircle2 className="text-accent" size={28} />
                {dict.android.installTitle}
              </h3>

              <div className="space-y-12">
                {/* Step 0: Primary Action Card */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-transparent rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-500" />
                  <div className="relative bg-black/40 border border-white/5 rounded-[1.8rem] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-1 text-center md:text-left">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-accent/60 mb-2 block">Step 0</span>
                      <h4 className="text-xl font-bold text-white">APKファイルのダウンロード</h4>
                      <p className="text-sm text-zinc-500 mt-1 leading-relaxed">
                        まずは最新のパッケージを端末に取得します。
                      </p>
                    </div>
                    <a
                      href={dict.android.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto px-10 py-4 bg-accent text-black rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(243,253,83,0.2)]"
                    >
                      APKをダウンロード
                    </a>
                  </div>
                </div>

                {/* Manual Steps */}
                <div className="space-y-8 pl-2">
                  {dict.android.steps.map((step, index) => (
                    <div key={index} className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800/50 border border-white/10 flex items-center justify-center text-accent font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-zinc-400 text-[1.05rem] leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 text-center">
                <p className="text-[11px] text-zinc-600 leading-relaxed max-w-md mx-auto italic">
                  ※ 現在Android版はプレビュー配信のため、直接APKファイルをインストールしていただく形式となります。近日中にGoogle Playストアでも公開予定です。
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
