'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Download({ dict }: { dict: any }) {
  return (
    <section className="py-32 px-4 text-center relative overflow-hidden">
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
        
        <motion.a
          href="https://apps.apple.com/us/app/2sec/id6755941014"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-accent transition-colors duration-300"
        >
          {dict.button}
          <ArrowRight size={24} />
        </motion.a>
        
        <p className="mt-8 text-sm text-gray-600">
          {dict.note}
        </p>
      </motion.div>
    </section>
  );
}
