export function JoLogo() {
  return (
    <span className="relative flex size-8 shrink-0 items-center justify-center rounded-[9px] bg-[#1D9E75]">
      <svg
        viewBox="0 0 32 32"
        className="size-[25px]"
        aria-hidden="true"
      >
        <path
          d="M16 4.1 26.5 7.8v7.2c0 5.3-4.2 9.9-10.5 13-6.3-3.1-10.5-7.7-10.5-13V7.8L16 4.1Z"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
        />
        <text
          x="16"
          y="15.8"
          fill="white"
          fontFamily="Arial, sans-serif"
          fontSize="5.9"
          fontWeight="800"
          letterSpacing="-0.1"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          JO
        </text>
      </svg>
    </span>
  );
}
