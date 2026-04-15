import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function DisplayHeading({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("text-display text-gradient", className)}>
      {children}
    </h1>
  );
}

export function SectionHeading({ children, className, as: Tag = "h2" }: TypographyProps) {
  return (
    <Tag className={cn("text-section text-foreground", className)}>
      {children}
    </Tag>
  );
}

export function LeadText({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-lead text-foreground-secondary", className)}>
      {children}
    </p>
  );
}

export function MicroLabel({ children, className }: TypographyProps) {
  return (
    <span className={cn("text-micro text-foreground-tertiary", className)}>
      {children}
    </span>
  );
}
