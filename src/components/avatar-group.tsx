import { cn } from "@/lib/utils";

interface AvatarGroupProps {
  count?: number;
  label?: string;
  className?: string;
}

export function AvatarGroup({ count = 4, label, className }: AvatarGroupProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="flex -space-x-2">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-8 rounded-full border-2 border-background bg-foreground-secondary"
            style={{ opacity: 1 - i * 0.15 }}
          />
        ))}
      </div>
      {label && (
        <span className="text-sm text-foreground-tertiary">{label}</span>
      )}
    </div>
  );
}
