## EduRescue v1 – Prompt Playbook

This repo is wired to work with 4 core AI “roles”, stored in `/prompts`:

- `chat-01-founder-hq.md`  
  – Strategy, scope, systems, workflows, and prompt design.  
- `chat-02-architect.md`  
  – Full system architecture: FE + BE + DB + AI + infra.  
- `chat-03-frontend.md`  
  – Next.js 14 + React + Tailwind implementation (routes, layouts, components).  
- `chat-04-backend.md`  
  – Prisma, API routes/server actions, debugging, testing, deploy.

### How to use

1. Open a new ChatGPT (or similar) conversation.  
2. Paste the full contents of one of the prompt files as the **first message**.  
3. Give it a focused task related to its role, e.g.:
   - Founder HQ: “Refine our MVP scope for AI Assistant + Emergency Help.”
   - Architect: “Lock final Prisma schema + core API surface for v1.”
   - Frontend: “Scaffold `/student/assistant` page and student layout.”
   - Backend: “Review my `schema.prisma` and emergency API route and fix issues.”

Keep context for each role in its own chat so Architect ≠ Frontend ≠ Backend.
Rule: One role = one chat. Never mix Architect, Frontend, Backend in the same conversation.
