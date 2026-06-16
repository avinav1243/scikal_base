import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import logoLight from "../../../public/brand/scikal-logo.png";
import logoDark from "../../../public/brand/scikal-logo-dark.png";

/**
 * SciKal logo — the official cyan "infinity ribbon" mark + "scikāl" wordmark.
 * Two variants are rendered and toggled purely with CSS so there is no
 * hydration flash: the full-colour (navy wordmark) version for light themes,
 * and a light-wordmark version for the matte-black dark theme.
 */
export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={cn("inline-flex items-center", className)}
      aria-label={siteConfig.name}
    >
      <Image
        src={logoLight}
        alt={`${siteConfig.name} logo`}
        priority={priority}
        className="h-9 w-auto dark:hidden"
        sizes="180px"
      />
      <Image
        src={logoDark}
        alt={`${siteConfig.name} logo`}
        priority={priority}
        aria-hidden
        className="hidden h-9 w-auto dark:block"
        sizes="160px"
      />
    </span>
  );
}
