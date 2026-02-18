import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const isCapsule = study.slug === "capsulewebsite";
  const heroSrc = study.heroImage
    ? `/case-studies/${study.slug}/${study.heroImage}`
    : null;

  return (
    <div className="group">
      <Link href={`/case-studies/${study.slug}`} className="block">
        <div className="bg-neutral-50 rounded-sm mb-6 overflow-hidden border border-border">
          {heroSrc ? (
            <Image
              src={heroSrc}
              alt={study.title}
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="aspect-[16/10] w-full flex items-center justify-center text-muted text-sm">
              {study.title}
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-heading-2 font-medium tracking-tight group-hover:text-muted transition-colors">
          {study.title}
        </h3>
        <p className="mt-2 text-body text-muted leading-relaxed">
          {study.description}
        </p>
      </Link>
      <div className="mt-5 flex gap-3">
        <Link
          href={`/case-studies/${study.slug}`}
          className="inline-flex items-center px-4 py-1.5 bg-foreground text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors"
        >
          See more
        </Link>
        {isCapsule && (
          <a
            href="https://capsuleweb.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-1.5 bg-foreground text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors"
          >
            Visit
          </a>
        )}
      </div>
    </div>
  );
}
