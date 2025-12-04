"use client";

import { Section } from "@/components/ui/section";
import { ArrowUpRight, FileText, Mail, Shield } from "lucide-react";
import Link from "next/link";

import { Dictionary } from '@/types/dictionary';

export default function Information({ dict }: { dict: Dictionary['information'] }) {
  return (
    <Section className="py-8 md:py-12 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="grid gap-8 md:grid-cols-[200px_1fr]">
        <div>
          <h2 className="text-xs font-mono text-accent tracking-wider uppercase mb-2">
            {dict.title}
          </h2>
          <p className="text-[10px] text-zinc-500">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Support */}
          <div className="group flex flex-col gap-2 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 hover:shadow-[0_0_20px_rgba(243,253,83,0.1)]">
            <div className="flex items-center gap-2 text-zinc-400 group-hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[10px] font-bold uppercase tracking-wider">{dict.support.label}</span>
            </div>
            <h3 className="text-xs font-medium text-zinc-200">
              {dict.support.title}
            </h3>
            <p className="text-[10px] text-zinc-500 leading-relaxed">
              {dict.support.description}
            </p>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScecYKRKGDDQ_11mCJaAPHHBdQ6wBtj6kjK9F3iRswgRf5MiQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-2 flex items-center gap-1 text-[10px] text-white hover:text-accent transition-colors w-fit group/link"
            >
              {dict.support.link} <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Terms */}
          <div className="group flex flex-col gap-2 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 hover:shadow-[0_0_20px_rgba(243,253,83,0.1)]">
            <div className="flex items-center gap-2 text-zinc-400 group-hover:text-accent transition-colors">
              <FileText className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[10px] font-bold uppercase tracking-wider">{dict.terms.label}</span>
            </div>
            <h3 className="text-xs font-medium text-zinc-200">
              {dict.terms.title}
            </h3>
            <p className="text-[10px] text-zinc-500 leading-relaxed">
              {dict.terms.description}
            </p>
            <Link
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-2 flex items-center gap-1 text-[10px] text-white hover:text-accent transition-colors w-fit group/link"
            >
              {dict.terms.link} <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Privacy */}
          <div className="group flex flex-col gap-2 p-3 rounded-lg hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10 hover:shadow-[0_0_20px_rgba(243,253,83,0.1)]">
            <div className="flex items-center gap-2 text-zinc-400 group-hover:text-accent transition-colors">
              <Shield className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[10px] font-bold uppercase tracking-wider">{dict.privacy.label}</span>
            </div>
            <h3 className="text-xs font-medium text-zinc-200">
              {dict.privacy.title}
            </h3>
            <p className="text-[10px] text-zinc-500 leading-relaxed">
              {dict.privacy.description}
            </p>
            <Link
              href="/privacy"
              className="mt-auto pt-2 flex items-center gap-1 text-[10px] text-white hover:text-accent transition-colors w-fit group/link"
            >
              {dict.privacy.link} <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
