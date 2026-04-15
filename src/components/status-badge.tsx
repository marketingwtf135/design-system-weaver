import { cn } from "@/lib/utils";

type BadgeStatus = "open" | "coming-soon" | "closed";

interface StatusBadgeProps {
  status: BadgeStatus;
  label: string;
  className?: string;
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.65rem] font-medium tracking-wide uppercase",
        status === "open" && "bg-accent-bg border-accent-border text-accent",
        status === "coming-soon" && "bg-glass-bg border-border text-foreground-tertiary",
        status === "closed" && "bg-glass-bg border-border text-foreground-tertiary opacity-50",
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
