import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block"
    >
      <div className="aspect-[16/10] bg-neutral-50 rounded-sm mb-6 overflow-hidden">
        {/* Placeholder for case study hero image */}
        <div className="w-full h-full flex items-center justify-center text-muted text-sm">
          {study.title}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-3">
        {study.tags.map((tag) => (
          <span key={tag} className="text-xs text-muted uppercase tracking-wider">
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
  );
}
