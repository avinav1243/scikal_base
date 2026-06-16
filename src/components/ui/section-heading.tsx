import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

/** Reusable eyebrow + title + description block for section headers. */
export function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  eyebrowIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Badge icon={eyebrowIcon}>{eyebrow}</Badge>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.65rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
