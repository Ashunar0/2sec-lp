'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import NextImage from 'next/image';

import { Dictionary } from '@/types/dictionary';

export default function Hero({ dict }: { dict: Dictionary['hero'] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black pt-40 pb-40">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        style={{ y, opacity }} 
        className="relative z-10 text-center px-4 flex flex-col items-center mt-10 md:mt-20"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none mb-4"
        >
          {dict.title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-6"
        >
          <NextImage
            src="/2sec_logo.png"
            alt=""
            width={200}
            height={80}
            className="h-16 w-auto object-contain md:h-20 drop-shadow-[0_0_24px_rgba(243,253,83,0.12)]"
            priority
            aria-hidden
          />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-3xl font-light text-gray-300 tracking-wide mb-8"
          dangerouslySetInnerHTML={{ __html: dict.subtitle }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block mb-12"
        >
           <p className="text-sm text-gray-500 tracking-widest uppercase">{dict.caption}</p>
        </motion.div>

        {/* Mockups Composition */}
        <div className="relative w-full max-w-[1000px] h-[300px] md:h-[500px] perspective-[2000px] mt-12 md:mt-20">
          {/* Center Phone */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[200px] md:w-[300px] z-20"
          >
             <motion.div
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             >
               <NextImage src="/mock4.svg" alt="App Screen" width={300} height={600} className="drop-shadow-[0_0_50px_rgba(243,253,83,0.2)]" />
             </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-accent to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
