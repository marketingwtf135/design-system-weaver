import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

interface MetricCardProps {
  label: string;
  value: string;
  className?: string;
}

export function MetricCard({ label, value, className }: MetricCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shimmer, setShimmer] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => setShimmer(true);
  const handleMouseLeave = () => {
    setShimmer(false);
    setMouse({ x: 50, y: 50 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden",
        "flex flex-col items-center justify-center gap-3 rounded-[20px] p-[42px] text-center",
        "border border-white/8",
        "transition-all duration-300 ease-out cursor-default",
        "hover:scale-[1.04] hover:border-white/25",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(84deg, rgba(70,70,70,0.1) 7%, rgba(181,181,181,0.1) 54%, rgba(72,72,72,0.1) 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: shimmer ? 1 : 0,
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: shimmer ? 1 : 0,
          background:
            "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 55%, transparent 70%)",
          backgroundSize: "200% 100%",
          animation: shimmer ? "card-shimmer 1.2s ease-in-out" : "none",
        }}
      />
      <span className="relative text-[3.75rem] font-normal leading-[1] tracking-[-1px] tabular-nums text-white">
        {value}
      </span>
      <span className="relative text-[1.125rem] text-white/40">{label}</span>
    </div>
  );
}
