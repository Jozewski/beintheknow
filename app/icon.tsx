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
        <svg
          width="25"
          height="25"
          viewBox="0 0 32 32"
          style={{
            position: "absolute",
          }}
        >
          <path
            d="M16 4.1 26.5 7.8v7.2c0 5.3-4.2 9.9-10.5 13-6.3-3.1-10.5-7.7-10.5-13V7.8L16 4.1Z"
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    },
  );
}
