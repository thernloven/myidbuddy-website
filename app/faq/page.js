import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";

export const metadata = {
  title: "FAQ — Frequently Asked Questions | myIDBuddy",
  description:
    "Answers to common questions about myIDBuddy: what it is, who can join, how identity verification works, privacy, staff-travel loads, and the waitlist.",
  alternates: { canonical: "https://myidbuddy.com/faq" },
};

const FAQS = [
  {
    q: "What is myIDBuddy?",
    a: "myIDBuddy is a social travel app for ID and standby travelers. It shows you who's flying where on a map, lets you join or host trips, check staff-travel loads, and connect with verified travel buddies — so you never have to fly standby alone.",
  },
  {
    q: "Who can use myIDBuddy?",
    a: "myIDBuddy is built for airline employees and their eligible travel partners and family members who fly on staff-travel benefits. You must be at least 18 years old to use the app.",
  },
  {
    q: "Do I need an airline email to sign up?",
    a: "Airline employees sign up with a valid airline or work email address, which we use to confirm eligibility. Eligible travel partners and family members — who usually don't have an airline email — can join by invitation from a verified employee.",
  },
  {
    q: "How does identity verification work?",
    a: "Verification is a quick live selfie with a randomized pose to confirm a real person is present. We compare it to your profile photos to confirm it's you. We do not store your verification selfie or facial template — they're used only to perform the match and are then deleted. Your selfie is never shown on your profile.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your profile is visible to other travelers by design, but sensitive data like your verification selfie is never shown and never stored. We don't sell your personal information. See our Privacy Policy for full details.",
  },
  {
    q: "What are staff travel loads?",
    a: "Loads tell you how full a flight is expected to be, and therefore how likely you are to get a standby seat. myIDBuddy shows loads by cabin, the number of non-revs already listed, and a color-coded open/tight/full status for each flight.",
  },
  {
    q: "Does myIDBuddy book flights or guarantee seats?",
    a: "No. myIDBuddy is an independent app for connecting travelers and viewing information. Flight loads are for general guidance only and can change at any time. We are not affiliated with any airline, and you should always verify and list through your airline's official staff-travel channels.",
  },
  {
    q: "How much does it cost?",
    a: "myIDBuddy is launching soon and you can join the waitlist for free today. If we introduce paid features in the future, we'll always show the price before you're charged.",
  },
  {
    q: "How do I join the waitlist?",
    a: "Enter your email on myidbuddy.com to join the waitlist. We'll email you the moment you can find your ID buddies. No spam, ever.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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

      <section className="mx-auto max-w-3xl px-5 py-14">
        <p className="text-sm font-bold uppercase tracking-wider text-accent">FAQ</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-lg text-navy/70">
          Everything you need to know about myIDBuddy. Can&apos;t find your answer?{" "}
          <a href="mailto:hello@myidbuddy.com" className="font-semibold text-accent underline underline-offset-2">
            Email us
          </a>
          .
        </p>

        <div className="mt-10 divide-y divide-cloud">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-navy">
                {q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/12 text-accent transition group-open:rotate-45">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">{a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-4xl bg-accent/8 p-7 text-center">
          <h2 className="text-xl font-extrabold tracking-tight text-navy">Ready to find your crew?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-navy/70">
            Join the waitlist and be first on the map when myIDBuddy launches.
          </p>
          <Link
            href="/#waitlist"
            className="mt-5 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-accent-deep"
          >
            Join the waitlist
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
