export type CaseStudy = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  role: string;
  timeline: string;
  team: string;
  type: "featured" | "side-project";
  overview: string;
  problem: string;
  approach: string[];
  keyDecisions: { title: string; description: string }[];
  impact: string[];
  next: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "C3 Transform",
    slug: "c3-transform",
    description:
      "Redesigning the enterprise AI application development platform to make complex data transformations intuitive for non-technical users.",
    tags: ["Enterprise AI", "Platform Design", "Complex Workflows"],
    role: "Lead Product Designer",
    timeline: "2023 — 2024",
    team: "Cross-functional team of 12",
    type: "featured",
    overview:
      "C3 Transform is the core application development environment within the C3 AI Suite. It enables enterprises to build, deploy, and operate AI applications at scale. The platform handles everything from data integration to model deployment — but the existing experience made simple tasks feel impossibly complex.",
    problem:
      "Enterprise customers were struggling to onboard. What should have been a straightforward workflow — connecting data sources, defining transformations, and deploying models — required weeks of training and constant support. The learning curve was killing adoption, and we were losing deals to competitors with simpler (but less powerful) tools. The core tension: how do you make something genuinely complex feel simple without dumbing it down?",
    approach: [
      "Started with 15+ hours of contextual inquiry sessions with data engineers and citizen developers at three enterprise customers. Watched them struggle in real-time.",
      "Mapped the entire workflow end-to-end, identifying the 6 key moments where users got stuck or needed to context-switch to documentation.",
      "Developed a progressive disclosure framework — the interface shows only what's relevant to your current step, with complexity available on demand.",
      "Ran 3 rounds of prototype testing with increasingly higher fidelity, validating each major interaction pattern before committing to engineering.",
    ],
    keyDecisions: [
      {
        title: "Visual pipeline builder over code-first",
        description:
          "The existing interface was essentially a code editor with some UI chrome. I pushed for a visual, node-based pipeline builder that made data flow tangible. Engineers could still drop into code when needed, but the default experience was visual and direct-manipulation.",
      },
      {
        title: "Contextual help over documentation",
        description:
          "Instead of linking out to docs, we embedded contextual guidance directly into the workflow. Each step includes inline explanations, smart defaults, and example configurations pulled from the user's own data.",
      },
      {
        title: "Opinionated defaults with escape hatches",
        description:
          "Rather than presenting every option upfront, we established smart defaults for 80% of use cases. Power users could override anything, but new users could get to a working pipeline in minutes instead of days.",
      },
    ],
    impact: [
      "Reduced average onboarding time from 3 weeks to 4 days",
      "Increased self-serve pipeline creation by 340%",
      "Customer satisfaction scores improved from 3.2 to 4.6 (out of 5)",
      "Directly contributed to closing 2 enterprise deals worth $8M+ ARR",
    ],
    next: "Currently exploring how generative AI can further reduce friction — imagine describing a data transformation in natural language and having the platform build the pipeline for you. Early prototypes are promising.",
  },
  {
    title: "C3 AI Studio",
    slug: "c3-ai-studio",
    description:
      "Designing an AI-powered analytics environment that lets business users explore data and build models without writing code.",
    tags: ["AI/ML", "Analytics", "No-Code"],
    role: "Senior Product Designer",
    timeline: "2022 — 2023",
    team: "Product trio + 8 engineers",
    type: "featured",
    overview:
      "C3 AI Studio is a no-code environment where business analysts can explore enterprise data, build predictive models, and generate insights — all without writing a single line of code. Think Jupyter notebooks meets Figma, designed for people who think in spreadsheets.",
    problem:
      "Business analysts had powerful questions but no way to answer them without filing a ticket with the data team and waiting weeks. The existing BI tools could show what happened, but couldn't predict what would happen next. We needed to put ML capabilities directly in the hands of domain experts — without requiring them to become data scientists.",
    approach: [
      "Conducted a competitive analysis of 12 analytics and no-code ML tools to understand the landscape and identify gaps.",
      "Partnered with 5 enterprise customers to define the 'golden path' — the most common analytical workflows their business teams needed.",
      "Designed a block-based composition model where users build analyses by connecting pre-built components, similar to how Notion or Coda work.",
      "Created an AI-assisted experience where the system suggests next steps, flags data quality issues, and explains model outputs in plain language.",
    ],
    keyDecisions: [
      {
        title: "Block-based composition over drag-and-drop",
        description:
          "Drag-and-drop canvas tools look impressive in demos but fall apart at scale. We went with a linear, block-based model (think Notion) that's easier to understand, easier to share, and easier to version control.",
      },
      {
        title: "Guided mode as the default",
        description:
          "Instead of dropping users into a blank canvas, we designed a guided mode that walks through the analytical workflow step by step. Users can break out of the guide at any point, but most don't need to.",
      },
      {
        title: "Plain-language model explanations",
        description:
          "ML model outputs are notoriously opaque. We invested heavily in translating model results into business language — not 'feature importance scores' but 'the three factors most likely driving this trend are...'",
      },
    ],
    impact: [
      "Enabled non-technical users to build predictive models for the first time",
      "Reduced time-to-insight from weeks (via data team) to hours (self-serve)",
      "Adopted by 3 Fortune 500 customers within first quarter of launch",
      "Featured in C3 AI's annual product keynote as a flagship capability",
    ],
    next: "Exploring real-time collaboration features and deeper integration with generative AI for automated insight generation. The vision is an AI analyst that works alongside you, not a tool you have to learn.",
  },
  {
    title: "Guildy",
    slug: "guildy",
    description:
      "An AI-powered platform that helps creators and professionals build and monetize online communities.",
    tags: ["AI", "Community", "Side Project"],
    role: "Co-founder & Designer",
    timeline: "2024 — Present",
    team: "Solo design + AI-assisted development",
    type: "side-project",
    overview:
      "Guildy is a platform I'm building that uses AI to help community leaders launch, grow, and monetize their communities. It handles the tedious operational work — onboarding flows, engagement nudges, content scheduling — so creators can focus on what they do best: creating.",
    problem:
      "Running an online community is a full-time job on top of your actual full-time job. Community leaders spend most of their time on operational busywork — moderating, onboarding new members, keeping engagement up — instead of creating the content and connections that made their community valuable in the first place.",
    approach: [
      "Interviewed 20+ community leaders across Discord, Slack, and Circle to understand their daily workflows and biggest pain points.",
      "Identified that 70% of a community manager's time goes to repetitive operational tasks that could be automated or AI-assisted.",
      "Designed an AI agent system that handles routine community management while keeping the human leader in control of tone, culture, and key decisions.",
      "Built the entire product using AI-assisted development (cursor, v0, Claude) — practicing what I preach about AI augmenting human work.",
    ],
    keyDecisions: [
      {
        title: "AI as assistant, not replacement",
        description:
          "The AI handles operational tasks but never posts as the community leader without approval. Trust and authenticity are everything in communities — automation should be invisible to members.",
      },
      {
        title: "Template-first onboarding",
        description:
          "Instead of a blank slate, new community leaders choose from proven templates based on their community type. Each template comes with pre-configured automations, engagement strategies, and growth playbooks.",
      },
    ],
    impact: [
      "Currently in private beta with 12 community leaders",
      "Early users report saving 10+ hours per week on community management",
      "Built end-to-end as a solo designer using AI-assisted development tools",
    ],
    next: "Expanding AI capabilities to include content generation assistance, member matching, and predictive engagement analytics. Planning public launch in early 2025.",
  },
  {
    title: "CapsuleWebsite",
    slug: "capsulewebsite",
    description:
      "A tool that generates beautiful, functional websites from a single conversation with AI.",
    tags: ["AI", "Generative UI", "Side Project"],
    role: "Creator & Designer",
    timeline: "2024 — Present",
    team: "Solo",
    type: "side-project",
    overview:
      "CapsuleWebsite lets anyone create a polished website by simply describing what they want in a conversation. No templates, no drag-and-drop, no code. Just tell it what you need and watch it build. Think of it as the anti-Squarespace — instead of choosing from templates, you describe your vision and AI generates something unique.",
    problem:
      "Website builders promise simplicity but still require hours of tweaking templates, choosing fonts, and arranging layouts. For most people — freelancers, small businesses, creators — a website is a means to an end, not a creative expression. They want something that looks professional and works, without the 40-hour time investment.",
    approach: [
      "Studied how people describe websites when they're not constrained by tools — what language do they use? What do they care about?",
      "Designed a conversational interface that progressively refines the website through natural dialogue, not form fields.",
      "Built a design system of composable components that AI can arrange into cohesive, professional layouts.",
      "Focused obsessively on output quality — the generated sites need to look like a designer made them, not like AI made them.",
    ],
    keyDecisions: [
      {
        title: "Conversation over configuration",
        description:
          "Every website builder adds more options to handle more use cases. We went the opposite direction — fewer controls, smarter defaults, and natural language as the primary input method.",
      },
      {
        title: "Quality floor over feature ceiling",
        description:
          "Rather than maximizing what's possible, we focused on ensuring that every generated website meets a minimum quality bar. A simple but beautiful site beats a complex but ugly one.",
      },
    ],
    impact: [
      "Functional prototype generating production-quality websites from conversation",
      "Average time to a published website: under 5 minutes",
      "Exploring integration with custom domains and hosting providers",
    ],
    next: "Building out e-commerce capabilities and exploring how the conversational model extends to ongoing site management — updating content, adding pages, and optimizing for SEO through natural dialogue.",
  },
];

export const featuredStudies = caseStudies.filter(
  (cs) => cs.type === "featured"
);
export const sideProjects = caseStudies.filter(
  (cs) => cs.type === "side-project"
);
