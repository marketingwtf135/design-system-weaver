import { cn } from "@/lib/utils";

type BadgeStatus = "open" | "coming-soon" | "closed";

interface StatusBadgeProps {
  status: BadgeStatus;
  label: string;
  className?: string;
}

const statusStyles: Record<BadgeStatus, string> = {
  open: "bg-accent-bg border-accent-border text-accent",
  "coming-soon": "bg-glass-bg border-border text-foreground-tertiary",
  closed: "bg-glass-bg border-border text-foreground-tertiary opacity-50",
};

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border px-3 py-1 text-[0.65rem] font-medium tracking-wide uppercase",
        statusStyles[status],
        className
      )}
    >
      {status === "open" && (
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      )}
      {label}
    </span>
  );
}
