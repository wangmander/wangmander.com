function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 6a2 2 0 0 1 2-4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519-1L12 11.671 18.481 5H5.52zM20 7.329l-8 8.186-8-8.186V18h16V7.329z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.174 10.174 0 0 0 4.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.15 10.15 0 0 0 6.29 2.166c1.42 0 2.77-.29 4.006-.816zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248A65.473 65.473 0 0 0 8.12 4.2C5.968 5.55 4.394 7.58 3.645 9.98c-.08-.02.18-.065.32-.065zM9.6 3.45c.93 1.28 2.04 2.7 3.05 4.2 3.18-1.19 4.53-3 4.64-3.15A10.083 10.083 0 0 0 12 1.84c-.84 0-1.65.12-2.4.34v1.27zM18.74 5.7c-.15.18-1.62 2.07-4.92 3.39.24.49.47.99.68 1.49.075.18.15.36.22.53 3.41-.43 6.8.26 7.14.33a10.097 10.097 0 0 0-3.12-5.74z" />
    </svg>
  );
}

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
              className="flex items-center gap-2.5 text-lg md:text-xl font-medium hover:text-muted transition-colors"
            >
              <EmailIcon className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <span>michaelwangdesign@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/michaelwangdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-lg md:text-xl font-medium hover:text-muted transition-colors"
            >
              <LinkedInIcon className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://dribbble.com/wangmander"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-lg md:text-xl font-medium hover:text-muted transition-colors"
            >
              <DribbbleIcon className="w-5 h-5 md:w-6 md:h-6 shrink-0" />
              <span>Dribbble</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
