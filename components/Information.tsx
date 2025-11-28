"use client";

import { Section } from "@/components/ui/section";
import { ArrowUpRight, FileText, Mail, Shield } from "lucide-react";
import Link from "next/link";

export default function Information() {
  return (
    <Section className="py-8 md:py-12 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="grid gap-8 md:grid-cols-[200px_1fr]">
        <div>
          <h2 className="text-xs font-mono text-accent tracking-wider uppercase mb-2">
            Information
          </h2>
          <p className="text-[10px] text-zinc-500">
            法的情報とサポート
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Support */}
          <div className="group flex flex-col gap-2 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 hover:shadow-[0_0_20px_rgba(243,253,83,0.1)]">
            <div className="flex items-center gap-2 text-zinc-400 group-hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Support</span>
            </div>
            <h3 className="text-xs font-medium text-zinc-200">
              サポート / お問い合わせ
            </h3>
            <p className="text-[10px] text-zinc-500 leading-relaxed">
              アプリの不具合やご要望は、以下のフォームよりご連絡ください。
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScecYKRKGDDQ_11mCJaAPHHBdQ6wBtj6kjK9F3iRswgRf5MiQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-2 flex items-center gap-1 text-[10px] text-white hover:text-accent transition-colors w-fit group/link"
            >
              フォームを開く <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Terms */}
          <div className="group flex flex-col gap-2 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 hover:shadow-[0_0_20px_rgba(243,253,83,0.1)]">
            <div className="flex items-center gap-2 text-zinc-400 group-hover:text-accent transition-colors">
              <FileText className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Terms</span>
            </div>
            <h3 className="text-xs font-medium text-zinc-200">
              利用規約
            </h3>
            <p className="text-[10px] text-zinc-500 leading-relaxed">
              本アプリの利用規約をご確認いただけます。
            </p>
            <Link
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-2 flex items-center gap-1 text-[10px] text-white hover:text-accent transition-colors w-fit group/link"
            >
              規約を読む <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Privacy */}
          <div className="group flex flex-col gap-2 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 hover:shadow-[0_0_20px_rgba(243,253,83,0.1)]">
            <div className="flex items-center gap-2 text-zinc-400 group-hover:text-accent transition-colors">
              <Shield className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Privacy</span>
            </div>
            <h3 className="text-xs font-medium text-zinc-200">
              プライバシーポリシー
            </h3>
            <p className="text-[10px] text-zinc-500 leading-relaxed">
              プライバシーポリシーはこちら
            </p>
            <Link
              href="/privacy"
              className="mt-auto pt-2 flex items-center gap-1 text-[10px] text-white hover:text-accent transition-colors w-fit group/link"
            >
              ポリシーを読む <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
