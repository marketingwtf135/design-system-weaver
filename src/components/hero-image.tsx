export function HeroImage() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <img
        src="/hero-3d.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center animate-hero-reveal opacity-0 [animation-fill-mode:forwards]"
      />

      {/* Animated light flare */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at var(--flare-x) var(--flare-y), rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 35%, transparent 70%)",
          animation: "hero-flare 8s ease-in-out infinite",
        }}
      />
    </div>
  );
}
