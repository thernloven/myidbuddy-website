import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./SiteFooter";

export default function LegalPage({ title, updated, intro, children }) {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-cloud/70 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link href="/" aria-label="myIDBuddy home">
            <Image src="/logo.png" alt="myIDBuddy" width={821} height={255} priority className="h-9 w-auto" />
          </Link>
          <Link
            href="/"
            className="rounded-full border border-cloud px-4 py-2 text-sm font-medium text-navy/70 transition hover:text-navy"
          >
            ← Back to home
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">{title}</h1>
        {updated && <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>}
        {intro && <p className="mt-6 text-lg leading-relaxed text-navy/70">{intro}</p>}
        <div className="legal mt-8">{children}</div>
      </article>

      <SiteFooter />
    </main>
  );
}
