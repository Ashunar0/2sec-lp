import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden border border-accent">
        <Image src="/4-Layer.png" alt="2sec Logo" width={32} height={32} className="object-cover" />
      </div>
      <span className="font-bold text-xl tracking-tighter">2sec</span>
    </Link>
  );
};
