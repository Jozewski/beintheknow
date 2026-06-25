export function JoLogo() {
  return (
    <span className="relative flex size-8 shrink-0 items-center justify-center rounded-[9px] bg-[#1D9E75]">
      <svg
        viewBox="0 0 32 32"
        className="size-[21px]"
        aria-hidden="true"
      >
        <path
          d="M16 4.5 23 7.3v7.1c0 5.1-3.1 9.7-7 12.1-3.9-2.4-7-7-7-12.1V7.3l7-2.8Z"
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.2"
        />
        <text
          x="16"
          y="15.9"
          fill="white"
          fontFamily="Arial, sans-serif"
          fontSize="4.8"
          fontWeight="700"
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
