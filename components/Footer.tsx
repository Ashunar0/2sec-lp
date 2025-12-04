'use client';

const Footer = ({ dict }: { dict: any }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-white text-sm">
      {dict.copyright.replace('{year}', year.toString())}
    </footer>
  );
};

export default Footer;

