# EduRescue – Portable Project Memory (Repo Wiki)

This document is the **Portable Project Memory System** for EduRescue.  
যেকোনো নতুন ChatGPT / AI সহকারীকে শুধু এই ডকটি দেখালেই প্রজেক্টের full context পেয়ে যাবে।

---

# 0. EduRescue v1 – Project Setup

This checklist describes how to get the EduRescue v1 project running locally from a fresh clone.

## 0.1 Prerequisites

- Recent **Node.js LTS** installed.
- Git and a GitHub account.
- Repo cloned:

```bash
git clone https://github.com/<your-user>/edurescu-v1.git
cd edurescu-v1


(Replace <your-user> with your real GitHub username.)

Section 01: Project Summary
1.1 App Name

EduRescue – Bangladesh-এর ২৪/৭ Academic Emergency Platform

1.2 Goal

Bangladesh-এর SSC / HSC / University / Job-exam students যেন:

২৪/৭ সময়ে academic emergency অবস্থায় থাকে না, কারণ তারা instant help পায়

দ্রুত AI first answer এবং প্রয়োজনে human expert verified answer পায়

এক জায়গাতেই problem → solution → saved notes → revision করতে পারে

1.3 Target Users

Primary:

SSC / HSC / University students (Bangladesh, Bangla-first, phone-first)

Secondary:

Job exam aspirants

Subject experts / teachers (as “Experts”)

Light Admin / Ops users (monitor tickets, manage experts/resources)

1.4 Problem Statement

Students:

রাতের বেলা বা exam-এর আগে panic mode-এ চলে যায়

Private tutor / coaching সবসময় reachable হয় না

Facebook group / YouTube search করতে করতে সময় নষ্ট হয়

Clear, exam-focused explanation + human verification একসাথে পায় না

EduRescue solves:

Panic → AI answer → optional emergency escalation → verified answer

সবকিছু এক জায়গায়, একটাই calm, focused interface-এর মধ্যে

1.5 One-line Pitch

EduRescue is a 24/7 academic emergency platform for Bangladeshi students where AI answers first and human experts verify when it really matters.

Section 02: Feature List (MVP → V2 → Future)
2.1 Page List
Student Area (MVP)

Routes (Next.js App Router):

/student/assistant – AI Assistant (default after login, main chat)

/student/emergency – My Emergency Tickets (status list)

/student/notes – Saved Notes from verified answers

/student/resources – Curated Resources (syllabus, formula sheets, key links)

/student/dashboard – Light overview (quick entry into chat & tickets)

/student/conversations/[id] – Specific conversation view (optional if assistant page already shows details)

Expert Area (MVP)

/expert/inbox – Ticket queue (REQUESTED / ASSIGNED / IN_REVIEW)

/expert/conversations/[id] – Conversation + ticket detail + verify UI

Admin/Ops (Post-MVP / simple)

/admin বা /expert/admin – Basic ticket overview, exports, expert management (minimum viable)

2.2 Feature Breakdown by Phase
MVP (must have)

Student:

Login / Register (basic auth)

Land on /student/assistant by default

Send question (text + optional image)

Receive AI answer in chat

Escalate to Emergency Help from chat (“Need Human Help?”)

See ticket status in /student/emergency

Save important answers as Notes (/student/notes)

Expert:

Login as Expert

See ticket inbox (/expert/inbox)

Open full conversation context (/expert/conversations/[id])

Write verified answer (expert message)

Mark ticket VERIFIED

Platform:

Basic roles: STUDENT / EXPERT / ADMIN

Prisma schema in place

Minimal API endpoints for chat + tickets + notes

V2 (next wave)

Better ticket assignment / matching logic

Simple analytics for Ops (number of tickets, response time)

Basic student history: list of past conversations in assistant

More polished Resources (category filters, tags)

Basic mobile optimizations & offline handling (as feasible)

Future (vision)

Institution integration (schools / coaching centers)

Group sessions / live classes for trending panic topics

Recommendation engine for weak topics

Exam-specific bundles (e.g., “HSC Accounting Crash Help”)

Paid tiers / subscription plans (with usage counters & limits)

2.3 Component List (High-level)

Layout components:

StudentShell – Overall student layout (sidebar + topbar + content)

StudentSidebar – Nav items (Dashboard, Assistant, Emergency, Resources, Notes)

StudentTopbar – Greeting, minimal profile controls

ExpertShell – Expert layout (sidebar/topbar)

ExpertSidebar / ExpertTopbar – Ticket navigation

Assistant components:

AIAssistantPage – AI chat experience for student

ChatShell – Layout for message list + composer

ChatMessageList – Displays messages (student / AI / expert)

ChatMessageBubble – Styled individual messages

ChatComposer – Input box, send button, optional attachment upload

SuggestedPrompts – Chips for starter questions

EmergencyEscalationModal – UI to confirm emergency request

Emergency components:

EmergencyRequestsList – List of emergency tickets (student or expert view)

TicketStatusBadge – Visual representation of status

TicketDetailCard – Details view for a single ticket

Notes & Resources:

SimplifiedNotesPage – Shows a list of saved notes

NoteCard – Individual note

SimplifiedResourcesPage – Curated list of resources

ResourceCard – Single resource item

UI atoms (shadcn/ui style):

Button, Card, Badge, EmptyState, Input, Textarea, Modal

Toaster / notifications (sonner-based)

2.4 User Flows (Core)
Student Flow: Panic → Verified Answer

Student logs in → lands on /student/assistant.

Types question + optionally uploads an image.

System creates Conversation (if new) and student Message.

AI is called; AI Message is saved & shown in chat.

Student feels unsure → clicks “Need Human Help?”.

System creates EmergencyTicket linked to that Conversation.

Expert sees ticket in /expert/inbox (status: REQUESTED).

Expert opens conversation → sees full history (student + AI).

Expert writes verified explanation (EXPERT Message) and marks ticket VERIFIED.

Student sees expert answer in the same chat, plus updated ticket status in /student/emergency.

Student clicks “Save as Note” → Note created, appears in /student/notes.

Expert Flow

Expert logs in → lands on /expert/inbox.

Sees list of tickets with status & time.

Clicks one → /expert/conversations/[id] view: full context (student msgs + AI msgs).

Claims ticket (status → ASSIGNED), then moves to IN_REVIEW.

Writes verified answer → ticket status → VERIFIED.

Optionally closes ticket after some time → CLOSED.

2.5 Pain Points Addressed

For Students:

Panic & confusion at odd hours → ২৪/৭ AI first response.

Low trust in pure AI → human expert verification for important questions.

Scattered knowledge (FB, YouTube, coaching notes) → centralized Notes & Resources.

For Experts:

Random DMs & messy requests → structured ticket inbox.

No context when student asks → full conversation history visible.

For Admin / Ops (future):

No visibility of demand → ticket metrics & filters.

Hard to manage experts manually → simple assignment & status flows.

Section 03: Architecture
3.1 Route Structure (Next.js 14 – App Router)
app/
  (auth)/
    login/page.tsx                -> /login
    register/page.tsx             -> /register

  (student)/
    layout.tsx                    -> shared layout for all /student routes
    assistant/page.tsx            -> /student/assistant
    emergency/page.tsx            -> /student/emergency
    notes/page.tsx                -> /student/notes
    resources/page.tsx            -> /student/resources
    dashboard/page.tsx            -> /student/dashboard
    conversations/[id]/page.tsx   -> /student/conversations/:id

  (expert)/
    layout.tsx                    -> shared layout for all /expert routes
    inbox/page.tsx                -> /expert/inbox
    conversations/[id]/page.tsx   -> /expert/conversations/:id

  api/
    ... (see API list below)

3.2 DB Schema (Prisma)

Canonical schema (dev = SQLite, prod = Postgres):

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite" // change to "postgresql" in production
  url      = env("DATABASE_URL")
}

enum Role {
  STUDENT
  EXPERT
  ADMIN
}

enum SenderRole {
  STUDENT
  AI
  EXPERT
  SYSTEM
}

enum TicketStatus {
  REQUESTED
  ASSIGNED
  IN_REVIEW
  VERIFIED
  CLOSED
}

enum ConversationStatus {
  ACTIVE
  CLOSED
}

model User {
  id        String   @id @default(cuid())
  name      String?
  email     String   @unique
  role      Role     @default(STUDENT)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  conversations    Conversation[]    @relation("StudentConversations")
  ticketsAsStudent EmergencyTicket[] @relation("StudentTickets")
  ticketsAsExpert  EmergencyTicket[] @relation("ExpertTickets")
  notes            Note[]
  messages         Message[]
}

model Conversation {
  id        String   @id @default(cuid())
  studentId String
  status    ConversationStatus @default(ACTIVE)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  student  User       @relation("StudentConversations", fields: [studentId], references: [id], onDelete: Cascade)
  messages Message[]
  ticket   EmergencyTicket?

  @@index([studentId, updatedAt])
}

model Message {
  id             String     @id @default(cuid())
  conversationId String
  senderRole     SenderRole
  senderId       String?
  text           String
  attachmentUrl  String?

  createdAt      DateTime   @default(now())

  conversation   Conversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)
  sender         User?        @relation(fields: [senderId], references: [id], onDelete: SetNull)

  @@index([conversationId, createdAt])
}

model EmergencyTicket {
  id             String       @id @default(cuid())
  conversationId String       @unique
  studentId      String
  expertId       String?

  status         TicketStatus @default(REQUESTED)

  createdAt      DateTime     @default(now())
  updatedAt      DateTime     @updatedAt
  verifiedAt     DateTime?

  conversation Conversation @relation(fields: [conversationId], references: [id], onDelete: Cascade)
  student      User        @relation("StudentTickets", fields: [studentId], references: [id], onDelete: Cascade)
  expert       User?       @relation("ExpertTickets", fields: [expertId], references: [id], onDelete: SetNull)

  @@index([studentId, updatedAt])
  @@index([expertId, status, updatedAt])
}

model Note {
  id             String   @id @default(cuid())
  studentId      String
  title          String?
  content        String
  conversationId String?

  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  student User @relation(fields: [studentId], references: [id], onDelete: Cascade)

  @@index([studentId, updatedAt])
  @@index([conversationId])
}

model Resource {
  id          String   @id @default(cuid())
  title       String
  description String?
  url         String?

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

3.3 API List (Logical Operations + Suggested Routes)

Auth / User

auth.login → POST /api/auth/login

auth.logout → POST /api/auth/logout

auth.me → GET /api/auth/me

users.getMe → GET /api/users/me

Conversations & Messages & AI

conversations.create → POST /api/conversations

conversations.get → GET /api/conversations/[id]

messages.list → GET /api/conversations/[id]/messages

messages.send → POST /api/conversations/[id]/messages

ai.generateReply → POST /api/assistant

Calls LLM + writes AI Message.

Emergency Tickets

tickets.create → POST /api/tickets

tickets.get → GET /api/tickets/[id]

tickets.listMy → GET /api/tickets/my (student)

tickets.inbox → GET /api/tickets/inbox (expert)

tickets.assignToMe → POST /api/tickets/[id]/assign

tickets.setInReview → POST /api/tickets/[id]/in-review

tickets.verify → POST /api/tickets/[id]/verify

tickets.close → POST /api/tickets/[id]/close

Expert Messaging

experts.sendMessage → POST /api/experts/tickets/[id]/messages

Adds EXPERT Message in the linked conversation.

Notes

notes.createFromConversation → POST /api/notes/from-conversation

notes.listMy → GET /api/notes/my

notes.get → GET /api/notes/[id]

notes.update → PATCH /api/notes/[id]

notes.delete → DELETE /api/notes/[id]

Resources

resources.list → GET /api/resources

resources.get → GET /api/resources/[id]

3.4 State Logic (High-level)

Server state:

Conversations, messages, tickets, notes, resources → Prisma + DB

সব mutation যাবে API routes দিয়ে (উপরের লিস্ট অনুযায়ী)

Client state (MVP):

Assistant view-তে message list-এর জন্য local React useState (hydrated from messages.list)

New message-এর জন্য simple optimistic update

Emergency button → API call → UI refresh (re-fetch tickets or use returned payload)

Auth state:

Session via NextAuth (or similar)

প্রতিটি API তে session.user.role (STUDENT / EXPERT / ADMIN) দেখে authorization

Error handling (MVP):

API routes clear error message রিটার্ন করবে

UI side sonner toast দিয়ে failure দেখাবে (e.g., ticket creation failed)

Section 04: Figma & UI Links

NOTE: Fill in with your real links & IDs as needed.

4.1 Main Figma File

Figma Site / Prototype:

https://edurescue.figma.site/

(Inside this, pages like “Student Dashboard”, “AI Assistant”, “Emergency”, etc.)

4.2 Figma Frames (suggested list)

Student – AI Assistant (Home)

Student – Emergency Tickets

Student – Notes

Student – Resources

Expert – Inbox

Expert – Conversation & Verify

(নিজের আসল frame নাম দিয়ে update করবে।)

4.3 Design System Tokens

Figma-তে (এবং চাইলে এখানে) আলাদা section রাখো:

Color tokens: primary, accent, danger, background, surface, text-muted

Typography: heading-xl, heading-md, body, caption

Spacing / radius: radius-lg, radius-xl, spacing-sm, spacing-md

4.4 Screenshots (optional)

Repo-তে /docs/ui/ folder বানিয়ে link করতে পারো:

docs/ui/student-assistant.png

docs/ui/student-emergency.png

docs/ui/expert-inbox.png

Section 05: ChatGPT Prompts (Master Prompts)

এগুলোই তোমার Portable AI Roles. নতুন কোনো chat এ একেকটা prompt use করে ওই role-টা recreate করবে।

5.1 Chat 01 → Founder HQ (FounderOS v3.0)

Use as system / first message in a new “Founder HQ” chat:

You are Founder HQ (FounderOS v3.0) — my AI Co-Founder, Chief of Staff,
Master Prompt Engineer, Systems Thinker, and Execution Engine for the EduRescue project.

Your job:
Turn any idea into a complete system → create the workflows → generate the prompts
→ execute the key step → tell me exactly what to do next.

Core behaviors:
- Think like a serial founder (MVP-first, leverage-first).
- Prefer “can ship this week” over “perfect someday”.
- Surface trade-offs and opportunity cost.

For EVERY answer, always respond in this structure:

1. System Map
2. Plan
3. Best Prompt
4. Execution
5. Example Output
6. Next Step

Rules:
- Be direct, honest, and founder-brutal when needed.
- Default to action over analysis.
- Surface hidden assumptions and risks.
- MVP-first, panic-first UX for EduRescue.

Context:
- EduRescue is a 24/7 academic emergency platform for Bangladeshi students.
- Core = AI Assistant (default) + Emergency Help (escalation).
- Use the attached Project Wiki as the single source of truth.

5.2 Chat 02 → Worldclass Architect
You are “EduRescue Worldclass System Architect v1.0”.

Mission:
Design and maintain a pragmatic, scalable architecture for EduRescue v1:
- Next.js 14 App Router + React + TS + Tailwind + shadcn/ui
- Prisma ORM + SQLite dev + Postgres prod
- Modular monolith backend (no premature microservices)
- LLM integration for AI Assistant

Responsibilities:
1) Clarify requirements from the Project Wiki.
2) Maintain the data model (User, Conversation, Message, EmergencyTicket, Note, Resource).
3) Define APIs (see Section 3.3) and module boundaries (auth, conversations,
   emergency-tickets, notes, resources, experts).
4) Propose improvements without breaking the MVP timeline.
5) Produce implementation roadmaps for the dev team.

Output format:
1) Requirements Summary
2) High-Level Architecture Diagram (Mermaid or text)
3) Module Breakdown table (module → responsibilities → entities → endpoints)
4) Prisma Model Plan / changes (if any)
5) API surface changes / recommendations
6) Implementation Phases (Phase 1–4)
7) Risks & mitigation

Constraints:
- Design for a tiny team.
- Panic-first UX and reliability > fancy architecture.
- Never contradict the Project Wiki; if you must change something, justify clearly.

First task:
Review the Project Wiki and restate EduRescue v1 in your own words,
then list any open technical questions you need answered.

5.3 Chat 03 → Frontend Builder (Next.js + Tailwind)
You are “EduRescue Frontend Builder v1.0” — a senior Next.js 14 + React + TypeScript
+ Tailwind engineer.

Mission:
Turn the EduRescue architecture + Figma designs into clean, production-ready frontend code
using the App Router and shadcn/ui.

Constraints:
- Next.js 14 App Router
- TypeScript everywhere
- Tailwind CSS + shadcn/ui
- Folder structure as in Section 3.1 (student/expert layouts and pages)
- MVP-first, mobile-friendly but no over-engineering

Responsibilities:
1) Implement layouts and pages:
   - /student/assistant, /student/emergency, /student/notes, /student/resources, /student/dashboard
   - /expert/inbox, /expert/conversations/[id]
2) Build reusable components:
   - Layout shells, chat UI, ticket lists, notes/resources list
3) Wire to APIs from the Project Wiki (or mock them if backend not ready).
4) Highlight any UX gaps vs Figma.

Output format:
1) Short explanation of approach
2) File tree snippet (new/changed files)
3) Full code blocks for key files (ready to paste)
4) TODO comments for backend wiring
5) Next smallest dev step

First task:
Using the Project Wiki, implement the student shell + AI Assistant page skeleton
for /student/assistant (no real data yet, mocked messages are fine).

5.4 Chat 04 → Backend + Debug + Testing + Deploy Specialist
You are “EduRescue Backend, Debug, Testing & Deploy Specialist v1.0”.

Mission:
Own the backend of EduRescue v1:
- Prisma schema (see Project Wiki)
- API routes/server actions
- Error handling & debugging
- Minimal tests
- Deploy strategy (e.g., Vercel + managed Postgres)

Responsibilities:
1) Keep prisma/schema.prisma aligned with the Wiki.
2) Implement API endpoints described in Section 3.3.
3) Help diagnose and fix runtime/TypeScript errors.
4) Propose minimal tests for critical flows (chat send, emergency escalate, verify).
5) Produce a deploy checklist (env vars, migrations, smoke tests).

When I paste:
- Error logs
- schema.prisma
- app/api/* code

You respond with:
1) High-level assessment (3–7 bullets)
2) Backend architecture plan / file layout
3) Prisma & data notes (diffs if needed)
4) API fix/implementation code snippets
5) Debugging steps (what to change, where)
6) Testing & deploy checklist
7) Clear next action for me (1–2 hours of work)

Constraints:
- No heavy infra; keep it simple.
- Make it easy for a single dev to run: npm install, npx prisma migrate dev, npm run dev.

First task:
Review the Project Wiki schema + API list and propose the first 3 API routes
we should implement for a working chat + emergency flow.

## EduRescue v1 Development OS – 4 Chats + 1 Agent (Locked)

We build EduRescue v1 using four thinking chats and one coding agent.

### Core idea
- **Chat = Brain** → decides and designs.
- **Agent = Hands** → writes code and opens PRs.

### 4 Chats (Brain)

1. **Chat-01 – Founder HQ**
   - Scope lock, priority, “next step”.
   - Decides who does what and when to merge PRs.
   - Output: today’s plan + exact Agent ticket text.

2. **Chat-02 – Architect**
   - Designs Prisma schema and API contracts.
   - Output: final schema + list of endpoints (copy-paste spec).

3. **Chat-03 – Frontend**
   - Turns Figma/product ideas into routes, layouts, components, and UI state.
   - Output: page/layout/component list + UI plan (props, states, interactions).

4. **Chat-04 – Backend**
   - Plans API route implementation, handles debugging, and prepares deploy checklists.
   - Output: file-by-file code plan + edge cases and error handling notes.

### 1 Agent (Hands)

- **GitHub Copilot Agent**
  - Implements the specs from the 4 Chats.
  - Writes code, edits files, and opens pull requests.
  - Rule: always receives **narrow & exact tasks**:
    - explicit file paths,
    - clear constraints,
    - acceptance criteria.
  - Never decides product scope or architecture by itself.

### Golden Loop

1. **Chat decides**  
   - Chat-01/02/03/04 produce clear specs and acceptance criteria.

2. **Agent implements (PR)**  
   - Copilot Agent reads the spec and creates a focused PR.

3. **Chat reviews**  
   - Chats help review the PR, request changes, and decide when to merge.

### Default Order for a Full Feature

For a typical feature we follow:

> Chat-01 → Chat-02 → Agent → Chat-03 → Agent → Chat-04 → Agent → Chat-01 (review/merge)

We only include the chats that are actually needed for the current feature (MVP-first).

End of Portable Project Memory Wiki
