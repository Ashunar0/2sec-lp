import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2sec - The Simplest Life Log Camera",
  description: "1日を「2秒」で残す。一番シンプルなライフログカメラ。",
  icons: {
    icon: "/icon.svg",
  },
};

import Navbar from "@/components/Navbar";

// ...

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={cn(
          notoSansJP.className,
          "bg-black text-white antialiased"
        )}
        suppressHydrationWarning={true}
      >
        <Navbar lang={lang} />
        {children}
      </body>
    </html>
  );
}
