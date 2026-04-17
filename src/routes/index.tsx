import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { DisplayHeading, LeadText, SectionHeading } from "@/components/typography";
import { PrimaryButton, GlassButton } from "@/components/buttons";
import { MetricCard } from "@/components/metric-card";
import { Ticker } from "@/components/ticker";
import { AvatarGroup } from "@/components/avatar-group";
import { HeroImage } from "@/components/hero-image";
import { Typewriter } from "@/components/typewriter";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Axevil — Private Equity. Reinvented." },
      { name: "description", content: "A technology platform for private equity — for professional investors and wealth managers." },
      { property: "og:title", content: "Axevil — Private Equity. Reinvented." },
      { property: "og:description", content: "A technology platform for private equity." },
      { property: "og:type", content: "website" },
    ],
  }),
});

/* ── Data ────────────────────────────────────────────────── */

const tickerItems = [
  { name: "Anthropic", status: "coming-soon" as const, statusLabel: "Coming Soon" },
  { name: "SpaceX", status: "open" as const, statusLabel: "Open" },
  { name: "Accel Partners", status: "closed" as const, statusLabel: "Closed" },
  { name: "Lightspeed Ventures", status: "open" as const, statusLabel: "Open" },
  { name: "Greylock Partners", status: "coming-soon" as const, statusLabel: "Coming Soon" },
  { name: "Founders Fund", status: "open" as const, statusLabel: "Open" },
  { name: "NEA", status: "closed" as const, statusLabel: "Closed" },
  { name: "Sequoia Capital", status: "open" as const, statusLabel: "Open" },
  { name: "Andreessen Horowitz", status: "coming-soon" as const, statusLabel: "Coming Soon" },
  { name: "Benchmark", status: "open" as const, statusLabel: "Open" },
];

const metrics = [
  { label: "AUM", value: "$150M+" },
  { label: "Investors", value: "1.000+" },
  { label: "Portfolio companies", value: "33" },
  { label: "WM partners", value: "150+" },
];

/* ── Page ────────────────────────────────────────────────── */

function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <HeroSection />
      <Ticker items={tickerItems} />
      <MetricsSection />
      <CTASection />
    </div>
  );
}

/* ── Hero ────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <HeroImage />
      <Container className="relative z-10 flex flex-col items-start gap-[50px]">
        <DisplayHeading className="animate-fade-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          Private Equity.
          <br />
          Reinvented.
        </DisplayHeading>
        <LeadText className="relative max-w-[576px] animate-fade-up opacity-0 [animation-delay:500ms] [animation-fill-mode:forwards]">
          <Typewriter
            segments={[
              { text: "A technology platform for private equity —\nfor " },
              { text: "professional investors", className: "text-white" },
              { text: " and " },
              { text: "wealth managers.", className: "text-white" },
            ]}
          />
        </LeadText>
        <PrimaryButton className="h-[68px] w-[270px] text-[1.05rem] animate-fade-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
          Request Access
        </PrimaryButton>
      </Container>
    </section>
  );
}

/* ── Metrics ─────────────────────────────────────────────── */

function MetricsSection() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ── Final CTA ───────────────────────────────────────────── */

function CTASection() {
  return (
    <Section padding="lg">
      <Container>
        <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Gradient divider — visible on desktop */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px lg:block">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>

          {/* Investors */}
          <div className="flex flex-col items-center gap-10 text-center">
            <SectionHeading>For Investors</SectionHeading>
            <LeadText>
              Your private equity allocation starts here.
            </LeadText>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton>Download App</PrimaryButton>
              <GlassButton>Request Access</GlassButton>
            </div>
            <AvatarGroup count={4} label="Join 1,000+ investors" />
          </div>

          {/* Wealth Managers */}
          <div className="flex flex-col items-center gap-10 text-center">
            <SectionHeading>For Wealth Managers</SectionHeading>
            <LeadText>
              The infrastructure your private equity practice deserves.
            </LeadText>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton>Book a Demo</PrimaryButton>
              <GlassButton>Become a Partner</GlassButton>
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground-tertiary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>SEC Registered · SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
