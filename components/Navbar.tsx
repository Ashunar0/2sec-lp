import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import Link from "next/link";

const Navbar = ({ lang = 'ja' }: { lang?: string }) => {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-black/50 backdrop-blur-md border border-white/10 max-w-7xl mx-auto rounded-full z-50">
      <div className="h-full flex items-center justify-between mx-auto px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Link href={lang === 'en' ? '/ja' : '/en'} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            {lang === 'en' ? 'JP' : 'EN'}
          </Link>
          <Link
            href="https://apps.apple.com/jp/app/2sec/id6755941014"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="cursor-pointer rounded-full bg-white text-black hover:bg-accent hover:text-black font-bold transition-colors duration-300">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
