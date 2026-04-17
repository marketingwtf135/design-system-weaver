import { useEffect, useState } from "react";

interface Segment {
  text: string;
  className?: string;
}

interface TypewriterProps {
  segments: Segment[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseAfterType?: number;
  pauseAfterDelete?: number;
  startDelay?: number;
  className?: string;
}

export function Typewriter({
  segments,
  typeSpeed = 25,
  deleteSpeed = 15,
  pauseAfterType = 2500,
  pauseAfterDelete = 600,
  startDelay = 1300,
  className,
}: TypewriterProps) {
  const fullText = segments.map((s) => s.text).join("");
  const totalLen = fullText.length;
  const [charCount, setCharCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting" | "wait">("typing");

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    let timer: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charCount < totalLen) {
        timer = setTimeout(() => setCharCount((c) => c + 1), typeSpeed);
      } else {
        timer = setTimeout(() => setPhase("pause"), 0);
      }
    } else if (phase === "pause") {
      timer = setTimeout(() => setPhase("deleting"), pauseAfterType);
    } else if (phase === "deleting") {
      if (charCount > 0) {
        timer = setTimeout(() => setCharCount((c) => c - 1), deleteSpeed);
      } else {
        timer = setTimeout(() => setPhase("wait"), 0);
      }
    } else if (phase === "wait") {
      timer = setTimeout(() => {
        setPhase("typing");
      }, pauseAfterDelete);
    }

    return () => clearTimeout(timer);
  }, [started, phase, charCount, totalLen, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  let remaining = charCount;
  const rendered = segments.map((seg, i) => {
    if (remaining <= 0) return null;
    const visible = seg.text.slice(0, remaining);
    remaining -= visible.length;
    return (
      <span key={i} className={seg.className}>
        {visible}
      </span>
    );
  });

  return (
    <span className={className}>
      {/* Invisible full text to reserve space */}
      <span className="invisible block" aria-hidden="true">
        {segments.map((seg, i) => (
          <span key={i} className={seg.className}>{seg.text}</span>
        ))}
      </span>
      {/* Visible typed text overlaid */}
      <span className="absolute top-0 left-0">
        {rendered}
        <span className="inline-block w-[2px] h-[1.1em] bg-white/60 align-middle ml-0.5 animate-blink" />
      </span>
    </span>
  );
}
