"use client";

import { motion } from "framer-motion";
import { Smartphone, Bell, Clock } from "lucide-react";

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

export default function Features() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium tracking-[0.3em] uppercase text-gray-400 text-center mb-16"
        >
          2secの特徴
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Split UI */}
          <FeatureItem
            title="迷わず撮れる「上下分割」"
            description="アプリを開けば、そこが撮影スタジオ。上半分で外カメラ、下半分で内カメラ。複雑な設定は一切ありません。"
            icon={Smartphone}
            delay={0}
          >
            <div className="w-full h-48 bg-black border border-white/20 rounded-xl relative overflow-hidden flex flex-col">
              <div className="flex-1 bg-gray-900 flex items-center justify-center border-b border-white/10">
                <span className="text-xs text-gray-500">TAP TOP (OUT)</span>
              </div>
              <div className="flex-1 bg-gray-800 flex items-center justify-center">
                <span className="text-xs text-gray-500">TAP BOTTOM (IN)</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-full h-px bg-accent/50 box-shadow-[0_0_10px_rgba(243,253,83,0.5)]"></div>
              </div>
            </div>
          </FeatureItem>

          {/* Feature 2: Notification */}
          <FeatureItem
            title="翌日0:10のお楽しみ"
            description="今日撮ったクリップは、翌日の0:10に自動で1本の動画に。「動画の準備ができました！」の通知が、昨日のハイライトを楽しむ合図です。"
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
                  動画の準備ができました！
                </p>
                <p className="text-[10px] text-gray-500 mt-1">
                  昨日の思い出を見返しましょう。
                </p>
              </div>
            </div>
          </FeatureItem>

          {/* Feature 3: Efficiency */}
          <FeatureItem
            title="「見返せる」長さに"
            description="1日に30回撮影しても、できあがる動画はたったの「1分」。移動中や休憩時間にサクッと見返せる。それが2secの体験です。"
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
                <p className="text-xs text-gray-500 mt-2">30 clips / day</p>
              </div>
            </div>
          </FeatureItem>
        </div>
      </div>
    </section>
  );
}
