export function DisclaimerSection() {
  return (
    <section id="disclaimer" className="border-y border-[#FDE68A] bg-[#FFFBEB] px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-3xl">
          <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#92400E]">
            Educational Use Only
          </span>
          <h3 className="mt-3 text-[15px] font-semibold text-[#78350F]">JO is not a lawyer.</h3>
          <p className="mt-2 text-[12px] leading-5 text-[#78350F]/85">
            Be In The Know provides general educational information about federal and state rights. It is not legal advice and does not create an attorney-client relationship. For personal guidance, contact a qualified legal aid provider or attorney.
          </p>
        </div>
        <a
          href="https://www.lawhelp.org"
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#92400E] px-4 py-2 text-[12px] font-semibold text-white hover:bg-[#78350F]"
        >
          Find free legal aid near you →
        </a>
      </div>
    </section>
  );
}
