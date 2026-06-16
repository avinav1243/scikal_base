import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type MediaFrameProps = {
  src: ImageProps["src"];
  alt: string;
  /**
   * How the image relates to its background:
   * - `"photo"`  — edge-to-edge `object-cover`. For photographs and figures
   *   that already carry their own (usually dark) background, so they look
   *   correct on both light and dark themes.
   * - `"figure"` — placed on a constant white "lab mat" with padding and
   *   `object-contain`. For scientific diagrams authored on a white background:
   *   the mat keeps them legible and intentional on the matte-black dark theme
   *   instead of rendering as a harsh white block.
   */
  tone?: "photo" | "figure";
  /** Frame sizing / aspect ratio (e.g. `aspect-[4/3]`). */
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Fade the foot of the image into the page background (for overlaid text). */
  overlay?: boolean;
  /** Floating content rendered above the media (badges, captions, …). */
  children?: React.ReactNode;
};

/**
 * Themed, rounded image frame. Centralises how imagery is presented so every
 * picture on the site reads correctly in both light and dark mode — the border,
 * elevation and (optional) overlay all follow the active theme, while
 * white-background figures sit on a constant mat so they never clash with the
 * dark surface.
 */
export function MediaFrame({
  src,
  alt,
  tone = "photo",
  className,
  imageClassName,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  overlay = false,
  children,
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-3xl border border-border shadow-glow",
        tone === "figure" ? "bg-white" : "bg-card",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          tone === "photo"
            ? "object-cover"
            : "object-contain p-4 sm:p-6",
          imageClassName,
        )}
      />

      {/* Foot-fade so headings/badges placed over a photo stay legible. */}
      {overlay && tone === "photo" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/15 to-transparent"
        />
      )}

      {/* Crisp top hairline that reads on either theme. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
      />

      {children}
    </div>
  );
}
