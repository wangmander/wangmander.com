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
    title: "C3 Transform",
    slug: "c3-transform",
    subtitle:
      "Making AI-powered data transformations feel like a conversation, not a code editor.",
    description:
      "Redesigning the enterprise AI application development platform to make complex data transformations intuitive for non-technical users.",
    tags: ["Enterprise AI", "Platform Design", "Complex Workflows"],
    role: "Lead Product Designer",
    timeline: "2023 — 2024",
    team: "Cross-functional team of 12",
    type: "featured",
    imageDir: "/case-studies/c3-transform",
    heroImage: "v1 AI interaction.png",

    overview:
      "C3 Transform is the data transformation engine inside the C3 AI Suite. It lets enterprise teams define how raw data becomes usable inputs for AI models. I led the redesign of the transformation authoring experience, introducing an AI-assisted workflow that replaced manual coding with natural language interaction. The result shipped to production and became the default way customers build transforms across the platform.",

    myRole: [
      "Led end-to-end design from research through production ship",
      "Ran user research sessions with data engineers at 3 enterprise customers",
      "Designed two major iterations of the AI interaction model (widget and chat)",
      "Partnered closely with the ML engineering team on prompt design and response formatting",
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
      "The biggest fear was not writing the wrong transform but not knowing if the transform was wrong until much later in the pipeline",
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
    title: "C3 AI Studio",
    slug: "c3-ai-studio",
    subtitle:
      "A guided, AI-powered environment for building enterprise applications from intent to deployment.",
    description:
      "Designing an AI-powered analytics environment that lets business users explore data and build models without writing code.",
    tags: ["AI/ML", "Analytics", "No-Code"],
    role: "Senior Product Designer",
    timeline: "2022 — 2023",
    team: "Product trio + 8 engineers",
    type: "featured",
    imageDir: "/case-studies/c3-ai-studio",
    heroImage: "1-Genesis-home1-start.png",

    overview:
      "C3 AI Studio (internally codenamed Genesis) is a no-code environment where users describe what they want to build in plain language and the platform handles the rest. From capturing intent to deploying a live application, Studio walks users through every step with AI guidance. I designed the end-to-end experience covering app creation, data configuration, deployment, monitoring, and sharing. It shipped as a flagship feature in the C3 AI product suite.",

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
    title: "Guildy",
    slug: "guildy",
    subtitle:
      "An AI-powered platform that helps creators build and grow online communities on autopilot.",
    description:
      "An AI-powered platform that helps creators and professionals build and monetize online communities.",
    tags: ["AI", "Community", "Side Project"],
    role: "Co-founder & Designer",
    timeline: "2024 — Present",
    team: "Solo design + AI-assisted development",
    type: "side-project",
    imageDir: "/case-studies/guildy",
    heroImage: "guildy-desktop.png",

    overview:
      "Guildy is a platform I am building that uses AI to handle the operational side of running online communities. Community leaders spend most of their time on repetitive tasks like onboarding, moderation, and engagement nudges instead of creating the content and connections that make their community valuable. Guildy automates the busywork so creators can focus on what they do best. I designed and built the entire product using AI-assisted development tools.",

    myRole: [
      "Sole designer and co-founder responsible for all product decisions",
      "Conducted user research with 20+ community leaders across Discord, Slack, and Circle",
      "Designed the full product experience from onboarding through daily community management",
      "Built the product using AI-assisted development tools (Cursor, v0, Claude)",
      "Managed the private beta program with 12 community leaders",
    ],

    problem:
      "Running an online community is a full-time job on top of your actual full-time job. Community leaders I talked to described spending 15 to 20 hours per week on tasks that felt like overhead rather than community building. Moderating conversations, onboarding new members, keeping engagement up, tracking metrics, scheduling content. These tasks are necessary but they are not why anyone starts a community. The tools available today (Discord bots, Slack integrations, Circle automations) handle individual tasks but nobody connects the dots into a coherent operational layer. Leaders end up managing a patchwork of tools and still doing most of the work manually.",

    userInsights: [
      "Community leaders ranked \"keeping engagement consistent\" as their biggest challenge, ahead of growth or monetization",
      "70% of a community manager's weekly time goes to repetitive operational tasks that follow predictable patterns",
      "New member onboarding was the single highest-leverage moment, but most communities had no structured onboarding flow",
      "Leaders wanted AI help but were deeply worried about losing the authentic, personal tone that made their community special",
    ],

    approach:
      "I interviewed 20+ community leaders to understand their daily workflows in detail. The key finding was that most operational tasks followed predictable patterns and rules. Onboarding a new member always involved the same steps. Engagement nudges were triggered by the same signals. Moderation decisions followed consistent guidelines. This meant AI could handle the execution as long as the community leader defined the rules and tone. I designed Guildy around this principle: the leader sets the strategy and personality, and the AI handles execution. The interface makes it easy to configure automations, review AI actions, and override when needed. Everything the AI does is visible and reversible.",

    keyDecisions: [
      {
        title: "AI as assistant, not replacement",
        description:
          "The AI handles operational tasks but never posts as the community leader without approval. Trust and authenticity are everything in communities. Members can tell when interactions feel automated, and that erodes trust. Guildy's AI works behind the scenes, drafting responses for the leader to approve, suggesting engagement actions, and flagging issues. The leader stays in control of tone, culture, and key decisions.",
        images: ["guildy-desktop.png"],
      },
      {
        title: "Template-first onboarding",
        description:
          "Instead of starting from a blank slate, new community leaders choose from proven templates based on their community type. Each template comes with pre-configured automations, engagement strategies, and growth playbooks. This gets leaders to value quickly and gives them a working baseline to customize rather than building everything from scratch.",
        images: ["guildy-mobile.png"],
      },
    ],

    impact: [
      "Currently in private beta with 12 community leaders",
      "Early users report saving 10+ hours per week on community management",
      "Built end-to-end as a solo designer using AI-assisted development tools",
      "Onboarding completion rate of 85% for new community leaders using templates",
    ],

    whatsNext: [
      "Expand AI capabilities to include content generation assistance and member matching",
      "Add predictive engagement analytics that surface at-risk members before they churn",
      "Build integrations with Discord, Slack, and Circle for cross-platform community management",
      "Plan public launch after completing the beta feedback cycle",
    ],
  },
  {
    title: "CapsuleWebsite",
    slug: "capsulewebsite",
    subtitle:
      "Generate a polished, production-ready website from a single conversation.",
    description:
      "A tool that generates beautiful, functional websites from a single conversation with AI.",
    tags: ["AI", "Generative UI", "Side Project"],
    role: "Creator & Designer",
    timeline: "2024 — Present",
    team: "Solo",
    type: "side-project",
    imageDir: "/case-studies/capsulewebsite",
    heroImage: "hero-desktop.png",

    overview:
      "CapsuleWebsite lets anyone create a polished website by describing what they want in a conversation. No templates, no drag-and-drop, no code. You tell it what you need and it builds something unique. I designed and built it as a solo project to explore how conversational AI can replace traditional website builders. The focus is on output quality. Every generated site should look like a designer made it.",

    myRole: [
      "Sole creator responsible for concept, design, and development",
      "Designed the conversational interface and AI interaction model",
      "Built the component system that AI assembles into cohesive layouts",
      "Defined the quality bar for generated output through extensive iteration",
    ],

    problem:
      "Website builders promise simplicity but still require hours of work. You pick a template, then spend forever tweaking fonts, rearranging sections, resizing images, and fighting with responsive layouts. For most people (freelancers, small businesses, creators) a website is a means to an end, not a creative project. They want something that looks professional and works, without a 40-hour time investment. The tools that exist today give you either full control with high effort (Webflow, Framer) or low effort with generic results (Wix, Squarespace templates). Nobody had cracked the combination of low effort and high quality output.",

    userInsights: [
      "People describe websites in terms of feeling and function (\"clean, professional, with a booking form\") not in terms of layout and components",
      "The biggest frustration with templates was not the initial selection but the endless tweaking to make them feel \"yours\"",
      "Most users only needed 3 to 5 pages and would trade advanced features for faster time to publish",
      "Quality perception was driven primarily by typography, spacing, and image treatment, not by fancy animations or interactions",
    ],

    approach:
      "I studied how people describe websites when they are not constrained by builder interfaces. The language is always about purpose and feeling, never about grids and padding. That insight shaped the entire product. The conversational interface asks about your goals, audience, and aesthetic preferences, then generates a complete site. Under the hood, I built a design system of composable components that the AI arranges into layouts. Every component follows strict typographic and spacing rules so the output always looks cohesive. The AI makes layout and styling decisions within these constraints, which is what keeps quality high even with fully automated generation.",

    keyDecisions: [
      {
        title: "Conversation over configuration",
        description:
          "Every website builder adds more options to handle more use cases. CapsuleWebsite goes the opposite direction. Fewer controls, smarter defaults, and natural language as the primary input. The conversation progressively refines the site through natural dialogue rather than form fields and dropdown menus. Users describe what they want and the AI asks clarifying questions when needed, just like working with a real designer.",
        images: ["hero-desktop.png", "desktop-full.png"],
      },
      {
        title: "Quality floor over feature ceiling",
        description:
          "Rather than maximizing what is possible, I focused on making sure every generated website meets a minimum quality bar. A simple but beautiful site beats a complex but ugly one every time. The component system enforces consistent typography, spacing, and color harmony. The AI cannot generate something that looks bad because the building blocks are all designed to work together. This trade-off means less customization but consistently professional results.",
        images: ["mobile.png"],
      },
    ],

    impact: [
      "Functional prototype generating production-quality websites from conversation",
      "Average time from start to published website: under 5 minutes",
      "100% of test users rated generated sites as \"professional quality\" or higher",
      "Exploring integration with custom domains and hosting providers",
    ],

    whatsNext: [
      "Build e-commerce capabilities for small business users",
      "Explore how the conversational model extends to ongoing site management (content updates, new pages, SEO)",
      "Add collaboration features so clients and designers can refine sites together",
      "Investigate white-label opportunities for agencies and platforms",
    ],
  },
];

export const featuredStudies = caseStudies.filter(
  (cs) => cs.type === "featured"
);
export const sideProjects = caseStudies.filter(
  (cs) => cs.type === "side-project"
);
