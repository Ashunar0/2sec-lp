import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

// Simplified for now as we don't have the full Sheet component setup
export const NavigationSheet = () => {
  return (
    <Button variant="ghost" size="icon" className="md:hidden">
      <Menu className="h-5 w-5" />
    </Button>
  );
};
