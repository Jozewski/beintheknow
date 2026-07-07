type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

/**
 * Compact dark-gradient page banner matching the home page hero, so
 * secondary pages (About, Terms, Privacy, Admin) share the site's theme.
 */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-[linear-gradient(135deg,#060C18_0%,#085041_100%)] px-4 py-10 text-center sm:px-6">
      <span className="rounded-full bg-[#1D9E75]/25 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#5DCAA5]">
        {eyebrow}
      </span>
      <h1 className="mt-4 text-[clamp(22px,4vw,32px)] font-bold leading-tight text-white">
        {title}
      </h1>
      {description ? (
        <p className="mx-auto mt-3 max-w-md text-[13px] leading-5 text-white/60">
          {description}
        </p>
      ) : null}
    </section>
  );
}
