

# Axevil Homepage — Reverse-Engineered Design System & Rebuild

## What's wrong now
The current codebase is a blank placeholder. The uploaded React file uses 300+ lines of inline style objects with hardcoded values, duplicated colors, inconsistent spacing, and no reusable abstraction. A proper rebuild means extracting a normalized token system first, then building components on top of it.

---

## Phase 1 — Design System (tokens + base styles)

### 1.1 Design Tokens in `src/styles.css`

Override the existing CSS variables in `:root` / `.dark` with the Axevil palette. This app is dark-only, so we set dark values as the default.

**Color tokens** (normalized from ~15 raw rgba/hex values in the source):

| Token | Value | Used for |
|---|---|---|
| `--background` | `#000000` | Page bg |
| `--foreground` | `#ffffff` | Primary text |
| `--foreground-secondary` | `rgba(255,255,255,0.6)` | Lead text, sublabels |
| `--foreground-tertiary` | `rgba(255,255,255,0.4)` | Micro labels |
| `--border` | `rgba(255,255,255,0.08)` | Subtle borders |
| `--border-hover` | `rgba(255,255,255,0.3)` | Hover state borders |
| `--border-glow` | `rgba(255,255,255,0.2)` | Divider glow |
| `--glass-bg` | `rgba(255,255,255,0.02)` | Glass surfaces |
| `--glass-hover` | `rgba(255,255,255,0.05)` | Glass hover |
| `--accent` | `#88c0d0` | Status "open" badge |
| `--accent-bg` | `rgba(136,192,208,0.05)` | Status "open" background |
| `--accent-border` | `rgba(136,192,208,0.3)` | Status "open" border |

**Typography tokens** (consolidated from 5 scattered style objects):

| Token | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|
| Display | 5.5rem | 600 | -0.04em | 1.05 |
| Section | 2.5rem | 500 | -0.03em | 1.2 |
| Lead | 1.25rem | 400 | -0.01em | 1.5 |
| Body | 1.1rem | 500 | -0.01em | 1.5 |
| Micro | 0.75rem | 600 | 0.15em | — (uppercase) |
| Metric | 2.5rem | 300 | -0.03em | — (tabular nums) |

**Spacing scale** (normalized from ~12 raw values):
- `--space-xs`: 0.75rem
- `--space-sm`: 1rem
- `--space-md`: 1.5rem
- `--space-lg`: 2rem
- `--space-xl`: 2.5rem
- `--space-2xl`: 4rem
- `--space-3xl`: 6rem
- `--space-4xl`: 8rem
- `--container-max`: 1440px
- `--container-padding`: 4rem

**Other tokens**:
- `--radius-pill`: 100px
- `--transition-smooth`: all 0.4s cubic-bezier(0.16, 1, 0.3, 1)
- `--transition-fast`: 0.3s ease

### 1.2 Utility classes via Tailwind

Add custom utility classes in `styles.css` for typography presets (`text-display`, `text-section`, `text-lead`, `text-micro`, `text-metric`) using `@layer utilities`. This avoids repeating 4-5 properties every time.

Add ticker keyframe animation in `@layer base`.

### 1.3 Google Font

Add Inter font import to `__root.tsx` head links.

---

## Phase 2 — Reusable Components

Create these in `src/components/`:

| Component | File | Purpose |
|---|---|---|
| `Container` | `container.tsx` | Max-width wrapper with consistent padding |
| `Section` | `section.tsx` | Vertical section with standardized padding |
| `DisplayHeading` | `typography.tsx` | Gradient-clipped hero heading |
| `SectionHeading` | `typography.tsx` | Section-level heading |
| `LeadText` | `typography.tsx` | Subtitle/description text |
| `MicroLabel` | `typography.tsx` | Uppercase small label |
| `PrimaryButton` | `buttons.tsx` | White solid CTA with hover scale/glow |
| `GlassButton` | `buttons.tsx` | Transparent glass button with hover border |
| `StatusBadge` | `status-badge.tsx` | Open/Coming Soon/Closed pill badges |
| `MetricCard` | `metric-card.tsx` | Label + large value + sublabel, hover border |
| `Ticker` | `ticker.tsx` | Infinite horizontal scroll with fade edges |
| `AvatarGroup` | `avatar-group.tsx` | Overlapping circular avatars |
| `ThreeBackground` | `three-background.tsx` | WebGL torus knot (dynamic Three.js loading) |

All components use Tailwind classes mapped to design tokens. Zero inline style objects except where CSS-in-JS is unavoidable (Three.js canvas positioning).

---

## Phase 3 — Homepage Build (`src/routes/index.tsx`)

Compose the homepage using only the components above:

1. **Hero** — `ThreeBackground` + `Container` + `MicroLabel` + `DisplayHeading` + `LeadText` + `PrimaryButton`
2. **Ticker** — `Ticker` with company data and `StatusBadge` items
3. **Metrics** — `Section` + `Container` + 4× `MetricCard` in a responsive grid
4. **Final CTA** — `Section` + `Container` + dual-column grid with gradient divider. Left: individuals (buttons + `AvatarGroup`). Right: institutions (buttons + shield icon trust line)

### Responsive breakpoints
- Mobile (<768px): single-column grids, reduced font sizes for display heading, smaller container padding
- Tablet (768-1024px): 2-column metric grid
- Desktop (>1024px): full 4-column layout

---

## Phase 4 — Root layout updates

- Update `__root.tsx` meta tags (title: "Axevil", description for private equity platform)
- Add Inter font stylesheet link

---

## Files to create/modify

| Action | File |
|---|---|
| Modify | `src/styles.css` — tokens, utility classes, keyframes |
| Modify | `src/routes/__root.tsx` — meta, font link |
| Modify | `src/routes/index.tsx` — full homepage |
| Create | `src/components/container.tsx` |
| Create | `src/components/section.tsx` |
| Create | `src/components/typography.tsx` |
| Create | `src/components/buttons.tsx` |
| Create | `src/components/status-badge.tsx` |
| Create | `src/components/metric-card.tsx` |
| Create | `src/components/ticker.tsx` |
| Create | `src/components/avatar-group.tsx` |
| Create | `src/components/three-background.tsx` |

