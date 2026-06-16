import { cn } from "@/lib/utils";

/** Centered, responsive content container with consistent gutters. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full px-8 sm:px-12 lg:px-18", className)}>
      {children}
    </div>
  );
}
