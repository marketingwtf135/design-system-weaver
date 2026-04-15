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
        "rounded-full bg-foreground px-8 py-4",
        "text-sm font-semibold tracking-tight text-background",
        "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
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
        "rounded-full border border-border bg-glass-bg backdrop-blur-[20px]",
        "px-8 py-4 text-sm font-semibold text-foreground",
        "transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:scale-105 hover:bg-glass-hover hover:border-border-hover",
        "active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
