import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#1D9E75",
          borderRadius: 9,
          display: "flex",
          height: "32px",
          justifyContent: "center",
          position: "relative",
          width: "32px",
        }}
      >
        <div
          style={{
            background: "white",
            clipPath:
              "polygon(50% 0%, 83% 12%, 83% 45%, 78% 60%, 66% 76%, 50% 91%, 34% 76%, 22% 60%, 17% 45%, 17% 12%)",
            height: 22,
            position: "absolute",
            width: 18,
          }}
        />
        <div
          style={{
            background: "#1D9E75",
            clipPath:
              "polygon(50% 0%, 83% 12%, 83% 45%, 78% 60%, 66% 76%, 50% 91%, 34% 76%, 22% 60%, 17% 45%, 17% 12%)",
            height: 17,
            position: "absolute",
            width: 13,
          }}
        />
        <div
          style={{
            color: "white",
            fontFamily: "Arial, sans-serif",
            fontSize: 4.8,
            fontWeight: 700,
            letterSpacing: "-0.1px",
            lineHeight: 1,
            marginTop: -2,
            position: "absolute",
          }}
        >
          JO
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
