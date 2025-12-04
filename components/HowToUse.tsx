"use client";

import { motion } from "framer-motion";



import { Dictionary } from "@/types/dictionary";

export default function HowToUse({ dict }: { dict: Dictionary['howToUse'] }) {
  return (
    <section id="how-to-use" className="py-32 px-4 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          {dict.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 text-center mb-16"
          style={{ textTransform: "none" }}
        >
          {dict.subtitle}
        </motion.p>

        <div className="space-y-24">
          {dict.steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="shrink-0">
                <span className="text-8xl font-bold text-white/15 font-mono drop-shadow-lg">
                  {step.id}
                </span>
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  {step.description}
                </p>
                {step.detail && (
                  <p className="text-sm text-gray-500">{step.detail}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
