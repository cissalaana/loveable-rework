

## Plan: Detailed Sprint Sections for Case Studies

The reference image shows a portfolio with detailed sprint breakdowns including titled sections (Discovery Sprint 1), sub-sections (UX Outcomes, Key Insights, Hypotheses) with bullet points, bold text, and cards. The goal is to allow rich, sprint-by-sprint documentation with inline images.

### Data Model Changes (`src/data/projects.ts`)

Add a new optional `sprints` field to the `Project` interface:

```ts
interface SprintContent {
  type: "text" | "bullets" | "image" | "cards" | "quote";
  title?: string;        // sub-section title (e.g. "Key Insights", "UX Outcomes")
  text?: string;         // for type "text"
  items?: string[];      // for type "bullets"
  image?: string;        // for type "image" — path like "/assets/sprint1-flow.png"
  imageCaption?: string;
  cards?: { icon?: string; title: string; desc: string }[]; // for type "cards" (hypotheses, etc.)
}

interface Sprint {
  label: string;    // e.g. "05. DESIGN DISCOVERY"
  title: string;    // e.g. "The Art of Reduction"
  subtitle?: string;
  sections: SprintContent[];
}

// Added to Project interface:
sprints?: Sprint[];
```

This flexible block-based structure lets you compose each sprint from different content types — paragraphs, bullet lists, images, and cards — in any order.

### UI Changes (`src/pages/CaseStudyPage.tsx`)

Add a new "Sprints" rendering section (placed after Personas, before Metrics) that:

- Renders each sprint with a numbered label, large title, and optional subtitle
- Iterates over `sections` and renders each block by type:
  - **text**: paragraph with the existing body style
  - **bullets**: a titled group with bold title + bullet list items (matching the reference's "Key Insights" style with bold sub-headers)
  - **image**: full-width rounded image with optional caption — same pattern as `featuredImage`
  - **cards**: horizontal grid of cards with icon, title, description (like the Hypotheses section in the reference)
  - **quote**: styled blockquote
- Alternates background between `bg-background` and `#F7F0EA` per sprint for visual rhythm
- Uses the existing reveal animations and typography classes

### Usage Example

```ts
sprints: [
  {
    label: "01. DISCOVERY",
    title: "Entendendo o Problema",
    subtitle: "Neste sprint, focamos em entender...",
    sections: [
      { type: "text", title: "UX Outcomes", text: "Business Case, Key Insights..." },
      { type: "bullets", title: "Key Insights", items: [
        "85% das estudantes não se sentem seguras",
        "50% dos incidentes ocorrem fora dos centros",
      ]},
      { type: "image", image: "/assets/guardia-sprint1-map.png", imageCaption: "Mapa de calor de incidentes" },
      { type: "cards", title: "Hipóteses", cards: [
        { icon: "⚡", title: "Acionamento rápido", desc: "Usuárias precisam de..." },
        { icon: "📍", title: "Localização em tempo real", desc: "Seguranças precisam..." },
      ]},
    ],
  },
],
```

### Visual Style

Follows the reference image's clean, editorial layout while keeping the existing portfolio's warm color palette, typography (Cormorant Garamond for headings, Plus Jakarta Sans for body), and spacing patterns. Each sprint section acts as a full-width page section with generous padding.

### Files to Edit

1. **`src/data/projects.ts`** — Add `SprintContent`, `Sprint` interfaces + `sprints` field. Add example sprint data for Guardiã.
2. **`src/pages/CaseStudyPage.tsx`** — Add sprint renderer section between Personas and Metrics.

