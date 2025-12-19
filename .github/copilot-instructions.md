# GitHub Copilot Instructions for EduRescue v1

## Project Overview

EduRescue v1 is a **24/7 Academic Emergency Platform** designed specifically for Bangladeshi students (SSC/HSC/University/Job exam aspirants). The platform provides instant AI-powered academic help with optional human expert verification for critical questions.

**Core Product Philosophy:**
- EduRescue v1 = **AI Assistant (default)** + **Emergency Help (escalation)**
- Panic-first UX: Students in academic emergencies get immediate AI answers
- Human verification available when stakes are high (exams, critical concepts)
- Mobile-first, Bangla-first design for Bangladesh

## Tech Stack

### Primary Technologies
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript + React
- **Styling:** Tailwind CSS + shadcn/ui components
- **Database:** Prisma ORM
- **Target:** Bangladesh market, mobile-first, bilingual (Bangla/English)

### Development Approach
- **MVP-first mindset:** Ship quickly, iterate based on real student feedback
- **Panic-first UX:** Optimize for students in emergency/urgent situations
- **Progressive enhancement:** AI first, human escalation when needed

## User Types

1. **Students** (Primary)
   - SSC/HSC/University students in Bangladesh
   - Job exam aspirants
   - Need instant help, often in panic mode during late-night study or pre-exam

2. **Experts** (Secondary)
   - Teachers/mentors who verify AI answers
   - Handle emergency tickets
   - Provide authoritative answers for critical questions

3. **Admin/Ops** (Support)
   - Monitor system health
   - Manage experts and resources

## Project Structure

### Key Routes (Next.js App Router)

**Student Area (`/student/*`):**
- `/student/assistant` - Main AI chat interface (default after login)
- `/student/emergency` - Emergency ticket status tracking
- `/student/notes` - Saved verified answers
- `/student/resources` - Curated study materials
- `/student/dashboard` - Quick overview

**Expert Area (`/expert/*`):**
- `/expert/inbox` - Ticket queue for verification
- `/expert/conversations/[id]` - Ticket details and verification UI

**Admin Area (`/admin/*`):**
- Dashboard, user management, system monitoring (post-MVP)

### Important Directories
- `/prompts` - Contains role-specific AI prompts for different development phases
- `/docs` - Project documentation including PROJECT_WIKI.md

## Code Style & Conventions

### General Principles
- **Keep it simple:** MVP over perfect, ship and iterate
- **Mobile-first:** Always consider phone screen sizes and touch interactions
- **Accessibility:** Support Bangla language, consider low-bandwidth scenarios
- **Type safety:** Use TypeScript strictly, avoid `any` types
- **Component composition:** Prefer small, reusable components

### Naming Conventions
- Use descriptive, meaningful names
- React components: PascalCase (e.g., `StudentAssistant`, `EmergencyTicket`)
- Files: kebab-case for routes, PascalCase for components
- Database models: PascalCase, descriptive (e.g., `User`, `EmergencyTicket`, `Conversation`)

### React/Next.js Best Practices
- Use App Router conventions (Server Components by default)
- Client Components only when needed (interactivity, hooks, browser APIs)
- Leverage Next.js features: Server Actions for mutations, API routes sparingly
- Use Tailwind utility classes, maintain consistency with shadcn/ui

### Database/Prisma
- Keep schema focused on MVP features
- Use descriptive field names
- Add proper relations and indexes
- Use enums for status fields (e.g., ticket status, user roles)

## Key Features & Flows

### Core User Flow
1. **Student asks question** → AI provides instant answer
2. **If critical/uncertain** → Student can escalate to emergency ticket
3. **Expert reviews** → Provides verified answer
4. **Student saves** → Answer stored in notes for revision

### Emergency Ticket System
- Statuses: REQUESTED → ASSIGNED → IN_REVIEW → VERIFIED/CLOSED
- Priority levels based on exam proximity and topic complexity
- Real-time updates for student peace of mind

## Development Workflow

### Working with AI Prompts
The `/prompts` directory contains specialized role-based prompts:
- `chat-01-founder-hq.md` - Strategy, scope, systems thinking
- `chat-02-architect.md` - System architecture decisions
- `chat-03-frontend.md` - UI/UX implementation guidance
- `chat-04-backend.md` - API, database, testing guidance

**Rule:** Keep contexts separate - one role per conversation, don't mix concerns

### When Suggesting Code
- **Prioritize MVP features** over nice-to-haves
- **Consider the user's panic state** - optimize for speed and clarity
- **Mobile-first responsive design** - test on small screens
- **Bilingual support** - expect Bangla content, ensure proper Unicode support
- **Graceful degradation** - handle offline/slow network scenarios

### Testing Philosophy
- Focus on critical paths: AI chat, emergency escalation, expert verification
- Manual testing for UX/panic scenarios
- Integration tests for ticket workflow
- Don't over-engineer tests for MVP

## Context-Specific Guidance

### When Working on Student Features
- Think "panic mode" - reduce cognitive load, clear CTAs
- Instant feedback is critical (loading states, progress indicators)
- Make escalation to emergency help obvious but not overwhelming
- Save/bookmark functionality should be effortless

### When Working on Expert Features
- Efficiency is key - batch operations, keyboard shortcuts
- Clear ticket prioritization (exam date, complexity, wait time)
- Easy access to conversation history and AI's answer
- Streamlined verification workflow

### When Working on AI Integration
- Always provide loading states - never leave users hanging
- Handle errors gracefully with actionable messages
- Consider rate limits and costs in design
- Provide fallbacks when AI is unavailable

## Important Notes

- **Target Market:** Bangladesh - consider local internet speeds, device types, language
- **Mission Critical:** Student panic → calm → solution is the core UX principle
- **Scalability:** Design for MVP scale, but don't create obvious bottlenecks
- **Privacy:** Student questions may be sensitive (exam pressure, academic struggles)

## References

- Main documentation: `/docs/PROJECT_WIKI.md`
- Role-specific prompts: `/prompts/` directory
- README: Project overview and prompt playbook

---

**When in doubt:** Prioritize shipping working features over perfect solutions. EduRescue solves real student panic - every hour matters.
