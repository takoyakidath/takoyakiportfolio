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
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        backgroundColor: "#f8f8f2",
        color: "#242b25",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 28 }}>
        {/* biome-ignore lint/performance/noImgElement: ImageResponse renders a static image and requires native image elements. */}
        <img
          src={iconSrc}
          alt=""
          width={88}
          height={88}
          style={{ borderRadius: "50%", marginRight: 24 }}
        />
        <div style={{ display: "flex", fontSize: 26, color: "#646a61" }}>
          takoyakidath / Software Engineer
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 98,
          fontWeight: 600,
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
          color: "#315841",
          marginTop: 28,
        }}
      >
        Turning curiosity into creation.
      </div>
    </div>,
    { ...size },
  );
}
