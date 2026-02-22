import Link from "next/link";
import { CaseStudyHero, CaseStudyDecisionImages } from "./CaseStudyImages";
import { Footer } from "./Footer";
import type { CaseStudy } from "@/data/caseStudies";

const PROBLEM_CARDS = [
  {
    title: "Noise",
    description:
      "Recruiting emails look like generic notifications. ATS confirmations, calendar invites, and actual offer updates all arrive with the same low visual priority. Signal gets lost in volume.",
  },
  {
    title: "Stale Data",
    description:
      "Manual trackers lag behind inbox reality. Status updates happen in email, not in spreadsheets. Most job seekers are days or weeks behind on their own pipeline.",
  },
  {
    title: "Anxiety",
    description:
      "Missing next steps matters more than organizing jobs. The fear is not forgetting a company name—it is missing a scheduling email or forgetting to follow up with a recruiter.",
  },
];

const GATES = [
  {
    label: "Gate 0 — Thread Inheritance",
    description:
      "Once a thread is marked as recruiting-related, all future messages in that thread are automatically flagged. This is the most important rule. Recruiter replies are often short, context-free, and would fail any classifier in isolation. Thread inheritance is what keeps them from being lost.",
  },
  {
    label: "Gate 1 — Hard Junk Sieve",
    description:
      "A blocklist of confirmed non-recruiting senders and patterns. Shipping notifications, password resets, and receipts are filtered before they reach any further logic.",
  },
  {
    label: "Gate 2 — Warm-Lead Router",
    description:
      "A broad, low-bar keyword and pattern match. The goal here is inclusion, not precision. Anything that could plausibly be recruiting-related is routed forward. False positives are acceptable; false negatives are not.",
  },
  {
    label: "Gate 3 — LLM Classifier",
    description:
      "The final gate. The LLM evaluates recruiting relevance, message type (intro, scheduling, rejection, offer), and stage delta. Critically, detection and stage advancement are separate decisions. A message can be recruiting-related without triggering a stage change.",
  },
];

const SYSTEM_PRINCIPLES = [
  "Never stop listening to known recruiting threads",
  "Prefer over-inclusive routing to avoid missed interviews",
  "Separate message detection from stage movement",
];

const AI_SYSTEM_CARDS = [
  {
    title: "Built around the real failure cost",
    description:
      "Guildy is intentionally biased toward catching more potentially job-related emails, even if that means a few extra false positives. A false positive is easy to ignore or clean up. Missing a real interview or scheduling email is the bigger failure. The routing and classification logic is designed around that tradeoff.",
  },
  {
    title: "Internal log for near-misses (Ghost Log)",
    description:
      "If an email passes the first routing layer but is not added to the pipeline after classification, it is still logged internally. This Ghost Log is a QA and tuning tool for reviewing edge cases, improving prompts, and refining routing rules over time. It is not a user-facing feature.",
  },
  {
    title: "Rules first, LLM second",
    description:
      "Rules handle broad inbox filtering and route only plausibly relevant emails forward. The LLM handles the harder classification decisions after that first pass. This split keeps the system cheaper and faster, while improving accuracy by reducing noise before the model sees anything.",
  },
  {
    title: "Designed for ongoing tuning",
    description:
      "We can inspect missed cases and use them to improve the rules and prompts. That lets the system get more reliable over time without running the LLM on every email.",
  },
];

const WHAT_MADE_THIS_HARD = [
  "Linguistic variance: A startup recruiter writing informally and an enterprise ATS sending structured HTML notifications require the same detection system. The vocabulary, tone, and structure vary by two orders of magnitude.",
  "Contextual decay and thread ambiguity: Short follow-up replies contain no stage information on their own. Knowing that a reply belongs to a recruiting thread—and that a previous message set up an interview—requires carrying context across the full thread history.",
];

const PRODUCT_FEATURES = [
  "Pipeline board + details panel",
  "Stage timeline",
  "Thread summary",
  "Next action",
  "Interview prep",
  "Manual override",
];

const AT_A_GLANCE = [
  "Built a Gmail-native pipeline system that converts recruiting email threads into structured job stages",
  "Designed a thread-first detection architecture to reduce missed recruiting updates",
  "Shipped as a solo designer using AI-assisted development tools",
  "Private beta users replaced manual spreadsheet tracking with Guildy as their source of truth",
];

const IMPACT = [
  "Replaced spreadsheet tracking for early users",
  "Reduced manual status updating to near zero across active pipelines",
  "Increased user confidence that they were not missing recruiter updates",
  "Established a foundation for interview prep tied to live pipeline context",
];

const WHATS_NEXT = [
  "Voice mock interview with scoring and feedback",
  "Calendar-aware prep that surfaces automatically before scheduled interviews",
  "Stronger handling of edge cases: referrals, cold outreach, multi-recruiter threads",
  "Token/referral monetization loop",
];

export function GuildyCaseStudy({ study }: { study: CaseStudy }) {
  const heroSrc = `/case-studies/${study.slug}/${study.heroImage}`;
  const imageBase = `/case-studies/${study.slug}`;

  return (
    <>
      <article className="max-w-wide mx-auto px-6 md:px-10">
        {/* Header */}
        <header className="pt-36 pb-16 md:pt-48 md:pb-24">
          <Link
            href="/"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            &larr; Back
          </Link>
          <h1 className="mt-8 text-hero font-medium tracking-tight text-balance">
            {study.title}
          </h1>
          {study.tagline && (
            <h2 className="mt-6 text-2xl md:text-3xl font-medium tracking-tight leading-snug">
              {study.tagline}
            </h2>
          )}
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div>
              <span className="text-muted">Role</span>
              <p className="mt-1 font-medium">{study.role}</p>
            </div>
            <div>
              <span className="text-muted">Timeline</span>
              <p className="mt-1 font-medium">{study.timeline}</p>
            </div>
            <div>
              <span className="text-muted">Team</span>
              <p className="mt-1 font-medium">{study.team}</p>
            </div>
          </div>
          {study.builtWith && study.builtWith.length > 0 && (
            <div className="mt-6">
              <span className="text-sm text-muted">Built with</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {study.builtWith.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-neutral-200 text-neutral-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Hero GIF */}
        <CaseStudyHero src={heroSrc} alt="Guildy.ai product demo" />

        {/* At a Glance */}
        <div className="max-w-content mx-auto mb-20 p-8 bg-neutral-50 rounded-sm">
          <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
            At a Glance
          </h2>
          <ul className="space-y-2">
            {AT_A_GLANCE.map((item, i) => (
              <li key={i} className="text-body flex gap-3">
                <span className="text-muted shrink-0">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-content mx-auto">
          {/* 1. Overview */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Overview
            </h2>
            <p className="text-body-lg leading-relaxed">
              Guildy is a Gmail-native intelligence layer for job seekers. It
              syncs your Gmail, detects recruiting-related email activity,
              creates and updates pipeline items automatically, surfaces next
              actions and interview prep, and replaces manual spreadsheet
              tracking entirely. The core thesis: the inbox is already the
              source of truth for any active job search. Guildy makes that true
              structurally, not just philosophically.
            </p>
          </section>

          {/* 2. The Problem */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              The Problem
            </h2>
            <h3 className="text-heading-2 font-medium tracking-tight mb-8">
              The High Cost of Lost Context
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PROBLEM_CARDS.map((card, i) => (
                <div
                  key={i}
                  className="p-6 border border-neutral-200 rounded-sm"
                >
                  <h4 className="text-sm font-semibold mb-3">{card.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 3. The Solution — full bleed section for centerpiece feel */}
        <section className="mb-20">
          <div className="max-w-content mx-auto">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              The Solution
            </h2>
            <h3 className="text-heading-2 font-medium tracking-tight mb-8">
              A Three-Gate Intelligence Architecture
            </h3>
            <p className="text-body-lg leading-relaxed mb-10">
              Guildy runs every incoming email through a layered detection
              system. Rather than asking the LLM to judge every message from
              scratch, the architecture separates signal routing from
              classification—keeping costs down and precision up.
            </p>
            <div className="space-y-6 mb-12">
              {GATES.map((gate, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-sm text-muted font-medium mt-1 shrink-0 tabular-nums">
                    0{i}
                  </span>
                  <div>
                    <p className="text-body font-semibold mb-1">{gate.label}</p>
                    <p className="text-body text-muted leading-relaxed">
                      {gate.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture diagram */}
          <div className="max-w-content mx-auto">
            <CaseStudyDecisionImages
              images={[
                {
                  src: `${imageBase}/pipeline-detection- architecture.png`,
                  caption: "Guildy's Gmail-first recruiting intelligence architecture: thread inheritance, broad routing, and LLM classification.",
                },
              ]}
            />
          </div>

          {/* System Principles callout */}
          <div className="max-w-content mx-auto mt-10">
            <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-sm">
              <h4 className="text-xs uppercase tracking-wider text-muted mb-4">
                System Principles
              </h4>
              <ul className="space-y-2">
                {SYSTEM_PRINCIPLES.map((principle, i) => (
                  <li key={i} className="text-body flex gap-3">
                    <span className="text-muted shrink-0">—</span>
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="max-w-content mx-auto">
          {/* 4. AI System Design Decisions */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              AI System Design Decisions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {AI_SYSTEM_CARDS.map((card, i) => (
                <div
                  key={i}
                  className="p-6 border border-neutral-200 rounded-sm"
                >
                  <h4 className="text-body font-semibold mb-3">{card.title}</h4>
                  <p className="text-body text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 5. What Made This Hard */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              What Made This Hard
            </h2>
            <div className="space-y-4">
              {WHAT_MADE_THIS_HARD.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-sm text-muted font-medium mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 6. Product UX */}
        <section className="mb-20">
          <div className="max-w-content mx-auto mb-8">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Product UX
            </h2>
            <ul className="space-y-2">
              {PRODUCT_FEATURES.map((feature, i) => (
                <li key={i} className="text-body flex gap-3">
                  <span className="text-muted shrink-0">-</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard screenshot */}
          <CaseStudyDecisionImages
            images={[
              {
                src: `${imageBase}/guildy dashboard.png`,
                caption: "Pipeline board with job details panel",
              },
            ]}
          />

          {/* Mobile screenshots */}
          <div className="mt-10">
            <p className="text-xs uppercase tracking-wider text-muted mb-8 max-w-content mx-auto">Mobile</p>
            <CaseStudyDecisionImages
              images={[
                {
                  src: `${imageBase}/mobile 1.png`,
                  caption: "Pipeline stages and job details on the go.",
                },
                {
                  src: `${imageBase}/mobile 2.png`,
                  caption: "Context-aware interview prep tied to the active role.",
                },
              ]}
              layout="side-by-side"
            />
          </div>
        </section>

        <div className="max-w-content mx-auto">
          {/* 7. Impact */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Impact
            </h2>
            <ul className="space-y-3">
              {IMPACT.map((item, i) => (
                <li key={i} className="text-body-lg leading-relaxed flex gap-3">
                  <span className="text-muted shrink-0">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 8. What I Would Do Next */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              What I Would Do Next
            </h2>
            <ul className="space-y-3">
              {WHATS_NEXT.map((item, i) => (
                <li key={i} className="text-body-lg leading-relaxed flex gap-3">
                  <span className="text-muted shrink-0">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>

      <Footer />
    </>
  );
}
