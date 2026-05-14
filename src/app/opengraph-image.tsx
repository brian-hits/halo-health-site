import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Halo Health — Quiet food noise, for good. Personalized GLP-1 weight management, 100% online.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const root = process.cwd();
  const [serif, serifXTall, logoSvg, bgJpg] = await Promise.all([
    readFile(join(root, "public/fonts/awesome-serif.otf")),
    readFile(join(root, "public/fonts/awesome-serif-xtall.otf")),
    readFile(join(root, "public/brand/halo-logo-white.svg")),
    readFile(join(root, "public/figma/halo_background2__64d1f48f.jpg")),
  ]);

  const logoDataUri = `data:image/svg+xml;base64,${logoSvg.toString("base64")}`;
  const bgDataUri = `data:image/jpeg;base64,${bgJpg.toString("base64")}`;

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
          backgroundColor: "#100021",
          backgroundImage: `url(${bgDataUri})`,
          backgroundSize: "1200px 1200px",
          backgroundPosition: "center",
          fontFamily: "Awesome Serif",
          padding: "80px",
        }}
      >
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUri} alt="Halo Health" width={150} height={66} />

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "56px",
            fontSize: "92px",
            lineHeight: 1.0,
            letterSpacing: "-2px",
            color: "#ffffff",
          }}
        >
          <span>Quiet food noise,</span>
          <span style={{ fontFamily: "Awesome Serif XTall" }}>for good.</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: "40px",
            fontSize: "30px",
            letterSpacing: "-0.5px",
            color: "rgba(255,255,255,0.72)",
          }}
        >
          Personalized GLP-1 weight management · 100% online
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Awesome Serif", data: serif, weight: 400, style: "normal" },
        {
          name: "Awesome Serif XTall",
          data: serifXTall,
          weight: 500,
          style: "normal",
        },
      ],
    },
  );
}
