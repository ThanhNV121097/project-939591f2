import { T } from "../editable";
import { useReveal } from "../useReveal";

export default function Visit() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="visit" className="mx-auto max-w-page px-[var(--gutter)] py-20">
      <div
        ref={ref}
        className={`reveal grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch ${shown ? "is-shown" : ""}`}
      >
        <div className="rounded-[var(--radius)] overflow-hidden">
          <img
            src="/images/storefront.jpg"
            alt="Tony Apple storefront in Hà Nội"
            className="w-full h-full min-h-[320px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <T k="visit.heading" as="h2" className="text-[clamp(28px,3.5vw,44px)]" />
          <T k="visit.address" as="p" className="mt-4 text-xl text-ink-soft" />
          <T
            k="visit.cta.label"
            as="a"
            href="https://maps.google.com/?q=19+Duy+T%C3%A2n+H%C3%A0+N%E1%BB%99i"
            className="mt-8 inline-block w-fit rounded-pill border border-line px-7 py-3 font-medium transition-colors duration-[var(--duration-fast)] hover:border-accent hover:text-accent"
          />
        </div>
      </div>
    </section>
  );
}
