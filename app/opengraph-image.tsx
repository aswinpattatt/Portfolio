import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aswin P Ajayan — Data Science & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#050505",
          color: "#f2ece4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#2dd4bf",
            marginBottom: 24,
          }}
        >
          Data Science & AI · GenAI · AI Engineering
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, marginBottom: 24 }}>
          Aswin P Ajayan
        </div>
        <div style={{ fontSize: 32, color: "#a89c8f", maxWidth: 900 }}>
          I build data-driven and AI-powered solutions that turn complex
          business problems into practical systems.
        </div>
      </div>
    ),
    { ...size }
  );
}