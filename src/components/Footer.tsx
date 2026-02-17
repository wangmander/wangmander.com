export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-wide mx-auto px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-content">
          <p className="text-heading-2 font-medium tracking-tight text-foreground">
            Let&apos;s work together
          </p>
          <p className="mt-4 text-body-lg text-muted">
            Currently open to Product Design leadership roles at AI-forward
            companies.
          </p>
          <div className="mt-8 flex gap-6">
            <a
              href="mailto:hello@wangmander.com"
              className="text-body font-medium underline underline-offset-4 hover:text-muted transition-colors"
            >
              hello@wangmander.com
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body font-medium underline underline-offset-4 hover:text-muted transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-16 text-sm text-muted">
          &copy; {new Date().getFullYear()} Michael Wang
        </p>
      </div>
    </footer>
  );
}
