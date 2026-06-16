import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";
import { ARTICLES, CATEGORIES } from "../../components/knowledgeData";

export const metadata = {
  title: "Knowledge Base — Staff Travel, Non-Rev & ID Travel Explained | myIDBuddy",
  description:
    "Everything ID & standby travelers need to know: what non-rev and standby travel mean, ID90 and ID fares explained, how to read staff-travel loads, and tips for flying non-rev.",
  alternates: { canonical: "https://myidbuddy.com/knowledge" },
};

export default function KnowledgePage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-cloud/70 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
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

      <section className="border-b border-cloud bg-sky/40">
        <div className="mx-auto max-w-5xl px-5 py-14 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-accent">Knowledge base</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Staff travel, explained
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-navy/70">
            New to flying standby — or just want to fly smarter? Learn the language of non-rev travel,
            how loads work, and how to get the most from your ID benefits.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-14">
        {CATEGORIES.map((category) => {
          const items = ARTICLES.filter((a) => a.category === category);
          if (items.length === 0) return null;
          return (
            <section key={category} className="mb-12">
              <h2 className="text-sm font-bold uppercase tracking-wider text-accent">{category}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/knowledge/${a.slug}`}
                    className="flex flex-col rounded-4xl border border-cloud bg-white p-6 shadow-card transition hover:border-accent/40 hover:shadow-soft"
                  >
                    <h3 className="text-lg font-bold text-navy">{a.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/70">{a.description}</p>
                    <p className="mt-4 text-xs font-semibold text-muted">{a.readTime}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <div className="rounded-4xl bg-accent/8 p-8 text-center">
          <h2 className="text-xl font-extrabold tracking-tight text-navy">Still have a question?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-navy/70">
            Check our frequently asked questions or reach out — we&apos;re happy to help.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/faq"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-accent-deep"
            >
              Read the FAQ
            </Link>
            <a
              href="mailto:hello@myidbuddy.com"
              className="rounded-full border border-cloud px-6 py-3 text-sm font-semibold text-navy/80 transition hover:text-navy"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}
