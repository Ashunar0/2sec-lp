'use client';

import { motion } from 'framer-motion';
import NextImage from 'next/image';

export default function Concept() {
  return (
    <section className="w-full bg-black py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <div className="space-y-12 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold leading-tight tracking-tight"
          >
            旅先で撮った長い動画，<br className="hidden md:block" />見返していますか？
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed"
          >
            <p>
              撮りっぱなしで眠っている動画たち。<br />
              録画停止ボタンを押す手間。
            </p>
            <p>
              <span className="text-accent font-medium">2sec</span>は，そんな悩みから生まれた<br />
              「<span className="text-white font-medium">2秒間だけ</span>」を切り取るカメラアプリです。
            </p>
          </motion.div>
        </div>

        {/* Image Column */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
        >
            <div className="relative w-full max-w-[800px] h-[800px] md:h-[1000px]">
                 <NextImage 
                    src="/mpck4.svg" 
                    alt="2sec App Concept" 
                    fill
                    className="object-contain drop-shadow-[0_0_50px_rgba(243,253,83,0.1)]"
                 />
            </div>
        </motion.div>
      </div>
    </section>
  );
}
