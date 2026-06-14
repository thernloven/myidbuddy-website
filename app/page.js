import Image from "next/image";
import WaitlistForm from "../components/WaitlistForm";
import {
  PhoneFrame,
  MapScreen,
  TripScreen,
  FlightsScreen,
  ChatScreen,
  ProfileScreen,
} from "../components/PhoneScreens";

function Logo({ className = "h-9" }) {
  return (
    <Image
      src="/logo.png"
      alt="myID buddy"
      width={821}
      height={255}
      priority
      className={`${className} w-auto`}
    />
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-cloud/70 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo />
        <div className="hidden items-center gap-8 text-sm font-medium text-navy/70 md:flex">
          <a href="#how" className="transition hover:text-navy">How it works</a>
          <a href="#features" className="transition hover:text-navy">Features</a>
          <a href="#safety" className="transition hover:text-navy">Safety</a>
        </div>
        <a
          href="#waitlist"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-accent-deep"
        >
          Get early access
        </a>
      </nav>
    </header>
  );
}

function FloatingChip({ className, children }) {
  return (
    <div className={`absolute z-20 rounded-2xl bg-white px-3 py-2 shadow-soft ${className}`}>
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="dotted absolute inset-0 opacity-60" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-[#9B6BDF]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/12 px-3 py-1 text-xs font-semibold text-accent">
            ✈️ For ID & standby travelers
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl">
            Find your{" "}
            <span className="relative whitespace-nowrap text-accent">
              standby crew
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 9C40 3 160 2 198 6" stroke="#F46C8B" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>
          <p className="mt-6 max-w-md text-lg text-navy/70">
            See who's flying where, join trips with other non-revs, check staff-travel
            loads, and connect with verified buddies — all on one playful map.
          </p>
          <div id="waitlist" className="mt-8">
            <WaitlistForm />
            <p className="mt-3 text-xs text-muted">
              Join 3,000+ travelers on the waitlist. No spam, ever.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-[270px] sm:w-[300px]">
          <div className="absolute inset-0 -z-10 translate-y-6 scale-95 rounded-[3rem] bg-accent/30 blur-2xl" />
          <PhoneFrame>
            <MapScreen />
          </PhoneFrame>
          <FloatingChip className="-left-10 top-20">
            <p className="text-[11px] font-bold text-navy">16 going to Paris</p>
            <p className="text-[10px] text-muted">Jun 12–16</p>
          </FloatingChip>
          <FloatingChip className="-right-8 bottom-28">
            <p className="flex items-center gap-1 text-[11px] font-bold text-navy">
              <span className="h-2 w-2 rounded-full bg-[#3FBF8F]" /> 14 seats open
            </p>
            <p className="text-[10px] text-muted">SAS · Economy</p>
          </FloatingChip>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    ["3,000+", "travelers waiting"],
    ["80+", "cities on the map"],
    ["30+", "airlines & ID agreements"],
    ["100%", "verified profiles"],
  ];
  return (
    <section className="border-y border-cloud bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
        {items.map(([n, l]) => (
          <div key={l} className="text-center">
            <p className="text-3xl font-extrabold text-navy">{n}</p>
            <p className="mt-1 text-sm text-muted">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ["📍", "Drop your trip", "Add where and when you're going — single city or a multi-city route. Make it open, request-only, or private."],
    ["🗺️", "See who's going", "Spin the map and tap a city to see every traveler heading there, grouped by date, with their loads and vibe."],
    ["🤝", "Connect & fly", "Join trips, chat as a group or 1:1, swap flight loads, and meet your crew at the gate."],
  ];
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-accent">How it works</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Standby is better together
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map(([icon, title, body], i) => (
          <div key={title} className="relative rounded-4xl border border-cloud bg-white p-7 shadow-card">
            <span className="absolute right-6 top-6 text-sm font-bold text-cloud">0{i + 1}</span>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/12 text-2xl">{icon}</div>
            <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureRow({ flip, label, title, body, points, screen }) {
  return (
    <div className="grid items-center gap-12 md:grid-cols-2">
      <div className={flip ? "md:order-2" : ""}>
        <p className="text-sm font-bold uppercase tracking-wider text-accent">{label}</p>
        <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{title}</h3>
        <p className="mt-4 text-navy/70">{body}</p>
        <ul className="mt-5 space-y-2.5">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-navy/80">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className={`flex justify-center ${flip ? "md:order-1" : ""}`}>
        <div className="relative w-[250px]">
          <div className="absolute inset-0 -z-10 translate-y-5 scale-95 rounded-[3rem] bg-accent/20 blur-2xl" />
          <PhoneFrame>{screen}</PhoneFrame>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="bg-sky/40">
      <div className="mx-auto max-w-6xl space-y-24 px-5 py-24">
        <FeatureRow
          label="The map"
          title="A playful map of where everyone's flying"
          body="No more guessing who's around. Cities cluster when you zoom out and spread into photo-card pins as you zoom in."
          points={["Live clusters by region", "Tap a city for its travelers", "Filter by age, role, activity & budget"]}
          screen={<MapScreen />}
        />
        <FeatureRow
          flip
          label="Trips"
          title="Join trips, or host your own"
          body="Every trip is a date window you can join. Set it open, request-to-join, or invite-only — and see exactly who's coming."
          points={["Open / request / private trips", "Spots, budget & date flexibility", "Group chats per trip"]}
          screen={<TripScreen />}
        />
        <FeatureRow
          label="Staff travel"
          title="See the loads before you list"
          body="Pull up every flight for a trip with standby seats by cabin and how many non-revs are already listed."
          points={["Economy & business loads", "Standby list counts", "Color-coded open / tight / full"]}
          screen={<FlightsScreen />}
        />
        <FeatureRow
          flip
          label="Profiles"
          title="Verified travelers, real stories"
          body="Selfie-verified profiles, employee or travel-partner status, interests, and a 'been to' world map of everywhere they've flown."
          points={["Photo verification badge", "Connected Instagram", "Your countries, lit up"]}
          screen={<ProfileScreen />}
        />
        <FeatureRow
          label="Chat"
          title="Plan it together"
          body="Group threads for each trip and 1:1 chats with your buddies — so you can sort meetup points and swap load tips."
          points={["Per-trip group chats", "Direct messages", "Share plans in seconds"]}
          screen={<ChatScreen />}
        />
      </div>
    </section>
  );
}

function Safety() {
  const items = [
    ["✅", "Verified by selfie", "A quick live selfie + face match keeps profiles real — so you know who you're flying with."],
    ["🔒", "Private when you want", "Host invite-only trips for friends, or open them to the whole standby community."],
    ["🛡️", "You're in control", "Choose who can join by age, gender, role and language — and approve every request."],
  ];
  return (
    <section id="safety" className="mx-auto max-w-6xl px-5 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-accent">Trust & safety</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Built for real connections
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map(([icon, title, body]) => (
          <div key={title} className="rounded-4xl bg-cloud/60 p-7">
            <div className="text-3xl">{icon}</div>
            <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-navy/70">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-accent px-8 py-16 text-center shadow-glow">
        <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
        <div className="absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
        <div className="relative">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Never fly standby alone again
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/85">
            Be first on the map when we launch. Join the waitlist today.
          </p>
          <div className="mt-8 flex justify-center">
            <WaitlistForm dark />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-cloud">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row">
        <Logo />
        <div className="flex gap-6 text-sm text-muted">
          <a href="#" className="transition hover:text-navy">Privacy</a>
          <a href="#" className="transition hover:text-navy">Terms</a>
          <a href="#" className="transition hover:text-navy">Contact</a>
        </div>
        <p className="text-sm text-muted">© {new Date().getFullYear()} myidbuddy</p>
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Safety />
      <CTA />
      <Footer />
    </main>
  );
}
