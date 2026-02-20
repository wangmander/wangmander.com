import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { getImagesForCaseStudy, humanizeFilename } from "@/lib/images";
import { CaseStudyHero, CaseStudyDecisionImages } from "@/components/CaseStudyImages";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const study = caseStudies.find((cs) => cs.slug === params.slug);
  if (!study) return {};
  return {
    title: `${study.title} — Michael Wang`,
    description: study.description,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const study = caseStudies.find((cs) => cs.slug === params.slug);
  if (!study) notFound();

  const allImages = getImagesForCaseStudy(study.slug);
  const heroSrc = study.heroImage
    ? `/case-studies/${study.slug}/${study.heroImage}`
    : allImages[0];

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
          <p className="mt-4 text-body-lg text-muted max-w-content">
            {study.subtitle}
          </p>
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

        {/* Hero image */}
        {heroSrc && (
          <CaseStudyHero src={heroSrc} alt={`${study.title} hero`} />
        )}

        {/* At a Glance */}
        <div className="max-w-content mx-auto mb-20 p-8 bg-neutral-50 rounded-sm">
          <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
            At a Glance
          </h2>
          <p className="text-body leading-relaxed mb-6">
            {study.problem.split(". ").slice(0, 2).join(". ")}.
          </p>
          <ul className="space-y-2">
            {study.impact.slice(0, 4).map((item, i) => (
              <li key={i} className="text-body flex gap-3">
                <span className="text-muted shrink-0">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="max-w-content mx-auto">
          {/* A: Overview */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Overview
            </h2>
            <p className="text-body-lg leading-relaxed">{study.overview}</p>
          </section>

          {/* B: My Role */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              My Role
            </h2>
            <ul className="space-y-3">
              {study.myRole.map((item, i) => (
                <li key={i} className="text-body leading-relaxed flex gap-3">
                  <span className="text-muted shrink-0">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* C: The Problem */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              The Problem
            </h2>
            <p className="text-body-lg leading-relaxed">{study.problem}</p>
          </section>

          {/* D: What I Learned from Users */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              What I Learned from Users
            </h2>
            <div className="space-y-4">
              {study.userInsights.map((insight, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-sm text-muted font-medium mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>
          </section>

          {/* E: The Approach */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              The Approach
            </h2>
            <p className="text-body-lg leading-relaxed">{study.approach}</p>
          </section>
        </div>

        {/* F: Key Design Decisions */}
        <section className="mb-20">
          <div className="max-w-content mx-auto">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-12">
              Key Design Decisions
            </h2>
          </div>
          <div className="space-y-24">
            {study.keyDecisions.map((decision, i) => (
              <div key={i}>
                {decision.sectionBreak && (
                  <div className="max-w-content mx-auto mb-16 flex items-center gap-6">
                    <div className="h-px flex-1 bg-neutral-200" />
                    <span className="text-xs uppercase tracking-widest text-muted font-medium">
                      {decision.sectionBreak}
                    </span>
                    <div className="h-px flex-1 bg-neutral-200" />
                  </div>
                )}
                {(decision.title || decision.description) && (
                  <div className="max-w-content mx-auto mb-8">
                    {decision.title && (
                      decision.featureTitle ? (
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                          {decision.title}
                        </h3>
                      ) : (
                        <h3 className="text-heading-2 font-medium tracking-tight mb-4">
                          {decision.title}
                        </h3>
                      )
                    )}
                    {decision.description && (
                      <p className="text-body text-muted leading-relaxed">
                        {decision.description}
                      </p>
                    )}
                  </div>
                )}
                {decision.images.length > 0 && (
                  <CaseStudyDecisionImages
                    images={decision.images.map((img, idx) => ({
                      src: `/case-studies/${study.slug}/${img}`,
                      caption: decision.captions?.[idx] ?? humanizeFilename(img),
                    }))}
                    layout={decision.layout}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* G: Impact */}
        <div className="max-w-content mx-auto">
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Impact
            </h2>
            <ul className="space-y-3">
              {study.impact.map((item, i) => (
                <li key={i} className="text-body-lg leading-relaxed flex gap-3">
                  <span className="text-muted shrink-0">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* H: What I Would Do Next */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              What I Would Do Next
            </h2>
            <ul className="space-y-3">
              {study.whatsNext.map((item, i) => (
                <li key={i} className="text-body-lg leading-relaxed flex gap-3">
                  <span className="text-muted shrink-0">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* I: CTA */}
          {study.ctaUrl && (
            <section className="mb-20">
              <a
                href={study.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-foreground text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors"
              >
                {study.ctaLabel || "Try it"} &rarr;
              </a>
            </section>
          )}

          {/* J: Deep Dive */}
          {study.deckUrl && (
            <section className="mb-24">
              <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
                Deep Dive
              </h2>
              <a
                href={study.deckUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-foreground text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors"
              >
                View full deck &rarr;
              </a>
            </section>
          )}
        </div>
      </article>

      <Footer />
    </>
  );
}
