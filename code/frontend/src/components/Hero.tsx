import { T } from "../editable";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-page px-[var(--gutter)] pt-16 pb-12">
        <T
          k="hero.headline"
          as="h1"
          className="hero-rise-1 text-[clamp(40px,6.5vw,88px)] max-w-[12ch]"
        />
        <T
          k="hero.sub"
          as="p"
          className="hero-rise-2 mt-5 text-lg text-ink-soft max-w-[46ch]"
        />
        <T
          k="hero.cta.label"
          as="a"
          href="#accessories"
          className="hero-rise-3 mt-8 inline-block rounded-pill bg-accent px-7 py-3 text-accent-ink font-medium transition-transform duration-[var(--duration-fast)] hover:scale-[1.03]"
        />
      </div>
      <div className="mx-auto max-w-page px-[var(--gutter)]">
        <div
          className="hero-pane rounded-[var(--radius)] overflow-hidden"
          style={{ boxShadow: "var(--glow-accent)" }}
        >
          <img
            src="/images/hero.jpg"
            alt="Clear iPhone case and charging cable on a dark surface"
            className="w-full h-[clamp(260px,42vw,560px)] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
