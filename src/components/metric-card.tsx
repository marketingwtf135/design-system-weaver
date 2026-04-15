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
        "flex flex-col items-center gap-spacing-xs rounded-2xl p-spacing-xl text-center",
        "glass-surface glass-surface-hover",
        "transition-[var(--transition-fast)] cursor-default",
        className
      )}
    >
      <MicroLabel>{label}</MicroLabel>
      <span className="text-metric text-foreground">{value}</span>
      {sublabel && (
        <span className="text-sm text-foreground-tertiary">{sublabel}</span>
      )}
    </div>
  );
}
