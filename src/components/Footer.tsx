import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-wide mx-auto px-6 py-20 md:px-10 md:py-32">
        <div>
          <p className="text-heading-1 font-medium tracking-tight text-foreground">
            Let&apos;s work together
          </p>
          <p className="mt-5 text-heading-2 text-muted font-normal max-w-content">
            Currently open to Product Design leadership roles at AI-forward
            companies.
          </p>
          <div className="mt-10 flex items-center gap-6 md:gap-8">
            <a
              href="mailto:michaelwangdesign@gmail.com"
              className="flex items-center gap-3 text-xl md:text-2xl font-medium hover:text-muted transition-colors"
            >
              <Image src="/images/email_logo.png" alt="Email" width={34} height={24} className="shrink-0" />
              <span>michaelwangdesign@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/michaelwangdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl md:text-2xl font-medium hover:text-muted transition-colors"
            >
              <Image src="/images/Linkedin_logo.png" alt="LinkedIn" width={30} height={30} className="shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://dribbble.com/wangmander"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xl md:text-2xl font-medium hover:text-muted transition-colors"
            >
              <Image src="/images/dribbble_logo.png" alt="Dribbble" width={28} height={28} className="shrink-0" />
              <span>Dribbble</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
