import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--container-max)] px-[var(--container-padding)]",
        "max-md:px-spacing-md",
        className
      )}
    >
      {children}
    </div>
  );
}
