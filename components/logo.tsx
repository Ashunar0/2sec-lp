import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
        <Image src="/icon.png" alt="2sec Logo" width={30} height={30} className="rounded-lg" />
      </div>
      <span className="font-bold text-xl tracking-tighter">2sec</span>
    </Link>
  );
};
