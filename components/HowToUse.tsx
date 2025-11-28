"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "撮影する",
    description:
      "メイン画面の上半分（外カメ）か下半分（内カメ）をタップ。2秒のカウントダウン後に撮影開始。2秒経てば自動で終わります。",
    detail: "撮り直しも、削除も、プレビューからワンタップで。",
  },
  {
    id: "02",
    title: "エクスポート",
    description:
      "通常は翌日の通知を待ちますが、「今すぐまとめたい」時も大丈夫。ホーム画面右上のアイコンから、その時点での「今日のまとめ動画」をすぐに作成・保存できます。",
    detail: "",
  },
  {
    id: "03",
    title: "過去の動画",
    description:
      "動画はアプリ内に7日間保存されます。「あの日の動画を保存し忘れた」と思っても、6日前までなら日付を選択してエクスポート可能です。",
    detail: "",
  },
];

export default function HowToUse() {
  return (
    <section className="py-32 px-4 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          How to Use
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 text-center mb-16"
        >
          2secの使い方
        </motion.p>

        <div className="space-y-24">
          {steps.map((step, index) => (
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
