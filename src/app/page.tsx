import { featuredStudies, sideProjects } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-wide mx-auto px-6 pt-36 pb-36 md:px-10 md:pt-48 md:pb-48">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-normal tracking-tight leading-[1.1] text-balance">
          Michael Wang is a product design leader focused on AI—turning
          ambiguity into products people use.
        </h1>
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

      {/* AI Products */}
      <section className="max-w-wide mx-auto px-6 pb-24 md:px-10 md:pb-32">
        <p className="text-xs uppercase tracking-wider text-muted mb-10">
          AI Products
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
