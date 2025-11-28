'use client';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-white text-sm">
      &copy; {year} 2sec. All rights reserved.
    </footer>
  );
};

export default Footer;

