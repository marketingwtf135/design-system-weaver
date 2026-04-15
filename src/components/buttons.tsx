import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "rounded-[var(--radius-pill)] bg-foreground px-8 py-4",
        "text-sm font-semibold tracking-tight text-background",
        "transition-[var(--transition-smooth)]",
        "hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]",
        "active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function GlassButton({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "rounded-[var(--radius-pill)]",
        "glass-surface glass-surface-hover",
        "px-8 py-4 text-sm font-semibold text-foreground",
        "transition-[var(--transition-smooth)]",
        "hover:scale-105",
        "active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
