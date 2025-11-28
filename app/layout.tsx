import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2sec - The Simplest Life Log Camera",
  description: "1日を「2秒」で残す。一番シンプルなライフログカメラ。",
};

import Navbar from "@/components/Navbar";

// ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark scroll-smooth">
      <body
        className={cn(
          inter.className,
          notoSansJP.className,
          "bg-black text-white antialiased"
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
