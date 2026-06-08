import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Ryunosuke Yoda (依田隆之介) - Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const icon = await readFile(join(process.cwd(), "public", "takoyaki.png"));
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          backgroundColor: "#111827",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img
            src={iconSrc}
            alt=""
            width={88}
            height={88}
            style={{ borderRadius: "50%", marginRight: 24 }}
          />
          <div style={{ display: "flex", fontSize: 32, color: "#9ca3af" }}>
            takoyakidath / Software Engineer
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 124,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Ryunosuke Yoda
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 38,
            color: "#9ca3af",
            marginTop: 28,
          }}
        >
          Portfolio - Projects, Skills &amp; Career
        </div>
      </div>
    ),
    { ...size },
  );
}
