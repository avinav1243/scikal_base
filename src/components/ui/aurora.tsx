import { cn } from "@/lib/utils";

/**
 * Decorative animated gradient "aurora" blobs + grid backdrop. Purely
 * presentational and aria-hidden. Sits behind content (negative z-index).
 */
export function Aurora({
  className,
  grid = true,
}: {
  className?: string;
  grid?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      {grid && (
        <div className="absolute inset-0 bg-grid mask-radial opacity-60" />
      )}
      <div className="absolute -left-24 top-[-10%] h-[36rem] w-[36rem] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,var(--glow-violet),transparent_60%)] blur-2xl" />
      <div
        className="absolute -right-24 top-[10%] h-[34rem] w-[34rem] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,var(--glow-blue),transparent_60%)] blur-2xl"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="absolute bottom-[-20%] left-1/3 h-[30rem] w-[30rem] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,var(--glow-violet),transparent_65%)] blur-2xl opacity-70"
        style={{ animationDelay: "-16s" }}
      />
    </div>
  );
}
