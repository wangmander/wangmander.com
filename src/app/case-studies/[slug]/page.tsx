import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
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
          <p className="mt-6 text-body-lg text-muted max-w-content">
            {study.description}
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
        </header>

        {/* Hero image placeholder */}
        <div className="aspect-[16/9] bg-neutral-50 rounded-sm mb-24">
          <div className="w-full h-full flex items-center justify-center text-muted text-sm">
            Hero image — add to /public/case-studies/{study.slug}/01-hero.png
          </div>
        </div>

        {/* Content */}
        <div className="max-w-content mx-auto">
          {/* Overview */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Overview
            </h2>
            <p className="text-body-lg leading-relaxed">{study.overview}</p>
          </section>

          {/* Problem */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              The Problem
            </h2>
            <p className="text-body-lg leading-relaxed">{study.problem}</p>
          </section>

          {/* Image placeholder */}
          <div className="mb-20 -mx-6 md:-mx-10 lg:-mx-24">
            <div className="aspect-[16/9] bg-neutral-50 rounded-sm">
              <div className="w-full h-full flex items-center justify-center text-muted text-sm">
                Problem space image — /public/case-studies/{study.slug}/02-problem.png
              </div>
            </div>
          </div>

          {/* Approach */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Approach
            </h2>
            <div className="space-y-4">
              {study.approach.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-sm text-muted font-medium mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Image placeholder */}
          <div className="mb-20 -mx-6 md:-mx-10 lg:-mx-24">
            <div className="aspect-[16/9] bg-neutral-50 rounded-sm">
              <div className="w-full h-full flex items-center justify-center text-muted text-sm">
                Process image — /public/case-studies/{study.slug}/03-process.png
              </div>
            </div>
          </div>

          {/* Key Decisions */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Key Decisions
            </h2>
            <div className="space-y-12">
              {study.keyDecisions.map((decision, i) => (
                <div key={i}>
                  <h3 className="text-heading-2 font-medium tracking-tight mb-3">
                    {decision.title}
                  </h3>
                  <p className="text-body text-muted leading-relaxed">
                    {decision.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Image placeholder */}
          <div className="mb-20 -mx-6 md:-mx-10 lg:-mx-24">
            <div className="aspect-[16/9] bg-neutral-50 rounded-sm">
              <div className="w-full h-full flex items-center justify-center text-muted text-sm">
                Solution image — /public/case-studies/{study.slug}/04-solution.png
              </div>
            </div>
          </div>

          {/* Impact */}
          <section className="mb-20">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              Impact
            </h2>
            <ul className="space-y-3">
              {study.impact.map((item, i) => (
                <li key={i} className="text-body-lg leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* What's Next */}
          <section className="mb-24">
            <h2 className="text-xs uppercase tracking-wider text-muted mb-6">
              What&apos;s Next
            </h2>
            <p className="text-body-lg leading-relaxed">{study.next}</p>
          </section>
        </div>
      </article>

      <Footer />
    </>
  );
}
