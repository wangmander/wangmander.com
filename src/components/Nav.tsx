import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-wide mx-auto flex items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="text-sm font-medium tracking-tight">
          Michael Wang
        </Link>
        <a
          href="mailto:hello@wangmander.com"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
