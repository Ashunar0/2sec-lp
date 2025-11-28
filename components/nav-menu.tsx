import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-to-use", label: "How to Use" },
];

export const NavMenu = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-10", className)}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};
