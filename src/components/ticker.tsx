import { cn } from "@/lib/utils";
import { StatusBadge } from "./status-badge";

interface TickerItem {
  name: string;
  status: "open" | "coming-soon" | "closed";
  statusLabel: string;
}

interface TickerProps {
  items: TickerItem[];
  className?: string;
}

function TickerRow({ items }: { items: TickerItem[] }) {
  return (
    <>
      {items.map((item, i) => (
        <div
          key={i}
          className="flex shrink-0 items-center gap-4 px-10"
        >
          <span className="text-[1.1rem] font-medium tracking-[-0.01em] text-foreground whitespace-nowrap">
            {item.name}
          </span>
          <StatusBadge status={item.status} label={item.statusLabel} />
        </div>
      ))}
    </>
  );
}

export function Ticker({ items, className }: TickerProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden border-y border-border py-4",
        className
      )}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

      {/* Scrolling track — duplicated for seamless loop */}
      <div className="flex" style={{ animation: "ticker-scroll 30s linear infinite" }}>
        <TickerRow items={items} />
        <TickerRow items={items} />
      </div>
    </div>
  );
}
