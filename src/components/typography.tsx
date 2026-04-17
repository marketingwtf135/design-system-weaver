import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function DisplayHeading({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-[7rem] max-sm:text-[3rem] sm:max-lg:text-[5rem]",
        "font-medium leading-[1] tracking-[-2px] text-white",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function SectionHeading({ children, className, as: Tag = "h2" }: TypographyProps) {
  return (
    <Tag className={cn("text-[2.5rem] font-medium leading-[1.2] tracking-[-0.03em] text-foreground", className)}>
      {children}
    </Tag>
  );
}

export function LeadText({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-[1.45rem] font-normal leading-[1.4] tracking-[-0.02em] text-foreground-secondary", className)}>
      {children}
    </p>
  );
}

export function MicroLabel({ children, className }: TypographyProps) {
  return (
    <span className={cn("text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-foreground-tertiary", className)}>
      {children}
    </span>
  );
}
