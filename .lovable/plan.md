

## Plan: Detailed Sprint Sections for Case Studies

### Summary

Add a flexible, block-based sprint documentation system to case studies, allowing rich content (text, bullets, images, cards, quotes) organized by sprint/phase. This mirrors the editorial portfolio style from the reference image while keeping your existing visual identity.

### Data Model Changes — `src/data/projects.ts`

Add new interfaces and an optional `sprints` field to `Project`:

- `SprintContent` — supports types: `text`, `bullets`, `image`, `cards`, `quote`, each with relevant optional fields (title, text, items, image, imageCaption, cards array)
- `Sprint` — has `label` (e.g. "01. DISCOVERY"), `title`, optional `subtitle`, and `sections: SprintContent[]`
- Add `sprints?: Sprint[]` to the `Project` interface
- Populate Guardia with one example sprint showing all content types as a template

### UI Changes — `src/pages/CaseStudyPage.tsx`

Insert a new sprints renderer **after the Personas section** (line ~245) and **before Metrics** (line ~247):

- Each sprint gets a full-width section with alternating backgrounds (`bg-background` / `#F7F0EA`)
- Renders the sprint label (small uppercase tracking), large title (Cormorant Garamond), and subtitle
- Iterates `sections` and renders by type:
  - **text** — paragraph with optional bold sub-title
  - **bullets** — titled group with bullet list items
  - **image** — full-width rounded image with optional caption below
  - **cards** — responsive grid of cards with optional icon, title, description
  - **quote** — styled blockquote with left border accent
- Uses existing `reveal` animation classes for scroll entrance

### Files Changed

1. `src/data/projects.ts` — interfaces + example sprint data for Guardia
2. `src/pages/CaseStudyPage.tsx` — sprint section renderer

