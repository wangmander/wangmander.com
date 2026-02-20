export type CaseStudy = {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  tags: string[];
  role: string;
  timeline: string;
  team: string;
  type: "featured" | "side-project";
  imageDir: string;
  heroImage?: string;
  deckUrl?: string;

  titleUrl?: string;
  ctaUrl?: string;
  ctaLabel?: string;
  tagline?: string;
  builtWith?: string[];

  // Narrative sections
  overview: string;
  myRole: string[];
  problem: string;
  userInsights: string[];
  approach: string;
  keyDecisions: {
    title?: string;
    description?: string;
    images: string[];
    captions?: string[];
    layout?: "grid-2x2" | "side-by-side";
    featureTitle?: boolean;
    sectionBreak?: string;
  }[];
  impact: string[];
  whatsNext: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Transform UX: AI Co-Creator for Data Pipelines",
    slug: "c3-transform",
    tagline: "A ground-up reimagining of data transforms into an AI co-authoring workflow—AI drafts, humans verify, the system proves it with preview/diff/history, run + compare, and rollback—so it feels like collaboration, not editing scripts.",
    subtitle:
      "Making AI-powered data transformations feel like a conversation, not a code editor.",
    description:
      "Redesigning the enterprise AI platform to make complex data transformations intuitive through AI-assisted natural language interaction.",
    tags: ["Enterprise AI", "Platform Design", "Complex Workflows"],
    role: "Lead Product Designer",
    timeline: "2023 — 2024",
    team: "Core pod of 4 (Product, Engineering, Design)",
    type: "featured",
    imageDir: "/case-studies/c3-transform",
    heroImage: "v2-2 transform-complete.png",

    overview:
      "C3 Transform is the data transformation engine inside C3 AI Suite — how enterprise teams shape raw data into inputs for AI models. When we redesigned the authoring experience, we started down the path most AI tools take: AI generates, human reviews, human approves. V1 shipped that way. Users hated it — not the output, but the feeling of being a spectator in their own workflow. So we scrapped the model entirely. V2 fully embraced chat-first co-authoring: users steer, push back, iterate, and drop into code whenever they need to. That pivot is the real story of this project.",

    myRole: [
      "Owned the UX end to end — from strategy through final shipped design across authoring, review, and execution flows",
      "Designed the AI co-authoring workflow: a chat-based drafting and review experience that lets less-technical users start from intent while technical users can inspect, edit, or take over in code",
      "Built trust into the verification layer — preview, diff, history, run + compare, and rollback — so teams could safely validate AI-generated transforms before committing",
      "Validated iteratively with data engineers, solution engineers, and app developers across multiple rounds of testing",
    ],

    problem:
      "Writing data transformations in C3 required deep knowledge of the platform's proprietary expression language. Even experienced data engineers spent hours on transforms that should have taken minutes. New customers hit a wall during onboarding because they could not write transforms without extensive training. Support tickets about transformation errors were the single largest category in our backlog. The expression language was powerful but obscure. Simple tasks like joining two data sources or filtering by date required syntax that felt nothing like SQL or Python. We were asking users to learn a new language just to do something they already knew how to do.",

    userInsights: [
      "Users want to steer, not spectate — the best moments in testing were when someone pushed back on a suggestion, redirected the AI, or jumped into the code themselves. The worst were when they felt like they were just waiting for something to approve.",
      "Real-time preview was the trust unlock — seeing a transform execute against live data before committing changed everything. No amount of diffs or confirmation dialogs came close to the confidence that gave people.",
      "The expression language was a wall, not a floor — even experienced data engineers were copy-pasting from old projects rather than writing from scratch, because the syntax rewarded institutional knowledge over logic.",
    ],

    approach:
      "We opened with a competitive sweep — every AI-native tool with a meaningful co-authoring or code-generation model, from coding assistants to emerging data tools. The goal wasn't to copy patterns but to understand what trust looks like when humans and AI share a workflow. From there, we ran a series of PDE whiteboarding sprints — Product, Design, and Engineering working through the authoring flow together before anyone touched a design tool. Fast, argumentative, generative. I moved into prototyping quickly and kept fidelity intentionally low so we could stress-test ideas without getting precious about them. We put early concepts in front of data engineers, solution engineers, and app developers and watched them break things. Every feature in the verification layer — preview, diff, history, run + compare, rollback — was earned by something we saw go wrong in testing.",

    keyDecisions: [
      {
        sectionBreak: "V1 — Passive AI",
        title: "Inline widget: AI generates, human approves",
        description:
          "The first version gave users an inline widget next to the editor. Select a target field, describe what you want, the AI writes the expression. Fast and contained — looked great on a whiteboard. In practice, users felt like they were filling out a form for the AI and waiting for it to hand something back. They couldn't steer it, only accept or reject it.",
        images: ["v1-2 transform-select target.png", "v1-4 transform-AI widget.png"],
      },
      {
        title: "Diff view: transparency without agency",
        description:
          "We added a line-by-line diff so users could see exactly what the AI was changing before committing. It reduced anxiety and built some trust. But transparency isn't the same as agency — users were still reviewing something they didn't write, in a language they barely knew. The core problem wasn't visibility. It was that the AI was driving and users were passengers.",
        images: ["v1-7 transform-AI diff.png", "v1-8 transform-AI done.png"],
      },
      {
        sectionBreak: "V2 — Chat-First",
        title: "Full pivot: chat-based co-authoring",
        description:
          "We removed the widget and built a persistent chat panel alongside the editor. Users push, redirect, and refine in conversation — less-technical users start from plain language; technical users can inspect, edit, and take over in code at any point. The AI stopped being a vending machine and started being a collaborator you can actually argue with.",
        images: ["v2 AI chat.png", "v2-1 transform-diff.png"],
      },
      {
        title: "Verification layer and the pipeline canvas",
        description:
          "With a trusted authoring surface in place, we redesigned the pipeline canvas to show the full data flow at a glance, then built out the verification layer: real-time preview, run + compare, full history, and one-click rollback. Every feature was earned by something we saw fail in testing — not designed upfront, discovered through it.",
        images: ["v2-2 transform-complete.png", "v2-3 data_pipeline_nodes.png"],
      },
    ],

    impact: [
      "↓ 35% time to first successful transform",
      "↓ 25% runs to success — faster iteration cycles",
      "~40% of transforms completed without any manual code writing",
      "Established a reusable UI pattern for the platform — downstream teams can now inherit this interaction model",
    ],

    whatsNext: [
      "Extend AI assistance to other parts of the pipeline beyond transforms (data source configuration, model tuning)",
      "Build a transform library where teams can share and reuse proven patterns across projects",
      "Explore proactive AI suggestions that detect common data quality issues before users encounter them",
    ],
  },
  {
    title: "Genesis: Reimagining the Enterprise Platform",
    slug: "c3-ai-studio",
    tagline: "A net-new, vibe-first enterprise builder: one unified no-code + code workspace that turns intent into a deployed AI application—guided creation, generated scaffolding, verification, and release in a single flow.",
    subtitle:
      "A unified code-and-no-code environment for building enterprise AI applications from intent to deployment.",
    description:
      "Leading the 0-to-1 redesign of C3 AI Studio — a platform that lets both technical and non-technical users build enterprise AI applications starting from a plain language prompt.",
    tags: ["AI/ML", "Analytics", "No-Code"],
    role: "Innovation Lead",
    timeline: "2022 — 2023",
    team: "Co-led multidisciplinary squad (Design, Product, Eng)",
    type: "featured",
    imageDir: "/case-studies/c3-ai-studio",
    heroImage: "1-Genesis-home1-start.png",

    overview:
      "Genesis is C3 AI Studio reimagined — a unified environment that blends code and no-code in a single platform. Business users can build complex enterprise AI applications from a plain language prompt. Developers retain full access to code and granular controls. I led the innovation strategy and 0-to-1 redesign over a 6-month cycle, co-leading a multidisciplinary team across Design, Product, and Engineering. It was a large, complex project with many moving parts — I set the vision and shaped the core interaction models while collaborating closely with the team on execution.",

    myRole: [
      "Designed the Prompt-First interaction model — letting non-technical users describe what they want and get a working app",
      "Defined a three-mode workspace (Preview, Code, Configure) so users could verify the app visually without losing access to low-level controls",
      "Set the North Star vision, ran design sprints with the team, and secured VP buy-in for the shift to Chat-First",
      "Led design reviews with the VP of Product",
    ],

    problem:
      "The existing platform required users to understand the full database architecture before seeing any value — a model that created blank canvas paralysis. Non-technical users hit a wall immediately, and even technical users needed weeks of onboarding. Basic tasks that business users could describe in a sentence required high-code engineering support to execute.",

    userInsights: [
      "Business analysts could articulate exactly what they needed but had no path to build it without engineering support",
      "Users who tried the existing tools gave up within the first hour — the starting point assumed too much",
      "The most successful deployments always started from a clear natural language description of the use case",
      "Data configuration was the biggest source of project delays, not model building or UI",
    ],

    approach:
      "We started from scratch — no assumptions carried over from the old model. I researched the emerging generation of prompt-driven tools (Cursor, v0, Manus, Antigravity) to understand where interaction patterns were heading. From there, I ran a series of design sprint worksessions with the team to define core principles and goals. My PM counterpart and I then iterated through mid-fi prototypes, debating and deciding on the core interaction model together. The process was collaborative and fast — prototype, review, debate, refine.",

    keyDecisions: [
      {
        title: "Intent capture through natural language",
        description:
          "The home screen starts with a single prompt: describe what you want to build. The system interprets the user's natural language input and generates a structured plan. This was a deliberate choice to meet users where they are. Instead of asking them to fill out forms or choose from templates, we let them express their intent in their own words. The AI then translates that into a concrete application specification that the user can review and adjust.",
        images: [
          "1-Genesis-home1-start.png",
          "2-Genesis-home2-capture_intent.png",
          "3-Genesis-home3-form_plan.png",
        ],
      },
      {
        title: "Transparent app creation with live preview",
        description:
          "Once the user approves the plan, the system generates the application. Instead of a loading spinner, I designed a creation sequence that shows what the system is building in real time. The user sees the app take shape and can preview it before any data is connected. This built trust and gave users a chance to course-correct early rather than discovering problems after a lengthy build process.",
        images: [
          "4-Genesis-app_creation.png",
          "5-Genesis-app-preview.png",
        ],
      },
      {
        title: "Guided data hydration in three clear steps",
        description:
          "Data configuration was the biggest pain point in the old workflow. I broke it into three explicit steps: add your data source, configure the processing pipelines, and define the data model. Each step has sensible defaults and clear explanations of what each setting does. The system suggests configurations based on the data it discovers, so users are reviewing and approving rather than building from scratch. This turned a multi-week task into something achievable in an afternoon.",
        images: [
          "6-Genesis-app-hydrate_data1-add_source.png",
          "7-Genesis-app-hydrate_data2-configure_pipelines.png",
          "8-Genesis-app-hydrate_data3-configure_data_model.png",
        ],
      },
      {
        title: "Simplified deployment with environment selection",
        description:
          "Deploying an enterprise application typically involves DevOps teams and staging environments. We designed a deployment flow that abstracts that complexity — users select their target environment, step through the deployment, and get clear status feedback at each stage. The goal was to make something that had always required engineering handoff feel manageable for the person who built the app.",
        images: [
          "9-Genesis-app-deploy1-select.png",
          "10-Genesis-app-deploy2-deploying.png",
          "11-Genesis-app-deploy3-deployed.png",
        ],
      },
      {
        title: "Built-in monitoring and sharing",
        description:
          "After deployment, users need to know their application is working and be able to share it with stakeholders. I added a monitoring view that surfaces key health metrics and usage data without requiring users to set up separate analytics. A sharing flow lets users generate access links with configurable permissions, making it easy to get the right people using the application quickly.",
        images: [
          "12-Genesis-app-monitor.png",
          "13-Genesis-app-share.png",
        ],
      },
    ],

    impact: [
      "Enabled non-technical users to build and deploy enterprise AI applications for the first time on C3",
      "Dramatically reduced time from idea to deployed application",
      "Adopted by several major enterprise customers — including Fortune 500 and Forbes-recognized companies — within the first quarter of launch",
      "Demoed at Davos as a flagship example of enterprise AI innovation",
      "Selected to headline C3 AI's upcoming Transform conference",
      "Featured in C3 AI's annual product keynote as a flagship capability",
      "Eliminated the need for dedicated developer support during initial app creation",
    ],

    whatsNext: [
      "Add real-time collaboration so multiple stakeholders can shape an application together",
      "Build a template marketplace where customers can share and fork successful application configurations",
      "Integrate deeper monitoring with automated AI-driven alerts and optimization suggestions",
    ],
  },
  {
    title: "Guildy.ai",
    slug: "guildy",
    tagline: "Job hunting is becoming an inbox-scale problem—more threads, more rounds, more noise—so I built Guildy 0→1 to turn Gmail into a live pipeline and generate targeted prep for every stage.",
    subtitle:
      "A Gmail-based job search pipeline with AI interview prep.",
    description:
      "Turning the chaos of job hunting into a clean, automated pipeline that lives where your job search already happens: your inbox.",
    tags: ["AI", "Productivity", "Side Project"],
    role: "Creator & Designer",
    timeline: "2024 — Present",
    team: "Solo design + AI-assisted development",
    type: "side-project",
    imageDir: "/case-studies/guildy",
    builtWith: ["v0", "Vercel", "Antigravity", "Claude Code", "Supabase", "ChatGPT", "Google OAuth"],
    heroImage: "guildy-desktop.png",

    overview:
      "Guildy turns your Gmail inbox into an automated job search pipeline. It scans your email threads, detects job applications and recruiter conversations, and organizes everything into a clean pipeline with stage tracking. For each job, Guildy provides company intel, context-aware interview prep, and AI-generated practice questions tied to the specific role. I designed and built the entire product as a side project using AI-assisted development tools. The core idea is simple: job hunting is chaotic because everything important lives in email threads, calendars, and scattered notes. Guildy turns that mess into structure automatically.",

    myRole: [
      "Sole designer and co-founder responsible for all product decisions",
      "Designed the full experience from Gmail connection through pipeline management and interview prep",
      "Built the product using AI-assisted development tools (Cursor, v0, Claude)",
      "Defined the stage inference logic and rules for reducing false positives",
      "Ran the private beta and iterated based on user feedback",
    ],

    problem:
      "Job seekers lose track of applications because the source of truth is scattered across email threads, calendar invites, and spreadsheets. Status updates from recruiters arrive in email and are easy to miss. Interview preparation happens ad hoc and is disconnected from the job context. Most people try to manage this with spreadsheets or job tracker apps, but those require constant manual entry. The tools that exist today are either too manual (Notion templates, Google Sheets) or too disconnected from where the action actually happens (email). Nobody had built a job pipeline that starts from the inbox and updates itself.",

    userInsights: [
      "Job seekers described their tracking system as \"a spreadsheet I update when I remember to\" and most were at least a week behind on status updates",
      "The most stressful part of job hunting was not the interviews but losing track of where things stood across 10 to 20 active applications",
      "Users wanted interview prep tied to the specific company and role, not generic question banks",
      "People feared missing a recruiter email or forgetting to follow up more than they feared the interviews themselves",
    ],

    approach:
      "I started by mapping the entire job search workflow from the moment a user applies to the moment they get an offer or rejection. Every signal in that workflow passes through email. Application confirmations, recruiter outreach, interview scheduling, feedback, offers, and rejections all arrive as email threads. That was the key insight. If we could reliably parse email threads, we could build a pipeline that updates itself. I designed Guildy to connect to Gmail via OAuth, scan threads for job-related signals, and create pipeline items automatically. Stage inference uses a hybrid approach: rules and keyword detection for common patterns, plus an LLM for edge cases. A key design decision was requiring two or more tracked signals in the same email to reduce false positives. The job details panel combines pipeline context with AI interview prep, showing company intel, next actions, and practice questions all in one place.",

    keyDecisions: [
      {
        title: "Gmail-first pipeline with automatic stage inference",
        description:
          "Instead of asking users to manually create entries, Guildy scans Gmail threads and creates pipeline items automatically. It extracts company names, role context, and current stage from email signals. The pipeline view shows all active applications with their inferred stage (recruiter screen, technical screen, onsite, offer, rejection). Users can always override stage assignments, but the goal is that most updates happen without any manual input. The desktop view shows the pipeline on the left and a rich detail panel on the right with company intel, email thread summaries, and context for the next action.",
        images: ["guildy-desktop.png"],
      },
      {
        title: "Context-aware interview prep tied to each job",
        description:
          "Each job in the pipeline has a details panel that goes beyond just tracking. It pulls in company intel (industry, size, location, recent news), shows the email thread summary, and surfaces the next action the user should take. Below that, Guildy generates interview prep specific to the company and role. This includes likely interview questions, suggested talking points, and company-specific research. The mobile view makes this accessible on the go so users can review prep right before an interview. The prep is not generic. It is tied to the actual job context Guildy has gathered from the email threads.",
        images: ["guildy-mobile.png"],
      },
    ],

    impact: [
      "Built end-to-end as a solo designer using AI-assisted development tools",
      "Currently in private beta with active job seekers",
      "Stage inference accuracy above 85% with the two-signal threshold rule",
      "Early users report the product replaced their manual spreadsheet tracking entirely",
    ],

    whatsNext: [
      "Add voice-based mock interview with scoring (rates answer quality and provides improvement tips)",
      "Expand stage inference to handle edge cases like referral introductions and recruiter cold outreach",
      "Build a token-based monetization model with a referral loop for earning additional usage",
      "Add calendar integration so interview prep surfaces automatically before scheduled calls",
    ],
  },
  {
    title: "Capsuleweb.site",
    slug: "capsulewebsite",
    tagline: "A $1 website vending machine I built from scratch that turns a single sentence into a live, shareable link in seconds—no code, no setup, no waiting.",
    subtitle:
      "Insert $1. Get a website. A real website link. No code. No waiting.",
    description:
      "A website vending machine that lets anyone generate a real, published website instantly.",
    tags: ["AI", "Generative UI", "Side Project"],
    role: "Creator & Designer",
    timeline: "2024 — Present",
    team: "Solo",
    type: "side-project",
    imageDir: "/case-studies/capsulewebsite",
    heroImage: "hero-desktop.png",
    titleUrl: "https://capsuleweb.site",
    ctaUrl: "https://capsuleweb.site",
    ctaLabel: "Give it a try",
    builtWith: ["v0", "Vercel", "Antigravity", "Claude Code", "Supabase", "ChatGPT"],

    overview:
      "CapsuleWebsite is a website vending machine. You pick a site type, describe what you want, and get a real published website with a shareable link instantly. No templates to customize, no editors to learn, no code to write. The mental model is a literal vending machine: insert, get the thing. I designed and built it as a solo project to explore the absolute simplest possible path from \"I need a website\" to a live URL. The product is live at capsuleweb.site with a growing gallery of user-created sites.",

    myRole: [
      "Sole creator responsible for concept, design, and development",
      "Designed the one-page creation flow and vending machine interaction model",
      "Built the component system that AI assembles into published sites",
      "Designed the viral sharing loop and public gallery mechanic",
    ],

    problem:
      "Website builders promise simplicity but still take hours. You pick a template, then spend forever tweaking fonts, rearranging sections, resizing images, and fighting with responsive layouts. For most people (freelancers, small businesses, event organizers, students) a website is a means to an end. They want something that looks decent, has a real URL they can share, and does not require a weekend to set up. The tools that exist today give you either full control with high effort (Webflow, Framer) or medium effort with generic results (Wix, Squarespace). Nobody had pushed simplicity to its logical extreme: describe it, pay a dollar, get the site.",

    userInsights: [
      "People describe websites in terms of purpose and feeling (\"clean professional page with my hours and location\") not in terms of layout and components",
      "The biggest frustration with existing builders was not choosing a template but the endless tweaking afterward",
      "For most use cases (local business, event, resume) users only needed a single page and would trade features for speed",
      "Users cared more about having a real shareable link than about pixel-level design control",
    ],

    approach:
      "I studied how people describe what they want when they are not constrained by builder interfaces. The language is always about purpose: \"a page for my restaurant with the menu and hours\" or \"a resume site with my projects.\" That shaped the entire product. Instead of a conversational AI that asks 20 questions, I designed a single-page form with smart defaults. Users pick a site type (local business, resume, product, event, restaurant, group, party, open house), add a description, choose a vibe and color, and hit Dispense. The payment is integrated right into the creation flow. Under the hood, the AI generates structured content and renders it into a clean template. Every created site gets a real URL and is automatically added to the public gallery on the CapsuleWebsite homepage, which creates a built-in distribution loop.",

    keyDecisions: [
      {
        title: "Empty state vs. filled",
        description:
          "The whole product is one form. Pick a category, describe your site, add photos, name it, choose a vibe. Nothing to configure before you start — the empty state is the starting line.",
        images: ["0-emtpy.png", "1-fill_it_out.png"],
        layout: "side-by-side",
      },
      {
        title: "Dispensed",
        description:
          "Hit the button and two things happen immediately: a real site goes live at your custom URL, and a confirmation email lands with your link and site ID for edits later.",
        images: ["2_website_published.png", "3-email_info_sent.png"],
        layout: "side-by-side",
      },
      {
        title: "Every site created lands in the public gallery",
        description:
          "The gallery lives on the homepage and updates with every new site. It's how new users discover what's possible — and how your site reaches people you never shared it with.",
        images: ["4-added_to_gallery.png"],
        featureTitle: true,
      },
      {
        sectionBreak: "Mobile",
        images: ["mobile1.png", "mobile2.png"],
        captions: [
          "Mobile creation\nDesigned mobile-first so you can generate a real site from your phone in one vertical flow: pick a site type, describe what you want, tap Dispense, get a live link.",
          "Mobile edits\nUpdate an existing site anywhere: paste your Site ID, describe the change in plain language, and the site regenerates while keeping the same URL.",
        ],
        layout: "side-by-side",
      },
      {
        title: "The full marketing site",
        description:
          "The entire product lives on one page. No nav, no multi-step wizard, no account wall. The Dispense button with Apple Pay and Google Pay makes payment feel as immediate as the output.",
        images: ["desktop-full.png"],
      },
    ],

    impact: [
      "Live product at capsuleweb.site with a growing user base",
      "Average time from landing on the page to a published website: under 30 seconds",
      "Clear $1 pricing with no subscriptions or hidden fees",
      "Built-in viral loop through gallery and social sharing driving organic growth",
    ],

    whatsNext: [
      "Expand site types based on gallery data showing what people actually create",
      "Explore custom domain support so users can point their own URL to a CapsuleWebsite",
      "Test higher-tier options for multi-page sites while keeping the single-page experience as the default",
    ],
  },
];

export const featuredStudies = caseStudies.filter(
  (cs) => cs.type === "featured"
);
export const sideProjects = caseStudies.filter(
  (cs) => cs.type === "side-project"
);
