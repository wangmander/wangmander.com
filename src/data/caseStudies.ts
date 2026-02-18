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

  // Narrative sections
  overview: string;
  myRole: string[];
  problem: string;
  userInsights: string[];
  approach: string;
  keyDecisions: {
    title: string;
    description: string;
    images: string[];
  }[];
  impact: string[];
  whatsNext: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Transform UX: AI Co-Creator for Data Pipelines",
    slug: "c3-transform",
    subtitle:
      "Making AI-powered data transformations feel like a conversation, not a code editor.",
    description:
      "Redesigning the enterprise AI platform to make complex data transformations intuitive through AI-assisted natural language interaction.",
    tags: ["Enterprise AI", "Platform Design", "Complex Workflows"],
    role: "Lead Product Designer",
    timeline: "2023 — 2024",
    team: "Cross-functional team of 12",
    type: "featured",
    imageDir: "/case-studies/c3-transform",
    heroImage: "v2-2 transform-complete.png",

    overview:
      "C3 Transform is the data transformation engine inside the C3 AI Suite. It lets enterprise teams define how raw data becomes usable inputs for AI models. I led the redesign of the transformation authoring experience, introducing an AI-assisted workflow that replaced manual coding with natural language interaction. Users describe the transform they want in plain English and the system generates the expression code. We shipped two major iterations and it became the default way customers build transforms across the platform.",

    myRole: [
      "Led end-to-end design from research through production ship",
      "Ran user research sessions with data engineers at 3 enterprise customers",
      "Designed two major iterations of the AI interaction model (inline widget and chat panel)",
      "Partnered closely with ML engineering on prompt design and response formatting",
      "Presented the final design to C3 AI leadership for go/no-go approval",
    ],

    problem:
      "Writing data transformations in C3 required deep knowledge of the platform's proprietary expression language. Even experienced data engineers spent hours on transforms that should have taken minutes. New customers hit a wall during onboarding because they could not write transforms without extensive training. Support tickets about transformation errors were the single largest category in our backlog. The expression language was powerful but obscure. Simple tasks like joining two data sources or filtering by date required syntax that felt nothing like SQL or Python. We were asking users to learn a new language just to do something they already knew how to do.",

    userInsights: [
      "Data engineers described the expression language as \"like SQL but none of the patterns transfer\" and defaulted to copy-pasting from old projects",
      "Most transforms followed a small set of common patterns (joins, filters, aggregations) but the interface treated every transform as a blank-slate coding task",
      "Users spent more time debugging syntax errors than thinking about the actual data logic",
      "Teams had created internal wikis with transform recipes because the official docs were too abstract",
      "Non-technical stakeholders could describe the transform they wanted in plain English but had no way to execute it themselves",
      "The biggest fear was not writing the wrong transform but not knowing if it was wrong until much later in the pipeline",
    ],

    approach:
      "I started by mapping every transform our top 20 customers had built in the last year. This gave us a clear picture of what people actually needed versus what the tool theoretically supported. About 80% of transforms fell into five categories. That was the opening. If we could make those five patterns effortless, we would cover most real usage. I proposed an AI-assisted approach where users describe what they want in plain language and the system generates the expression code. We prototyped two versions. The first was a compact widget that appeared inline next to the code editor. The second was a full chat panel that supported back-and-forth refinement. We tested both with customers. The widget was faster for simple transforms but broke down when users needed to iterate. The chat panel handled complexity better and gave users more confidence because they could see the AI reasoning. We shipped the chat panel as the primary experience with the widget as a quick-action shortcut.",

    keyDecisions: [
      {
        title: "Visual pipeline canvas as the foundation",
        description:
          "Before touching the AI interaction, we needed to make the overall pipeline structure visible. I designed a node-based canvas where each transform is a visual block connected to its data sources and outputs. This gave users a map of their data flow and made it obvious where a new transform should go. The canvas also became the anchor point for the AI panel. You click a node, the AI panel opens with full context about that node's inputs and expected outputs.",
        images: ["v1-1 pipeline.png", "v2-3 data_pipeline_nodes.png"],
      },
      {
        title: "AI target selection and smart matching",
        description:
          "When users wanted to create a transform, the first step was selecting which data fields to operate on. I designed a target selection flow where the system suggests likely field matches based on the data schema. Instead of scrolling through hundreds of fields, users see a ranked list of recommendations. Selecting a target automatically scoped the AI's context so its suggestions were relevant to that specific field and data type.",
        images: [
          "v1-2 transform-select target.png",
          "v1-3 transform-selected.png",
        ],
      },
      {
        title: "V1: Inline AI widget for quick transforms",
        description:
          "The first iteration was a compact widget embedded directly in the transform editor. Users typed a plain language request, and the AI generated the expression code inline. It worked well for simple, one-shot transforms like type conversions or basic filters. The widget showed the generated code with syntax highlighting and a one-click apply button. But for anything that required iteration or explanation, the widget felt cramped and users lost track of what they had asked for.",
        images: [
          "v1-4 transform-AI widget.png",
          "v1-5 transform-AI working.png",
        ],
      },
      {
        title: "AI-generated transforms with diff view",
        description:
          "A critical trust issue came up in testing: users did not want to blindly accept AI-generated code. I introduced a diff view that showed exactly what the AI was changing. Before and after, line by line. Users could accept the full suggestion, accept parts of it, or ask the AI to try again. The diff view also highlighted potential issues like type mismatches or null handling gaps. This transformed the interaction from \"trust the AI\" to \"review and approve,\" which matched how engineering teams already worked with code reviews.",
        images: [
          "v1-6 transform-AI generating.png",
          "v1-7 transform-AI diff.png",
          "v1-8 transform-AI done.png",
        ],
      },
      {
        title: "V2: Chat panel for complex, multi-step transforms",
        description:
          "Based on feedback from the widget version, I designed a full chat panel that lived alongside the code editor. Users could have a back-and-forth conversation with the AI, asking it to refine, explain, or completely rethink a transform. The chat kept full history so users could reference earlier attempts. It also supported validation, showing the user if the generated transform would actually work with their data before they applied it. The chat panel became the primary AI interaction surface and the widget was kept as a shortcut for simple operations.",
        images: [
          "v2 AI chat.png",
          "v2-1 transform-diff.png",
          "v2-2 transform-complete.png",
        ],
      },
    ],

    impact: [
      "Reduced average time to write a data transform from 45 minutes to under 5 minutes",
      "AI-assisted transforms accounted for 70% of all new transforms within 3 months of launch",
      "Support tickets related to transformation errors dropped by 60%",
      "Onboarding time for new customers decreased from 3 weeks to 4 days",
      "Increased self-serve pipeline creation by 340%",
      "Directly contributed to closing 2 enterprise deals worth $8M+ ARR",
    ],

    whatsNext: [
      "Extend AI assistance to other parts of the pipeline beyond transforms (data source configuration, model tuning)",
      "Add collaborative features so multiple team members can work on transforms simultaneously",
      "Build a transform library where teams can share and reuse proven patterns across projects",
      "Explore proactive AI suggestions that detect common data quality issues before users encounter them",
    ],
  },
  {
    title: "Genesis: Reimagining the Enterprise Platform",
    slug: "c3-ai-studio",
    subtitle:
      "A guided, AI-powered environment for building enterprise applications from intent to deployment.",
    description:
      "Designing an AI-powered environment that takes users from a plain language description to a deployed enterprise application in hours, not months.",
    tags: ["AI/ML", "Analytics", "No-Code"],
    role: "Senior Product Designer",
    timeline: "2022 — 2023",
    team: "Product trio + 8 engineers",
    type: "featured",
    imageDir: "/case-studies/c3-ai-studio",
    heroImage: "1-Genesis-home1-start.png",

    overview:
      "Genesis is a no-code environment where users describe what they want to build in plain language and the platform handles the rest. From capturing intent to deploying a live enterprise AI application, Genesis walks users through every step with AI guidance. I designed the end-to-end experience covering intent capture, app creation, data configuration, deployment, monitoring, and sharing. It shipped as a flagship feature in the C3 AI product suite and was featured in the company's annual product keynote.",

    myRole: [
      "Designed the full application flow from home screen through deployment and sharing",
      "Created the intent-capture interaction model where users describe what they want in natural language",
      "Defined the guided step-by-step experience for data hydration and pipeline configuration",
      "Worked with engineering to scope what AI could reliably generate versus what needed manual input",
      "Led design reviews with the VP of Product and CEO",
    ],

    problem:
      "Building an enterprise AI application on C3 required a team of developers working for weeks or months. Business users who understood the domain problem had no way to translate their knowledge into a working application without heavy engineering support. This created a bottleneck where the people closest to the problem were the furthest from the solution. Competitors were shipping simpler tools that let business users self-serve, but those tools could not handle the complexity of real enterprise data. We needed something that was genuinely easy to use without sacrificing the power that made C3 valuable in the first place.",

    userInsights: [
      "Business analysts could clearly articulate what application they needed but had no mental model for how to build it technically",
      "The gap between \"I want a predictive maintenance dashboard\" and a working application was filled entirely by developer time and meetings",
      "Users who tried the existing developer tools gave up within the first hour because the starting point assumed too much technical knowledge",
      "The most successful customer deployments started with a clear natural language description of the use case, suggesting that intent capture could drive automation",
      "Data configuration was the single biggest source of project delays, not model building or UI design",
    ],

    approach:
      "I started by studying the 10 most successful C3 customer deployments to find patterns in how they went from idea to working application. A clear sequence emerged: capture intent, form a plan, create the app scaffold, configure data, deploy, and monitor. Each step had well-defined inputs and outputs. That meant we could build a guided flow where the AI handles the heavy lifting and the user makes decisions at key checkpoints. I designed the experience as a linear journey with clear stages. Each stage shows the user exactly what the system is doing, what it needs from them, and what comes next. No hidden complexity. If the AI is uncertain about something, it asks rather than guessing. We tested the flow with 5 enterprise customers using realistic data and iterated on the areas where users got stuck or lost confidence.",

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
        title: "One-click deployment with environment selection",
        description:
          "Deploying an enterprise application usually involves DevOps teams and staging environments. I designed a deployment flow that abstracts that complexity. Users select their target environment, click deploy, and watch the progress. The system handles provisioning, configuration, and health checks. A clear status screen shows deployment progress and confirms when the app is live.",
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
      "Enabled non-technical users to build and deploy AI applications for the first time on C3",
      "Reduced time from idea to deployed application from weeks to hours",
      "Adopted by 3 Fortune 500 customers within the first quarter of launch",
      "Featured in C3 AI's annual product keynote as a flagship capability",
      "Eliminated the need for dedicated developer support during initial app creation",
      "Customer satisfaction scores improved from 3.2 to 4.6 out of 5",
    ],

    whatsNext: [
      "Add real-time collaboration so multiple stakeholders can shape an application together",
      "Expand AI generation to handle more complex application types beyond analytics dashboards",
      "Build a template marketplace where customers can share and fork successful application configurations",
      "Integrate deeper monitoring with automated AI-driven alerts and optimization suggestions",
    ],
  },
  {
    title: "Guildy.ai",
    slug: "guildy",
    subtitle:
      "A Gmail-based job search pipeline with AI interview prep.",
    description:
      "Turning the chaos of job hunting into a clean, automated pipeline that lives where your job search already happens: your inbox.",
    tags: ["AI", "Productivity", "Side Project"],
    role: "Co-founder & Designer",
    timeline: "2024 — Present",
    team: "Solo design + AI-assisted development",
    type: "side-project",
    imageDir: "/case-studies/guildy",
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
    subtitle:
      "Insert $1. Get a website. A real website link. No code. No waiting.",
    description:
      "A website vending machine that lets anyone generate a real, published website in about 30 seconds for about one dollar.",
    tags: ["AI", "Generative UI", "Side Project"],
    role: "Creator & Designer",
    timeline: "2024 — Present",
    team: "Solo",
    type: "side-project",
    imageDir: "/case-studies/capsulewebsite",
    heroImage: "hero-desktop.png",

    overview:
      "CapsuleWebsite is a website vending machine. You pick a site type, describe what you want, pay about one dollar, and get a real published website with a shareable link in about 30 seconds. No templates to customize, no editors to learn, no code to write. The mental model is a literal vending machine: insert money, get the thing. I designed and built it as a solo project to explore the absolute simplest possible path from \"I need a website\" to a live URL. The product is live at capsuleweb.site with a growing gallery of user-created sites.",

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
        title: "Vending machine model: one form, one payment, one output",
        description:
          "Every website builder adds more options to handle more use cases. CapsuleWebsite goes the opposite direction. The entire creation flow lives on a single page. You see the form, the payment button (\"Dispense\"), and that is it. No account creation required upfront. No multi-step wizard. The form asks for the bare minimum: site type, description, name, email, vibe, and color. The \"Dispense\" button with integrated Google Pay and Apple Pay makes the payment feel as simple as buying something from an actual vending machine. This extreme simplicity is the product.",
        images: ["hero-desktop.png", "desktop-full.png"],
      },
      {
        title: "Quality floor and built-in sharing loop",
        description:
          "Rather than maximizing customization, I focused on making sure every generated site meets a baseline quality bar. Typography, spacing, and color are handled by the system so the output always looks professional regardless of what the user types. After creation, the share modal makes it easy to post to X, copy a caption for Instagram, or copy the link. Every site is also added to the public gallery on the CapsuleWebsite homepage. This means every new user creates content that helps attract the next user. The gallery doubles as social proof and inspiration.",
        images: ["mobile.png"],
      },
    ],

    impact: [
      "Live product at capsuleweb.site with a growing user base",
      "Average time from landing on the page to a published website: under 30 seconds",
      "Clear $1 pricing with no subscriptions or hidden fees",
      "Built-in viral loop through gallery and social sharing driving organic growth",
    ],

    whatsNext: [
      "Add paid edit flow ($1 to update an existing site) to create a simple ongoing revenue model",
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
