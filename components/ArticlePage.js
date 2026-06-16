import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./SiteFooter";
import { getArticle, relatedArticles } from "./knowledgeData";

export default function ArticlePage({ slug, children }) {
  const article = getArticle(slug);
  const related = relatedArticles(slug);

  return (
    <main className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-cloud/70 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link href="/" aria-label="myIDBuddy home">
            <Image src="/logo.png" alt="myIDBuddy" width={821} height={255} priority className="h-9 w-auto" />
          </Link>
          <Link
            href="/knowledge"
            className="rounded-full border border-cloud px-4 py-2 text-sm font-medium text-navy/70 transition hover:text-navy"
          >
            ← All articles
          </Link>
        </nav>
      </header>

      <article className="mx-auto max-w-3xl px-5 py-14">
        <nav className="text-sm text-muted" aria-label="Breadcrumb">
          <Link href="/knowledge" className="font-medium transition hover:text-navy">
            Knowledge
          </Link>
          {article && <span> · {article.category}</span>}
        </nav>

        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          {article?.title}
        </h1>
        {article && (
          <p className="mt-3 text-sm text-muted">{article.readTime}</p>
        )}
        {article && (
          <p className="mt-6 text-lg leading-relaxed text-navy/70">{article.description}</p>
        )}

        <div className="legal mt-8">{children}</div>

        {/* Inline CTA */}
        <div className="mt-12 rounded-4xl bg-accent/8 p-7 text-center">
          <h2 className="text-xl font-extrabold tracking-tight text-navy">
            Fly standby with a crew, not alone
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-navy/70">
            myIDBuddy shows you who&apos;s flying where, the loads, and who to travel with. Join the
            waitlist to be first on the map.
          </p>
          <Link
            href="/#waitlist"
            className="mt-5 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-accent-deep"
          >
            Join the waitlist
          </Link>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-lg font-bold text-navy">Keep reading</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  href={`/knowledge/${a.slug}`}
                  className="rounded-2xl border border-cloud p-4 transition hover:border-accent/40 hover:shadow-card"
                >
                  <p className="text-sm font-bold text-navy">{a.title}</p>
                  <p className="mt-1 text-xs text-muted">{a.readTime}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <SiteFooter />
    </main>
  );
}
