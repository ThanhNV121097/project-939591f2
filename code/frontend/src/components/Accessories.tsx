import { T, useList } from "../editable";
import { useReveal } from "../useReveal";

type Item = { name: string; desc: string; image: string };

export default function Accessories() {
  const items = useList<Item>("accessories.items");
  const { ref, shown } = useReveal<HTMLDivElement>();
  const [first, ...rest] = items;

  return (
    <section id="accessories" className="mx-auto max-w-page px-[var(--gutter)] py-20">
      <T k="accessories.heading" as="h2" className="text-[clamp(28px,3.5vw,44px)]" />
      <div
        ref={ref}
        className={`reveal mt-10 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-6 ${shown ? "is-shown" : ""}`}
      >
        {first && (
          <a
            href="#visit"
            className="group relative rounded-[var(--radius)] overflow-hidden bg-surface transition-transform duration-[var(--duration-base)] hover:-translate-y-1"
          >
            <img
              src={first.image}
              alt={first.name}
              className="w-full h-full min-h-[360px] object-cover transition-transform duration-[var(--duration-base)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="font-display text-2xl text-ink">{first.name}</h3>
              <p className="mt-1 text-ink-soft max-w-[32ch]">{first.desc}</p>
            </div>
          </a>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
          {rest.map((item, i) => (
            <a
              key={i}
              href="#visit"
              className="group flex items-center gap-4 rounded-[var(--radius)] bg-surface p-4 transition-transform duration-[var(--duration-base)] hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-sm object-cover shrink-0 transition-transform duration-[var(--duration-base)] group-hover:scale-[1.05]"
              />
              <div>
                <h3 className="font-display text-lg">{item.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
