import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ONLY 3 LEFT™ — A field guide to deceptive UX";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default async function Image() {
  const inter = await fetch(
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0b0b",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#ffe44d",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 80px",
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              color: "#f5f5f5",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            ONLY 3 LEFT™
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 36,
              fontWeight: 700,
              color: "#ffe44d",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            A field guide to deceptive UX
          </div>
          <div
            style={{
              marginTop: 48,
              fontSize: 20,
              color: "#888888",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
            }}
          >
            An interactive catalogue of manipulative interface patterns
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#ffe44d",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Inter",
          data: inter,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
