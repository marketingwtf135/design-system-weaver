import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
}

const paddingMap = {
  sm: "py-16",
  md: "py-24",
  lg: "py-32",
} as const;

export function Section({ children, className, padding = "md" }: SectionProps) {
  return (
    <section className={cn(paddingMap[padding], className)}>
      {children}
    </section>
  );
}
