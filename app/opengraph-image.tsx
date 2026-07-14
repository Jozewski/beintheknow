import { ImageResponse } from "next/og";

// Social share card ("thumbnail") shown when a link to the site is shared
// on messaging apps and social networks. Generated at build time.

export const alt =
  "Be In The Know - Just Ask JO. Know Your Rights. Protect Your Future.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
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
          background: "linear-gradient(135deg, #060C18, #085041)",
          color: "#FFFFFF",
        }}
      >
        {/* JO shield mark (mirrors public/jo-logo.svg). The "JO" label is
            an HTML layer because the OG renderer (Satori) does not support
            SVG <text> nodes. */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            width: 148,
            height: 148,
            borderRadius: 36,
            background: "#1D9E75",
            marginBottom: 40,
          }}
        >
          <svg
            width="112"
            height="112"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48 18.5 75 28v18.5c0 16-11.1 29.6-27 37-15.9-7.4-27-21-27-37V28l27-9.5Z"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: 0,
              left: 0,
              width: 148,
              height: 148,
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 10,
              fontSize: 26,
              fontWeight: 700,
              color: "#FFFFFF",
            }}
          >
            JO
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-1.5px",
          }}
        >
          Be In The Know
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 38,
            fontWeight: 500,
            color: "#9FE1CB",
          }}
        >
          Know Your Rights. Protect Your Future.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            padding: "14px 34px",
            borderRadius: 999,
            background: "rgba(255, 255, 255, 0.10)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            fontSize: 26,
            color: "#E1F5EE",
          }}
        >
          Free plain-English rights education, state by state - Just Ask JO
        </div>
      </div>
    ),
    { ...size },
  );
}
