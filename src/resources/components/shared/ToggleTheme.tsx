import useTheme from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui";

const ToggleTheme = ({ className }: { className?: string }) => {
  const { handleTheme, theme } = useTheme();

  return (
    <Button
      size="sm"
      variant="ghost"
      className={cn(className, "h-10 w-10 rounded-none border-r")}
      onClick={() => handleTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
    </Button>
  );
};

export default ToggleTheme;
