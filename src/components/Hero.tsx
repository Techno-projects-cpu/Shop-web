import Image from "next/image";
import { SITE } from "@/data/content";
import { Icon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-field.jpg"
          alt="Lush green field in the Godavari delta watered by neat rows of drip irrigation at sunset"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-pine-950/80 via-pine-950/35 to-pine-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-pine-950/70 via-transparent to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-32 pb-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-paper-100/20 bg-pine-950/40 px-4 py-2 font-mono text-[11px] tracking-[0.24em] text-leaf-200 uppercase backdrop-blur-sm sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-leaf-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf-400" />
            </span>
            Trusted since {SITE.since} · Godavari region
          </p>

          <h1 className="font-display mt-7 text-[2.6rem] leading-[1.04] font-semibold tracking-tight text-paper-50 text-balance sm:text-6xl lg:text-[4.4rem]">
            Every drop, delivered
            <span className="text-leaf-300 italic"> exactly </span>
            where the root needs it.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-200 sm:text-lg">
            {SITE.name} is your partner for premium micro irrigation — genuine
            materials, honest prices, and system designs drawn personally for
            your farm by Nazeer himself.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2.5 rounded-full bg-leaf-500 px-7 py-3.5 text-base font-semibold text-pine-950 shadow-lift transition hover:-translate-y-0.5 hover:bg-leaf-400"
            >
              Explore products
              <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2.4} />
            </a>
            <a
              href="#design"
              className="inline-flex items-center gap-2.5 rounded-full border border-paper-100/25 bg-pine-950/30 px-7 py-3.5 text-base font-semibold text-paper-100 backdrop-blur-sm transition hover:border-paper-100/50 hover:bg-pine-950/50"
            >
              <Icon name="pencil" className="h-4 w-4 text-water-300" />
              Free farm design
            </a>
          </div>
        </div>

        {/* Floating stat strip */}
        <div className="pointer-events-none absolute right-6 bottom-28 left-4 sm:left-6 lg:left-8 lg:right-8">
          <div className="pointer-events-auto ml-auto hidden w-64 animate-float rounded-2xl border border-paper-100/12 bg-pine-950/60 p-5 backdrop-blur-md md:block">
            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-water-500/15 text-water-300">
                <Icon name="droplet" className="h-5 w-5" />
                <span className="absolute -bottom-0.5 left-1/2 h-1.5 w-1 -translate-x-1/2 animate-drip rounded-full bg-water-300" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold text-paper-50">60%</p>
                <p className="text-xs text-paper-300">less water than flood irrigation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom meta bar */}
      <div className="relative border-t border-paper-100/10 bg-pine-950/55 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-4 text-sm text-paper-200 sm:px-6 lg:px-8">
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 transition hover:text-leaf-300">
            <Icon name="phone" className="h-4 w-4 text-leaf-400" />
            {SITE.phoneDisplay}
          </a>
          <span className="hidden items-center gap-2 sm:inline-flex">
            <Icon name="clock" className="h-4 w-4 text-leaf-400" />
            {SITE.hours}
          </span>
          <span className="hidden items-center gap-2 md:inline-flex">
            <Icon name="badge" className="h-4 w-4 text-leaf-400" />
            ISI-certified stock only
          </span>
          <a href="#story" className="group inline-flex items-center gap-2 font-medium text-paper-100">
            Our story
            <Icon name="arrow-down" className="h-4 w-4 animate-bounce text-leaf-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
