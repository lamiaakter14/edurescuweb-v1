# EduRescue v1 — Golden Loop Reference Card

## Default Order for a Full Feature
Chat-01 → Chat-02 → Agent → Chat-03 → Agent → Chat-04 → Agent → Chat-01 (review/merge)

## Role Boundaries (Do / Don't)

| Role | Do | Don't |
|------|----|----|
| Chat-01 | Scope, prioritize, orchestrate | Write production code |
| Chat-02 | Design schema, API contracts | Implement routes or UI |
| Chat-03 | Build pages, layouts, components | Design database or implement API |
| Chat-04 | Implement API routes, debug, deploy | Change schema without Chat-02, design UI |
| Agent | Execute exact specs, open PRs | Decide scope or architecture |

## Handoff Format (Chat → Agent)

**FROM:** Chat-03  
**TO:** Agent  
**TASK:** Implement ChatMessageBubble component  
**SPEC:**
- File:  `components/chat/ChatMessageBubble.tsx`
- Props: `{ role:  'STUDENT' | 'AI' | 'EXPERT', text: string, timestamp: Date }`
- Style:  Tailwind, left-align for STUDENT, right-align for AI/EXPERT
- Do NOT add any API calls
- Acceptance:  Can render 3 message types with correct alignment

**DELIVERABLE:** PR with component + usage example in Storybook or page

---

## When to Skip a Chat

- Skip Chat-02 if no schema/API changes (e.g., pure UI polish)
- Skip Chat-03 if no UI (e.g., background job, API-only feature)
- Skip Chat-04 if no backend (e.g., static Figma → HTML conversion)

Always include Chat-01 (decides what to build) and Agent (writes code).
