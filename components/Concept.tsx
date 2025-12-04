'use client';

import { motion } from 'framer-motion';

export default function Concept() {
  return (
    <section className="w-full bg-black py-20 md:py-32 px-4 flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold leading-tight tracking-tight"
        >
          旅先で撮った長い動画，見返していますか？
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
    </section>
  );
}
