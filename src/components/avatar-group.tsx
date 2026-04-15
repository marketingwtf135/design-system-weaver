import { cn } from "@/lib/utils";

interface AvatarGroupProps {
  count?: number;
  label?: string;
  className?: string;
}

const avatarColors = [
  "bg-foreground-secondary",
  "bg-foreground-tertiary",
  "bg-accent",
  "bg-border-hover",
];

export function AvatarGroup({ count = 4, label, className }: AvatarGroupProps) {
  return (
    <div className={cn("flex items-center gap-spacing-sm", className)}>
      <div className="flex -space-x-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-8 w-8 rounded-full border-2 border-background",
              avatarColors[i % avatarColors.length]
            )}
          />
        ))}
      </div>
      {label && (
        <span className="text-sm text-foreground-tertiary">{label}</span>
      )}
    </div>
  );
}
