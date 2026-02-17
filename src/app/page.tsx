import { featuredStudies, sideProjects } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-wide mx-auto px-6 pt-36 pb-24 md:px-10 md:pt-48 md:pb-32">
        <h1 className="text-hero font-medium tracking-tight text-balance">
          Michael Wang
        </h1>
        <p className="mt-6 text-body-lg text-muted max-w-[540px]">
          Product Design Leader focused on AI and complex workflows. I design
          tools that make powerful technology feel simple.
        </p>
      </section>

      {/* Featured Case Studies */}
      <section className="max-w-wide mx-auto px-6 pb-24 md:px-10 md:pb-32">
        <p className="text-xs uppercase tracking-wider text-muted mb-10">
          Selected Work
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
          {featuredStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* Side Projects */}
      <section className="max-w-wide mx-auto px-6 pb-24 md:px-10 md:pb-32">
        <p className="text-xs uppercase tracking-wider text-muted mb-10">
          Side Projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
          {sideProjects.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
