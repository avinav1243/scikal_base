import { cn } from "@/lib/utils";

/** Small pill used for eyebrow labels / section tags. */
export function Badge({
  className,
  children,
  icon,
}: {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground backdrop-blur",
        className,
      )}
    >
      {icon && <span className="text-primary [&_svg]:size-3.5">{icon}</span>}
      {children}
    </span>
  );
}
