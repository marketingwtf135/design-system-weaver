import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

export function DisplayHeading({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn("text-[5.5rem] max-md:text-[2.5rem] md:max-lg:text-[4rem] font-semibold leading-[1.05] tracking-[-0.04em]", className)}
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
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
    <p className={cn("text-[1.25rem] font-normal leading-[1.5] tracking-[-0.01em] text-foreground-secondary", className)}>
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
