import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { DisplayHeading, SectionHeading, LeadText, MicroLabel } from "@/components/typography";
import { PrimaryButton, GlassButton } from "@/components/buttons";
import { StatusBadge } from "@/components/status-badge";
import { MetricCard } from "@/components/metric-card";
import { AvatarGroup } from "@/components/avatar-group";

export const Route = createFileRoute("/design-system")({
  component: DesignSystemPage,
  head: () => ({
    meta: [
      { title: "Design System — Axevil" },
      { name: "description", content: "Axevil design system style guide — tokens, typography, components." },
    ],
  }),
});

function SectionDivider() {
  return <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-border-glow to-transparent" />;
}

function StyleGuideSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground border-b border-border pb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Swatch({ name, className, border }: { name: string; className: string; border?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`h-16 w-16 rounded-xl ${className} ${border ? "border border-border" : ""}`} />
      <span className="text-xs text-foreground-tertiary text-center">{name}</span>
    </div>
  );
}

function TokenRow({ token, value }: { token: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border/50 py-3">
      <code className="text-sm font-mono text-accent">{token}</code>
      <span className="text-sm text-foreground-tertiary">{value}</span>
    </div>
  );
}

function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Section padding="sm">
        <Container>
          <MicroLabel>Style Guide</MicroLabel>
          <h1 className="mt-4 text-[3rem] font-semibold tracking-[-0.03em] text-foreground">
            Design System
          </h1>
          <LeadText className="mt-4 max-w-2xl">
            Reverse-engineered token system and component library for the Axevil platform.
            All values are normalized, reusable, and consistent.
          </LeadText>
        </Container>
      </Section>

      <SectionDivider />

      {/* Colors */}
      <Section padding="sm">
        <Container className="flex flex-col gap-16">
          <StyleGuideSection title="Color Palette — Core">
            <div className="flex flex-wrap gap-6">
              <Swatch name="background" className="bg-background" border />
              <Swatch name="foreground" className="bg-foreground" />
              <Swatch name="foreground-secondary" className="bg-foreground-secondary" />
              <Swatch name="foreground-tertiary" className="bg-foreground-tertiary" />
            </div>
          </StyleGuideSection>

          <StyleGuideSection title="Color Palette — Surfaces & Borders">
            <div className="flex flex-wrap gap-6">
              <Swatch name="glass-bg" className="bg-glass-bg" border />
              <Swatch name="glass-hover" className="bg-glass-hover" border />
              <Swatch name="border" className="bg-border" />
              <Swatch name="border-hover" className="bg-border-hover" />
              <Swatch name="border-glow" className="bg-border-glow" />
            </div>
          </StyleGuideSection>

          <StyleGuideSection title="Color Palette — Accent">
            <div className="flex flex-wrap gap-6">
              <Swatch name="accent" className="bg-accent" />
              <Swatch name="accent-bg" className="bg-accent-bg" border />
              <Swatch name="accent-border" className="bg-accent-border" />
            </div>
          </StyleGuideSection>
        </Container>
      </Section>

      <SectionDivider />

      {/* Typography */}
      <Section padding="sm">
        <Container className="flex flex-col gap-16">
          <StyleGuideSection title="Typography Scale">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <MicroLabel>Display — 5.5rem / 600 / -0.04em</MicroLabel>
                <DisplayHeading>Private Equity.</DisplayHeading>
              </div>

              <div className="flex flex-col gap-2">
                <MicroLabel>Section — 2.5rem / 500 / -0.03em</MicroLabel>
                <SectionHeading>For Individuals</SectionHeading>
              </div>

              <div className="flex flex-col gap-2">
                <MicroLabel>Lead — 1.25rem / 400 / -0.01em</MicroLabel>
                <LeadText>Access institutional-grade private equity investments previously reserved for the ultra-wealthy.</LeadText>
              </div>

              <div className="flex flex-col gap-2">
                <MicroLabel>Body — 1.1rem / 500 / -0.01em</MicroLabel>
                <span className="text-[1.1rem] font-medium tracking-[-0.01em] text-foreground">Sequoia Capital</span>
              </div>

              <div className="flex flex-col gap-2">
                <MicroLabel>Micro — 0.75rem / 600 / 0.15em / uppercase</MicroLabel>
                <MicroLabel>Platform Access</MicroLabel>
              </div>

              <div className="flex flex-col gap-2">
                <MicroLabel>Metric — 2.5rem / 300 / -0.03em / tabular-nums</MicroLabel>
                <span className="text-[2.5rem] font-light tracking-[-0.03em] tabular-nums text-foreground">$150M+</span>
              </div>
            </div>
          </StyleGuideSection>
        </Container>
      </Section>

      <SectionDivider />

      {/* Spacing */}
      <Section padding="sm">
        <Container className="flex flex-col gap-16">
          <StyleGuideSection title="Spacing Scale">
            <div className="flex flex-col">
              <TokenRow token="gap / padding" value="0.75rem (xs) → 1rem → 1.5rem → 2rem → 2.5rem → 4rem → 6rem → 8rem (4xl)" />
              <TokenRow token="container max-width" value="1440px" />
              <TokenRow token="container padding" value="4rem (desktop) / 1.5rem (mobile)" />
              <TokenRow token="section padding-y" value="sm: 4rem / md: 6rem / lg: 8rem" />
            </div>
          </StyleGuideSection>

          <StyleGuideSection title="Spacing Visual">
            <div className="flex items-end gap-4">
              {[
                { label: "xs", size: "h-3 w-3" },
                { label: "sm", size: "h-4 w-4" },
                { label: "md", size: "h-6 w-6" },
                { label: "lg", size: "h-8 w-8" },
                { label: "xl", size: "h-10 w-10" },
                { label: "2xl", size: "h-16 w-16" },
                { label: "3xl", size: "h-24 w-24" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2">
                  <div className={`${s.size} rounded bg-accent/20 border border-accent-border`} />
                  <span className="text-[0.65rem] text-foreground-tertiary">{s.label}</span>
                </div>
              ))}
            </div>
          </StyleGuideSection>
        </Container>
      </Section>

      <SectionDivider />

      {/* Buttons */}
      <Section padding="sm">
        <Container className="flex flex-col gap-16">
          <StyleGuideSection title="Buttons">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <MicroLabel>Primary — solid white, pill radius, hover scale + glow</MicroLabel>
                <div className="flex flex-wrap items-center gap-4">
                  <PrimaryButton>Request Access</PrimaryButton>
                  <PrimaryButton>Download App</PrimaryButton>
                  <PrimaryButton>Book a Demo</PrimaryButton>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <MicroLabel>Glass — transparent, border, backdrop-blur, hover border brighten</MicroLabel>
                <div className="flex flex-wrap items-center gap-4">
                  <GlassButton>Request Access</GlassButton>
                  <GlassButton>Become a Partner</GlassButton>
                </div>
              </div>
            </div>
          </StyleGuideSection>
        </Container>
      </Section>

      <SectionDivider />

      {/* Status Badges */}
      <Section padding="sm">
        <Container className="flex flex-col gap-16">
          <StyleGuideSection title="Status Badges">
            <div className="flex flex-col gap-3">
              <MicroLabel>Pill badges — 3 states: open (accent), coming soon (muted), closed (dim)</MicroLabel>
              <div className="flex flex-wrap items-center gap-4">
                <StatusBadge status="open" label="Open" />
                <StatusBadge status="coming-soon" label="Coming Soon" />
                <StatusBadge status="closed" label="Closed" />
              </div>
            </div>
          </StyleGuideSection>
        </Container>
      </Section>

      <SectionDivider />

      {/* Metric Cards */}
      <Section padding="sm">
        <Container className="flex flex-col gap-16">
          <StyleGuideSection title="Metric Cards">
            <div className="flex flex-col gap-3">
              <MicroLabel>Glass surface, hover border glow, micro label + metric value + sublabel</MicroLabel>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard label="Assets Under Management" value="$150M+" />
                <MetricCard label="Active Investors" value="1,000+" />
                <MetricCard label="Active Positions" value="33" />
                <MetricCard label="Partner Network" value="150+" />
              </div>
            </div>
          </StyleGuideSection>
        </Container>
      </Section>

      <SectionDivider />

      {/* Avatar Group */}
      <Section padding="sm">
        <Container className="flex flex-col gap-16">
          <StyleGuideSection title="Avatar Group">
            <div className="flex flex-col gap-6">
              <MicroLabel>Overlapping circles with optional label — social proof pattern</MicroLabel>
              <AvatarGroup count={4} label="Join 1,000+ investors" />
              <AvatarGroup count={3} label="150+ partners" />
              <AvatarGroup count={5} />
            </div>
          </StyleGuideSection>
        </Container>
      </Section>

      <SectionDivider />

      {/* Tokens Reference */}
      <Section padding="sm">
        <Container className="flex flex-col gap-16">
          <StyleGuideSection title="Token Reference">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="flex flex-col">
                <h4 className="mb-4 text-sm font-semibold text-foreground">Colors</h4>
                <TokenRow token="--background" value="oklch(0 0 0)" />
                <TokenRow token="--foreground" value="oklch(1 0 0)" />
                <TokenRow token="--foreground-secondary" value="oklch(1 0 0 / 60%)" />
                <TokenRow token="--foreground-tertiary" value="oklch(1 0 0 / 40%)" />
                <TokenRow token="--accent" value="oklch(0.78 0.06 220)" />
                <TokenRow token="--glass-bg" value="oklch(1 0 0 / 2%)" />
                <TokenRow token="--glass-hover" value="oklch(1 0 0 / 5%)" />
                <TokenRow token="--border" value="oklch(1 0 0 / 8%)" />
                <TokenRow token="--border-hover" value="oklch(1 0 0 / 30%)" />
                <TokenRow token="--border-glow" value="oklch(1 0 0 / 20%)" />
              </div>

              <div className="flex flex-col">
                <h4 className="mb-4 text-sm font-semibold text-foreground">Other</h4>
                <TokenRow token="--radius" value="0.625rem" />
                <TokenRow token="border-radius (pills)" value="9999px (rounded-full)" />
                <TokenRow token="--font-sans" value="Inter, system-ui, sans-serif" />
                <TokenRow token="transition (smooth)" value="0.4s cubic-bezier(0.16, 1, 0.3, 1)" />
                <TokenRow token="transition (fast)" value="0.3s ease" />
                <TokenRow token="backdrop-blur" value="20px" />
                <TokenRow token="hover scale" value="1.05" />
                <TokenRow token="active scale" value="0.98" />
              </div>
            </div>
          </StyleGuideSection>
        </Container>
      </Section>

      <Section padding="sm">
        <Container>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground-tertiary">
            Axevil Design System · Reverse-engineered & normalized
          </div>
        </Container>
      </Section>
    </div>
  );
}
