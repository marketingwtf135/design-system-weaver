import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { DisplayHeading, LeadText, MicroLabel, SectionHeading } from "@/components/typography";
import { PrimaryButton, GlassButton } from "@/components/buttons";
import { MetricCard } from "@/components/metric-card";
import { Ticker } from "@/components/ticker";
import { AvatarGroup } from "@/components/avatar-group";
import { ThreeBackground } from "@/components/three-background";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Axevil — Private Equity. Reinvented." },
      { name: "description", content: "Access institutional-grade private equity investments. $150M+ AUM, 1000+ investors, 33 active positions." },
      { property: "og:title", content: "Axevil — Private Equity. Reinvented." },
      { property: "og:description", content: "Access institutional-grade private equity investments." },
      { property: "og:type", content: "website" },
    ],
  }),
});

/* ── Data ────────────────────────────────────────────────── */

const tickerItems = [
  { name: "Sequoia Capital", status: "open" as const, statusLabel: "Open" },
  { name: "Andreessen Horowitz", status: "coming-soon" as const, statusLabel: "Coming Soon" },
  { name: "Benchmark", status: "open" as const, statusLabel: "Open" },
  { name: "Accel Partners", status: "closed" as const, statusLabel: "Closed" },
  { name: "Lightspeed Ventures", status: "open" as const, statusLabel: "Open" },
  { name: "Greylock Partners", status: "coming-soon" as const, statusLabel: "Coming Soon" },
  { name: "Founders Fund", status: "open" as const, statusLabel: "Open" },
  { name: "NEA", status: "closed" as const, statusLabel: "Closed" },
];

const metrics = [
  { label: "Assets Under Management", value: "$150M+", sublabel: "Across all funds" },
  { label: "Active Investors", value: "1,000+", sublabel: "Verified accounts" },
  { label: "Active Positions", value: "33", sublabel: "Current portfolio" },
  { label: "Partner Network", value: "150+", sublabel: "Global partners" },
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <ThreeBackground />
      <Container className="relative z-10 flex flex-col items-center gap-spacing-xl text-center">
        <MicroLabel>Platform Access</MicroLabel>
        <DisplayHeading>
          Private Equity.
          <br />
          Reinvented.
        </DisplayHeading>
        <LeadText className="max-w-xl">
          Access institutional-grade private equity investments previously
          reserved for the ultra-wealthy.
        </LeadText>
        <PrimaryButton>Request Access</PrimaryButton>
      </Container>
    </section>
  );
}

/* ── Metrics ─────────────────────────────────────────────── */

function MetricsSection() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-spacing-md sm:grid-cols-2 lg:grid-cols-4">
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
        <div className="relative grid grid-cols-1 gap-spacing-2xl lg:grid-cols-2">
          {/* Gradient divider — visible on desktop */}
          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px lg:block">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-border-glow to-transparent" />
          </div>

          {/* Individuals */}
          <div className="flex flex-col items-center gap-spacing-xl text-center">
            <SectionHeading>For Individuals</SectionHeading>
            <LeadText>
              Start investing in private equity with as little as $10,000.
            </LeadText>
            <div className="flex flex-wrap items-center justify-center gap-spacing-sm">
              <PrimaryButton>Download App</PrimaryButton>
              <GlassButton>Request Access</GlassButton>
            </div>
            <AvatarGroup count={4} label="Join 1,000+ investors" />
          </div>

          {/* Institutions */}
          <div className="flex flex-col items-center gap-spacing-xl text-center">
            <SectionHeading>For Institutions</SectionHeading>
            <LeadText>
              Distribute private equity products through our platform.
            </LeadText>
            <div className="flex flex-wrap items-center justify-center gap-spacing-sm">
              <PrimaryButton>Book a Demo</PrimaryButton>
              <GlassButton>Become a Partner</GlassButton>
            </div>
            <div className="flex items-center gap-spacing-xs text-sm text-foreground-tertiary">
              <ShieldIcon />
              <span>SEC Registered · SOC 2 Compliant</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ── Icons ───────────────────────────────────────────────── */

function ShieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
