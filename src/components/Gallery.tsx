import Image from "next/image";
import { Icon } from "./icons";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section aria-label="Systems in the field" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal>
            <figure className="group relative overflow-hidden rounded-3xl border border-paper-100/10">
              <Image
                src="/images/sprinkler.jpg"
                alt="Micro sprinkler throwing a fine backlit mist over a vegetable crop"
                width={1000}
                height={1200}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine-950/90 to-transparent p-6 pt-16">
                <p className="font-mono text-[10px] tracking-[0.24em] text-water-300 uppercase">
                  Uniform coverage
                </p>
                <p className="font-display mt-1 text-lg font-semibold text-paper-50">
                  Micro-sprinklers at work
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={110}>
            <figure className="group relative overflow-hidden rounded-3xl border border-paper-100/10">
              <Image
                src="/images/polyhouse.jpg"
                alt="White polyhouse greenhouse with rows of crops on raised beds inside"
                width={1000}
                height={1200}
                className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-pine-950/90 to-transparent p-6 pt-16">
                <p className="font-mono text-[10px] tracking-[0.24em] text-leaf-300 uppercase">
                  Protected cultivation
                </p>
                <p className="font-display mt-1 text-lg font-semibold text-paper-50">
                  Polyhouses, built & clad
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={220}>
            <div className="flex aspect-[4/5] flex-col justify-between rounded-3xl bg-gradient-to-br from-leaf-600 to-water-600 p-7 shadow-lift">
              <Icon name="droplet" className="h-8 w-8 text-paper-50/90" />
              <div>
                <p className="font-display text-6xl font-semibold text-paper-50">60%</p>
                <p className="mt-2 text-[15px] leading-snug font-medium text-leaf-100">
                  of irrigation water saved when fields move from flooding to
                  drip — water that stays in your pocket and your soil.
                </p>
              </div>
              <a
                href="#design"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-pine-950/25 px-5 py-2.5 text-sm font-semibold text-paper-50 backdrop-blur-sm transition hover:bg-pine-950/40"
              >
                Get your free design
                <Icon name="arrow-right" className="h-4 w-4" strokeWidth={2.2} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
