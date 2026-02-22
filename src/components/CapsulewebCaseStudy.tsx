import Link from "next/link";
import { CaseStudyHero, CaseStudyDecisionImages } from "./CaseStudyImages";
import { Footer } from "./Footer";
import type { CaseStudy } from "@/data/caseStudies";

const FRICTION_CARDS = [
  {
    title: "Too many decisions",
    description:
      "Styling choices appear before users see any output. Most people do not want to design a system—they want a page that is clear and live.",
  },
  {
    title: "Too much setup",
    description:
      "Existing builders ask users to configure before they can preview. The effort required upfront does not match the simplicity of what most people actually need.",
  },
  {
    title: "Editing instead of publishing",
    description:
      "Time spent tweaking layouts and fonts is the wrong optimization for lightweight use cases. Most users would trade control for speed.",
  },
];

const SYSTEM_STEPS = [
  {
    label: "01 — Intent Capture",
    description:
      "A lightweight input flow captures site type, purpose, tone, and basic content direction. The form is short on purpose—it gathers enough signal without becoming a brief-writing exercise.",
  },
  {
    label: "02 — AI Content Generation",
    description:
      "GPT-4o and Gemini generate a structured content plan: headlines, body copy, CTA labels, section order, and content blocks. The model does not write HTML. It writes content and structure. This keeps the AI focused and the output consistent.",
  },
  {
    label: "03 — Deterministic Renderer",
    description:
      "The app maps the JSON spec into a prebuilt responsive component system. This gives consistent visual quality, reliable mobile layouts, and predictable output across use cases. It is faster and more stable than letting a model generate front-end code from scratch.",
  },
];

const KEY_DECISIONS = [
  {
    title: "Constrained AI output",
    description:
      "I constrained the AI to a structured spec and component system instead of raw front-end generation. This reduced layout failures, improved mobile reliability, and made the system easier to maintain and improve over time.",
  },
  {
    title: "Payment is part of the flow",
    description:
      "Stripe is integrated directly into the creation flow, not a separate checkout mode. Payment is treated as part of the same create/publish interaction. That keeps the product feeling fast and consistent.",
  },
  {
    title: "Quality improves through logging",
    description:
      "Failed or weak generations are logged to improve prompt quality, extraction logic, component coverage, and niche use-case handling. The system gets better with every edge case.",
  },
  {
    title: "Intentional tradeoff",
    description:
      "CapsuleWeb does not offer pixel-level control. That is intentional. The product optimizes for speed, consistency, low friction, and reliable output. Flexibility is the thing it trades away.",
  },
];

const MY_CONTRIBUTION = [
  "Defined the core product direction and UX strategy for CapsuleWeb as a $1 website vending machine with a clear, constrained user experience",
  "Led the 0→1 product design across the full flow, from prompting and generation through payment, publish, and return editing",
  "Designed the system approach that makes AI output reliable in production by combining AI-generated content with a controlled site rendering layer",
  "Tested and compared models (including GPT-4o and Gemini 3) for generation quality, consistency, and speed, then refined the experience around real output behavior",
  "Built key growth and retention mechanics into the product, including the public gallery loop and no-account recovery/edit flow",
  "Shipped the live product and iterated based on real usage, generated sites, and edge cases",
];

const IMPACT = [
  "Live product at capsuleweb.site with a growing user base",
  "Average time from landing on the page to a published website: under 30 seconds",
  "Clear $1 pricing with no subscriptions or hidden fees",
  "Built-in viral loop through gallery and social sharing driving organic growth",
];

const WHATS_NEXT = [
  "Expand site types based on gallery data showing what people actually create",
  "Explore custom domain support so users can point their own URL to a CapsuleWebsite",
  "Test higher-tier options for multi-page sites while keeping the single-page experience as the default",
];

const AT_A_GLANCE = [
  "Live production app with Stripe payments, real generated sites, and a public gallery",
  "Three-part generation system: intent capture, structured content generation, and deterministic rendering",
  "No-signup model with Site ID recovery for post-publish edits",
  "Public gallery turns every generated site into a discovery path back to CapsuleWeb",
];

export function CapsulewebCaseStudy({ study }: { study: CaseStudy }) {
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
            <a
              href="https://capsuleweb.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-end gap-3 hover:opacity-70 transition-opacity"
            >
              {study.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mb-2 shrink-0 w-8 h-8 md:w-10 md:h-10"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
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

        {/* Hero */}
        <CaseStudyHero src={heroSrc} alt="Capsuleweb.site product" />

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
          {/* 01. Problem */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              The Problem
            </h2>
            <p className="text-body-lg leading-relaxed mb-8">
              Website builders are powerful, but for many people they ask for
              too much work. Most users who need a quick site do not want to
              design a system. They want a page that is clear, usable, and live.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FRICTION_CARDS.map((card, i) => (
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
            <p className="mt-8 text-body text-muted leading-relaxed">
              For freelancers, local businesses, events, and side projects, a
              website is usually a utility. The goal was to make creation a
              single action: describe → pay → publish.
            </p>
          </section>

          {/* 02. Product Thesis */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Product Thesis
            </h2>
            <p className="text-body-lg leading-relaxed mb-8">
              CapsuleWeb is intentionally a vending machine, not a full editor.
              That framing shaped every product decision.
            </p>
            <div className="space-y-3">
              {[
                {
                  label: "Fixed price ($1)",
                  desc: "Keeps the decision simple. No plan comparison, no upgrade prompt.",
                },
                {
                  label: "No signup",
                  desc: "Removes account friction from the start. The product earns trust through output, not onboarding.",
                },
                {
                  label: "Fast output over customization",
                  desc: "Time-to-live is the metric that matters. Flexibility is the thing CapsuleWeb trades away—intentionally.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-muted shrink-0">—</span>
                  <p className="text-body leading-relaxed">
                    <span className="font-semibold">{item.label}:</span>{" "}
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 03. How the System Works */}
        <section className="mb-20">
          <div className="max-w-content mx-auto">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              How the System Works
            </h2>
            <p className="text-body-lg leading-relaxed mb-10">
              The core design decision was to separate AI content generation
              from layout rendering. This keeps the AI focused on content and
              structure—not on writing front-end code.
            </p>
            <div className="space-y-6 mb-12">
              {SYSTEM_STEPS.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-sm text-muted font-medium mt-1 shrink-0 tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-body font-semibold mb-1">{step.label}</p>
                    <p className="text-body text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Form images */}
          <CaseStudyDecisionImages
            images={[
              {
                src: `${imageBase}/0-emtpy.png`,
                caption: "Empty state — the starting line",
              },
              {
                src: `${imageBase}/1-fill_it_out.png`,
                caption: "Filled — describe, choose a vibe, dispense",
              },
            ]}
            layout="side-by-side"
            imageAspect="1310 / 1742"
          />

          {/* Dispensed */}
          <div className="max-w-content mx-auto mt-16 mb-8">
            <h3 className="text-heading-2 font-medium tracking-tight mb-4">
              Dispensed
            </h3>
            <p className="text-body text-muted leading-relaxed">
              Hit the button and two things happen immediately: a real site goes
              live at your custom URL, and a confirmation email lands with your
              link and site ID for edits later.
            </p>
          </div>
          <CaseStudyDecisionImages
            images={[
              {
                src: `${imageBase}/2_website_published.png`,
                caption: "Site live at your custom URL",
              },
              {
                src: `${imageBase}/3-email_info_sent.png`,
                caption: "Site ID delivered by email for future edits",
              },
            ]}
            layout="side-by-side"
          />
        </section>

        {/* 04. Growth by Product Design */}
        <section className="mb-20">
          <div className="max-w-content mx-auto mb-8">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Built-in Growth Loop
            </h2>
            <p className="text-body-lg leading-relaxed mb-4">
              Every generated site is added to a public gallery on the
              CapsuleWeb homepage. That does three things:
            </p>
            <div className="space-y-3">
              {[
                "Shows real examples instead of generic templates",
                "Builds trust for new users before they pay",
                "Turns every shared site into a distribution path back to CapsuleWeb",
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-muted shrink-0">-</span>
                  <p className="text-body leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <CaseStudyDecisionImages
            images={[
              {
                src: `${imageBase}/4-added_to_gallery.png`,
                caption: "Every generated site lands in the public gallery",
              },
            ]}
          />
        </section>

        {/* 05. Continuity Without Accounts */}
        <section className="mb-20">
          <div className="max-w-content mx-auto">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Continuity Without Accounts
            </h2>
            <p className="text-body-lg leading-relaxed mb-6">
              Removing signup helped conversion, but it created a follow-up
              problem: users still need to come back and edit. I solved this
              with a no-account recovery flow.
            </p>
            <div className="space-y-5">
              {[
                {
                  n: "01",
                  text: "After publish, the system generates a unique Site ID",
                },
                {
                  n: "02",
                  text: "The user receives the Site ID by email immediately",
                },
                {
                  n: "03",
                  text: "They return later, enter the ID, and describe the change in plain language",
                },
                {
                  n: "04",
                  text: "The site regenerates and updates while keeping the same URL",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-4">
                  <span className="text-sm text-muted font-medium mt-1 shrink-0 tabular-nums">
                    {step.n}
                  </span>
                  <p className="text-body leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-content mx-auto">
          {/* 06. Key Decisions and Tradeoffs */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Key Decisions and Tradeoffs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {KEY_DECISIONS.map((card, i) => (
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

          {/* 07. My Contribution */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              My Contribution
            </h2>
            <p className="text-body text-muted leading-relaxed mb-6">
              This was a systems and product design problem, not just a UI
              project.
            </p>
            <ul className="space-y-3">
              {MY_CONTRIBUTION.map((item, i) => (
                <li key={i} className="text-body leading-relaxed flex gap-3">
                  <span className="text-muted shrink-0">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Mobile — bottom */}
        <section className="mb-20">
          <p className="text-xs uppercase tracking-wider text-muted mb-8 max-w-content mx-auto">
            Mobile
          </p>
          <CaseStudyDecisionImages
            images={[
              {
                src: `${imageBase}/mobile1.png`,
                caption:
                  "Mobile creation\nGenerate a real site from your phone in one vertical flow.",
              },
              {
                src: `${imageBase}/mobile2.png`,
                caption:
                  "Mobile edits\nPaste your Site ID, describe the change, get an updated site at the same URL.",
              },
            ]}
            layout="side-by-side"
          />
        </section>

        {/* Full marketing site */}
        <section className="mb-12">
          <div className="max-w-[580px] mx-auto">
            <CaseStudyDecisionImages
              images={[
                {
                  src: `${imageBase}/desktop-full.png`,
                  caption: "The entire product on one page — no nav, no multi-step wizard, no account wall.",
                },
              ]}
            />
          </div>
        </section>

        {/* Impact + What's Next + CTA — very bottom */}
        <div className="max-w-content mx-auto">
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Impact
            </h2>
            <ul className="space-y-3 mb-16">
              {IMPACT.map((item, i) => (
                <li key={i} className="text-body-lg leading-relaxed flex gap-3">
                  <span className="text-muted shrink-0">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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

          <section className="mb-24">
            <a
              href="https://capsuleweb.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-foreground text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors"
            >
              Give it a try &rarr;
            </a>
          </section>
        </div>
      </article>

      <Footer />
    </>
  );
}
