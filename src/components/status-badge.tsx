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
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.65rem] font-medium tracking-[0.025em] uppercase whitespace-nowrap",
        status === "open" &&
          "bg-[rgba(140,193,210,0.05)] border-[rgba(140,193,210,0.3)] text-[#8cc1d2]",
        status === "coming-soon" &&
          "bg-white/10 border-white/40 text-white",
        status === "closed" &&
          "bg-[rgba(210,153,140,0.15)] border-[rgba(210,161,140,0.3)] text-[#d2a18c]",
        className
      )}
    >
      {status === "open" && (
        <span className="h-1.5 w-1.5 rounded-full bg-[#8cc1d2]" />
      )}
      {label}
    </span>
  );
}
