import { Icon, type IconName } from "./icons";

const ITEMS: { icon: IconName; text: string }[] = [
  { icon: "badge", text: "ISI-certified products" },
  { icon: "droplet", text: "Drip & sprinkler systems" },
  { icon: "pencil", text: "Free farm system design" },
  { icon: "leaf", text: "Save up to 60% water" },
  { icon: "users", text: "10,000+ farmers served" },
  { icon: "greenhouse", text: "Polyhouses & mulch films" },
  { icon: "bike", text: "Motorbike spares too" },
  { icon: "shield", text: "20+ years of trust" },
];

export function Marquee() {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {ITEMS.map((item) => (
        <li key={item.text} className="flex items-center gap-3">
          <Icon name={item.icon} className="h-4 w-4 text-leaf-400" />
          <span className="font-mono text-xs tracking-[0.18em] whitespace-nowrap text-paper-300 uppercase">
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee-mask overflow-hidden border-y border-paper-100/8 bg-pine-900/60 py-4">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
