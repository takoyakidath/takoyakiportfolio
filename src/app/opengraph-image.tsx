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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111827",
          color: "#ffffff",
        }}
      >
        <img
          src={iconSrc}
          width={200}
          height={200}
          style={{ borderRadius: "50%", marginBottom: 40 }}
        />
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
          Ryunosuke Yoda
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#9ca3af", marginTop: 16 }}>
          Software Engineer / takoyakidath
        </div>
      </div>
    ),
    { ...size },
  );
}
