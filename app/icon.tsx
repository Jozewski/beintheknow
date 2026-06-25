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
          background: "#085041",
          clipPath: "polygon(50% 0%, 88% 13%, 84% 62%, 50% 100%, 16% 62%, 12% 13%)",
          color: "#9FE1CB",
          display: "flex",
          fontSize: 11,
          fontWeight: 600,
          height: "32px",
          justifyContent: "center",
          letterSpacing: "-0.02em",
          width: "32px",
        }}
      >
        JO
      </div>
    ),
    {
      ...size,
    },
  );
}
