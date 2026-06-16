import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "brand" | "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:shrink-0";

const variants: Record<Variant, string> = {
  brand:
    "bg-brand text-white shadow-glow hover:brightness-110 hover:-translate-y-0.5",
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-sm",
  secondary:
    "bg-foreground text-background hover:bg-foreground/90 hover:-translate-y-0.5",
  outline:
    "border border-border bg-card/50 text-foreground hover:bg-accent hover:border-foreground/20",
  ghost: "text-foreground/80 hover:bg-accent hover:text-foreground",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm [&_svg]:size-4",
  md: "h-11 px-5 text-sm [&_svg]:size-4",
  lg: "h-12 px-7 text-base [&_svg]:size-5",
};

export function buttonVariants({
  variant = "brand",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ className, variant, size, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  },
);
