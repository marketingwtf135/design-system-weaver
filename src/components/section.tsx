import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

const paddingMap = {
  sm: "py-spacing-2xl",
  md: "py-spacing-3xl",
  lg: "py-spacing-4xl",
} as const;

export function Section({ children, className, padding = "md" }: SectionProps) {
  return (
    <section className={cn(paddingMap[padding], className)}>
      {children}
    </section>
  );
}
