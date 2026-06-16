import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Embed the real (light-wordmark) logo so the OG card is fully on-brand.
const logoData = readFileSync(
  join(process.cwd(), "public", "brand", "scikal-logo-dark.png"),
);
const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(900px 520px at 16% -5%, rgba(21,182,229,0.40), transparent 60%), radial-gradient(900px 520px at 100% 105%, rgba(0,72,144,0.55), transparent 60%), #0a0a0a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Real logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={300} height={136} alt="" />

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "66px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "960px",
            }}
          >
            Accelerating science for a healthier tomorrow
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              color: "rgba(237,237,237,0.72)",
              maxWidth: "840px",
            }}
          >
            Behavioural-neuroscience instruments, computation &amp; solutions.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: "24px",
            color: "rgba(237,237,237,0.85)",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "8px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            scikal.com
          </div>
          <span style={{ color: "rgba(237,237,237,0.6)" }}>
            Scientists building for scientists.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
