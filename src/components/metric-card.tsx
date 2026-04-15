import { cn } from "@/lib/utils";
import { MicroLabel } from "./typography";

interface MetricCardProps {
  label: string;
  value: string;
  sublabel?: string;
  className?: string;
}

export function MetricCard({ label, value, sublabel, className }: MetricCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 rounded-2xl p-10 text-center",
        "border border-border bg-glass-bg backdrop-blur-[20px]",
        "transition-all duration-300 ease-in-out cursor-default",
        "hover:bg-glass-hover hover:border-border-hover",
        className
      )}
    >
      <MicroLabel>{label}</MicroLabel>
      <span className="text-[2.5rem] font-light tracking-[-0.03em] tabular-nums text-foreground">
        {value}
      </span>
      {sublabel && (
        <span className="text-sm text-foreground-tertiary">{sublabel}</span>
      )}
    </div>
  );
}
