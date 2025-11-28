"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export function Section({ children, className, id, delay = 0 }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full px-6 py-16 md:py-24 lg:py-32 overflow-hidden",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        className="mx-auto max-w-5xl"
      >
        {children}
      </motion.div>
    </section>
  );
}
