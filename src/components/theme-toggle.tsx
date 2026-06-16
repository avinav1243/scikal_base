"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;

    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Render a stable placeholder until hydration completes
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        title="Toggle theme"
        disabled
        className={cn(
          "relative inline-flex h-9 w-9 items-center justify-center rounded-full",
          "border border-border bg-card/60 text-foreground/80",
          className,
        )}
      >
        <span className="h-[1.05rem] w-[1.05rem]" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title="Toggle theme"
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full",
        "border border-border bg-card/60 text-foreground/80 transition-colors",
        "hover:bg-accent hover:text-foreground",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-background",
        className,
      )}
    >
      <Sun
        className={cn(
          "h-[1.05rem] w-[1.05rem] transition-all duration-300",
          isDark
            ? "scale-0 -rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100",
        )}
      />

      <Moon
        className={cn(
          "absolute h-[1.05rem] w-[1.05rem] transition-all duration-300",
          isDark
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 rotate-90 opacity-0",
        )}
      />
    </button>
  );
}
