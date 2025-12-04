"use client";

import { motion } from "framer-motion";
import { Smartphone, Bell, Clock } from "lucide-react";
import Image from "next/image";

const FeatureItem = ({
  title,
  description,
  icon: Icon,
  delay,
  children,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  delay: number;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center text-center p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
    >
      <div className="p-4 rounded-full bg-accent/10 mb-6 text-accent">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed mb-6">{description}</p>
      {children}
    </motion.div>
  );
};

export default function Features({ dict }: { dict: any }) {
  return (
    <section id="features" className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
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
          className="text-sm font-medium tracking-[0.3em] uppercase text-gray-400 text-center mb-16"
          style={{ textTransform: "none" }}
        >
          {dict.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Split UI */}
          <FeatureItem
            title={dict.items.split.title}
            description={dict.items.split.description}
            icon={Smartphone}
            delay={0}
          >
            <div className="w-full flex items-center justify-center">
              <Image
                src="/mock1.svg"
                alt="2sec split camera UI"
                width={360}
                height={360}
                className="w-full max-w-xs md:max-w-sm drop-shadow-[0_0_40px_rgba(243,253,83,0.25)] h-[240px]"
                priority
              />
            </div>
          </FeatureItem>

          {/* Feature 2: Notification */}
          <FeatureItem
            title={dict.items.notification.title}
            description={dict.items.notification.description}
            icon={Bell}
            delay={0.2}
          >
            <div className="w-full h-48 flex items-center justify-center">
              <div className="bg-gray-900 border border-white/10 rounded-xl p-4 w-full max-w-[240px] shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-5 h-5 rounded bg-accent"></div>
                  <span className="text-xs font-bold text-white">2sec</span>
                  <span className="text-[10px] text-gray-500 ml-auto">
                    0:10
                  </span>
                </div>
                <p className="text-xs text-gray-300">
                  {dict.items.notification.mock.title}
                </p>
                <p className="text-[10px] text-gray-500 mt-1">
                  {dict.items.notification.mock.subtitle}
                </p>
              </div>
            </div>
          </FeatureItem>

          {/* Feature 3: Efficiency */}
          <FeatureItem
            title={dict.items.efficiency.title}
            description={dict.items.efficiency.description}
            icon={Clock}
            delay={0.4}
          >
            <div className="w-full h-48 flex items-center justify-center relative">
              <div className="text-center">
                <span className="text-5xl font-bold text-accent glow-text">
                  1
                </span>
                <span className="text-xl text-white ml-2">min</span>
                <div className="w-full h-1 bg-gray-800 mt-4 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                    className="h-full bg-accent"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">{dict.items.efficiency.mock.clips}</p>
              </div>
            </div>
          </FeatureItem>
        </div>
      </div>
    </section>
  );
}
