'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Dictionary } from '@/types/dictionary';

const Footer = ({ dict }: { dict: Dictionary['footer'] }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 flex flex-col items-center gap-4 text-center text-white text-sm">
      <Link href="/" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" aria-label="2sec トップへ">
        <Image
          src="/2sec_logo.png"
          alt=""
          width={100}
          height={34}
          className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          aria-hidden
        />
      </Link>
      <p>{dict.copyright.replace('{year}', year.toString())}</p>
    </footer>
  );
};

export default Footer;

