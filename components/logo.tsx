import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
        <span className="font-bold text-black text-xs">2s</span>
      </div>
      <span className="font-bold text-xl tracking-tighter">2sec</span>
    </Link>
  );
};
