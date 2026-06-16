import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "../components/WaitlistForm";
import EarlyAccessButton from "../components/EarlyAccessButton";
import SiteFooter from "../components/SiteFooter";
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
      alt="myIDBuddy"
      width={821}
      height={255}
      priority
      className={`${className} w-auto`}
    />
  );
}

// Text wordmark — "myID" bold, "Buddy" light.
function Wordmark({ className = "text-lg" }) {
  return (
    <span className={`tracking-tight text-navy ${className}`}>
      <span className="font-extrabold">myID</span>
      <span className="font-light">Buddy</span>
    </span>
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
          <Link href="/knowledge" className="transition hover:text-navy">Knowledge</Link>
        </div>
        <EarlyAccessButton />
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
          <span className="-ml-3 inline-flex items-center gap-2 rounded-full bg-accent/12 px-3 py-1 text-sm font-semibold text-accent">
            For ID & standby travelers
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl md:text-6xl">
            Find your{" "}
            <span className="relative whitespace-nowrap text-accent">
              ID buddies
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
          <FloatingChip className="-left-10 top-24">
            <p className="text-[11px] font-bold text-navy">16 going to Paris</p>
            <p className="text-[10px] text-muted">Jun 12–16</p>
          </FloatingChip>
          <FloatingChip className="-right-8 bottom-44">
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
    ["1M+", "ID travelers worldwide"],
    ["190+", "countries on the map"],
    ["300+", "airlines & ID agreements"],
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

function DropPinIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g fill="none">
        <path
          d="M12 17C14.5847 17 16.9636 17.2231 18.7285 17.6006C19.6067 17.7884 20.3823 18.0253 20.9561 18.3154C21.5239 18.6026 22 19 22 19.5C22 20 21.5239 20.3974 20.9561 20.6846C20.3823 20.9747 19.6067 21.2116 18.7285 21.3994C16.9636 21.7769 14.5847 22 12 22C9.41532 22 7.03636 21.7769 5.27148 21.3994C4.39327 21.2116 3.61767 20.9747 3.04395 20.6846C2.47608 20.3974 2 20 2 19.5C2 19 2.47608 18.6026 3.04395 18.3154C3.61767 18.0253 4.39327 17.7884 5.27148 17.6006C7.03636 17.2231 9.41532 17 12 17ZM12 4C14.7614 4 17 6.23858 17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9C7 6.23858 9.23858 4 12 4Z"
          fill="url(#dropPinDark)"
          mask="url(#dropPinMask)"
        />
        <path
          d="M12 1C15.8041 1 19.9998 3.68995 20 8.59375C20 11.8252 18.0301 14.6669 16.2344 16.6074C15.3187 17.5969 14.4053 18.3973 13.7227 18.9502C13.5202 19.1142 13.3124 19.2741 13.1016 19.4307C12.4477 19.9161 11.5522 19.9163 10.8984 19.4307C10.6887 19.2749 10.4813 19.1154 10.2773 18.9502C9.59466 18.3973 8.68128 17.5969 7.76562 16.6074C5.96987 14.6669 4 11.8252 4 8.59375C4.00016 3.68995 8.1959 1 12 1ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z"
          fill="url(#dropPinBlur)"
        />
        <path
          d="M12 1C15.8041 1 19.9998 3.68995 20 8.59375C20 11.8252 18.0301 14.6669 16.2344 16.6074C15.3187 17.5969 14.4053 18.3973 13.7227 18.9502C13.5202 19.1142 13.3124 19.2741 13.1016 19.4307C12.4477 19.9161 11.5522 19.9163 10.8984 19.4307C10.6887 19.2749 10.4813 19.1154 10.2773 18.9502C9.59466 18.3973 8.68128 17.5969 7.76562 16.6074C5.96987 14.6669 4 11.8252 4 8.59375C4.00016 3.68995 8.1959 1 12 1ZM12 1.75C8.48519 1.75 4.75015 4.21892 4.75 8.59375C4.75 11.5329 6.55505 14.1943 8.31641 16.0977C9.20127 17.0538 10.086 17.8301 10.749 18.3672C10.9432 18.5245 11.1426 18.6773 11.3457 18.8281C11.7339 19.1164 12.2658 19.1166 12.6543 18.8281C12.8583 18.6767 13.0582 18.5234 13.251 18.3672C13.914 17.8301 14.7987 17.0538 15.6836 16.0977C17.4449 14.1943 19.25 11.5329 19.25 8.59375C19.2498 4.21892 15.5148 1.75 12 1.75Z"
          fill="url(#dropPinLight)"
        />
      </g>
      <defs>
        <linearGradient id="dropPinDark" x1="12" y1="0" x2="12" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F88BA4" />
          <stop offset="1" stopColor="#E0517A" />
        </linearGradient>
        <linearGradient id="dropPinBlur" x1="12" y1="1" x2="12" y2="19.795" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(252, 227, 234, 0.75)" />
          <stop offset="1" stopColor="rgba(244, 108, 139, 0.35)" />
        </linearGradient>
        <linearGradient id="dropPinLight" x1="12" y1="1" x2="12" y2="11.884" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="1" stopColor="rgba(255, 255, 255, 1)" stopOpacity="0" />
        </linearGradient>
        <mask id="dropPinMask">
          <rect width="100%" height="100%" fill="#FFF" />
          <path
            d="M12 1C15.8041 1 19.9998 3.68995 20 8.59375C20 11.8252 18.0301 14.6669 16.2344 16.6074C15.3187 17.5969 14.4053 18.3973 13.7227 18.9502C13.5202 19.1142 13.3124 19.2741 13.1016 19.4307C12.4477 19.9161 11.5522 19.9163 10.8984 19.4307C10.6887 19.2749 10.4813 19.1154 10.2773 18.9502C9.59466 18.3973 8.68128 17.5969 7.76562 16.6074C5.96987 14.6669 4 11.8252 4 8.59375C4.00016 3.68995 8.1959 1 12 1ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z"
            fill="#000"
          />
        </mask>
      </defs>
    </svg>
  );
}

function SearchIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g fill="none">
        <path
          d="M10.586 10.5859C11.3671 9.80486 12.6331 9.80486 13.4142 10.5859L21.9142 19.0859L22.0519 19.2373C22.6926 20.0228 22.6464 21.1818 21.9142 21.914C21.1819 22.6463 20.0229 22.6925 19.2374 22.0517L19.086 21.914L10.586 13.414C9.80498 12.633 9.80498 11.367 10.586 10.5859Z"
          fill="url(#searchDark)"
          mask="url(#searchMask)"
        />
        <path
          d="M18.5 10C18.5 14.6943 14.6943 18.5 10 18.5C5.30567 18.5 1.5 14.6943 1.5 10C1.5 5.30567 5.30567 1.5 10 1.5C14.6943 1.5 18.5 5.30567 18.5 10Z"
          fill="url(#searchBlur)"
        />
        <path
          d="M17.75 10C17.75 5.71989 14.2801 2.25 10 2.25C5.71989 2.25 2.25 5.71989 2.25 10C2.25 14.2801 5.71989 17.75 10 17.75V18.5C5.30567 18.5 1.5 14.6943 1.5 10C1.5 5.30567 5.30567 1.5 10 1.5C14.6943 1.5 18.5 5.30567 18.5 10C18.5 14.6943 14.6943 18.5 10 18.5V17.75C14.2801 17.75 17.75 14.2801 17.75 10Z"
          fill="url(#searchLight)"
        />
      </g>
      <defs>
        <linearGradient id="searchDark" x1="16.25" y1="10" x2="16.25" y2="22.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F88BA4" />
          <stop offset="1" stopColor="#E0517A" />
        </linearGradient>
        <linearGradient id="searchBlur" x1="10" y1="1.5" x2="10" y2="18.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(252, 227, 234, 0.75)" />
          <stop offset="1" stopColor="rgba(244, 108, 139, 0.35)" />
        </linearGradient>
        <linearGradient id="searchLight" x1="10" y1="1.5" x2="10" y2="11.345" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="1" stopColor="rgba(255, 255, 255, 1)" stopOpacity="0" />
        </linearGradient>
        <mask id="searchMask">
          <rect width="100%" height="100%" fill="#FFF" />
          <path
            d="M18.5 10C18.5 14.6943 14.6943 18.5 10 18.5C5.30567 18.5 1.5 14.6943 1.5 10C1.5 5.30567 5.30567 1.5 10 1.5C14.6943 1.5 18.5 5.30567 18.5 10Z"
            fill="#000"
          />
        </mask>
      </defs>
    </svg>
  );
}

function MessagesIcon({ className = "h-7 w-7" }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g fill="none">
        <path
          d="M1 9.99348C1.00003 11.624 1.44063 13.1472 2.19626 14.4646C2.38601 14.9255 2.27792 15.4945 2.15636 15.9568C1.97097 16.6619 1.62172 17.3398 1.21379 17.7485C1.0104 17.9522 0.945503 18.2561 1.04846 18.525C1.1515 18.7939 1.40329 18.9771 1.69077 18.9927C2.51536 19.0372 3.42875 18.8742 4.22582 18.6419C4.83702 18.4638 5.42053 18.2318 5.88387 17.9889C7.15411 18.645 8.57122 18.9955 10.0009 18.9955C14.9719 18.9954 18.9997 14.9668 19 9.99728C19 5.05316 15.0118 1.04141 10.0779 1C5.1088 1.00007 1 5.02371 1 9.99348Z"
          fill="url(#msgsDark)"
          mask="url(#msgsMask)"
        />
        <path
          d="M22.75 14.4971C22.75 15.8083 22.3947 17.0325 21.7881 18.0918C21.4381 18.7473 22.0797 20.0133 22.5303 20.4648C22.7394 20.6742 22.8061 20.9874 22.7002 21.2637C22.5942 21.5399 22.3354 21.7282 22.04 21.7441C21.3651 21.7806 20.6264 21.6475 19.9893 21.4619C19.536 21.3299 19.098 21.1595 18.7354 20.9775C17.7323 21.4798 16.6207 21.7461 15.499 21.7461C11.4948 21.7459 8.2502 18.5019 8.25 14.5C8.25 10.498 11.4977 7.25 15.501 7.25C19.5037 7.25018 22.75 10.4949 22.75 14.4971Z"
          fill="url(#msgsBlur)"
        />
        <path
          d="M22 14.4971C22 11.0214 19.2686 8.18279 15.835 8.00879L15.501 8C11.9118 8 9 10.9122 9 14.5C9.0002 18.0874 11.9088 20.9959 15.499 20.9961V21.7461C11.4948 21.7459 8.2502 18.5019 8.25 14.5C8.25 10.498 11.4977 7.25 15.501 7.25C19.5037 7.25018 22.75 10.4949 22.75 14.4971C22.75 15.8083 22.3947 17.0325 21.7881 18.0918C21.4381 18.7473 22.0797 20.0133 22.5303 20.4648C22.7394 20.6742 22.8061 20.9874 22.7002 21.2637C22.5942 21.5399 22.3354 21.7282 22.04 21.7441C21.3651 21.7806 20.6264 21.6475 19.9893 21.4619C19.536 21.3299 19.098 21.1595 18.7354 20.9775C17.7323 21.4798 16.6207 21.7461 15.499 21.7461V20.9961C16.5025 20.9961 17.4992 20.7574 18.3994 20.3066C18.6109 20.2007 18.8599 20.2016 19.0713 20.3076C19.389 20.467 19.7847 20.6214 20.1992 20.7422C20.7163 20.8928 21.2777 20.9965 21.7852 21L22 20.9951H21.999C21.683 20.6784 21.3597 20.1509 21.1582 19.6211C21.0549 19.3495 20.9707 19.0451 20.9453 18.7373C20.9203 18.4343 20.9483 18.0728 21.127 17.7383L21.1377 17.7188C21.6146 16.886 21.9171 15.9424 21.9854 14.9336L22 14.4971Z"
          fill="url(#msgsLight)"
        />
      </g>
      <defs>
        <linearGradient id="msgsDark" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F88BA4" />
          <stop offset="1" stopColor="#E0517A" />
        </linearGradient>
        <linearGradient id="msgsBlur" x1="15.5" y1="7.25" x2="15.5" y2="21.75" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(252, 227, 234, 0.75)" />
          <stop offset="1" stopColor="rgba(244, 108, 139, 0.35)" />
        </linearGradient>
        <linearGradient id="msgsLight" x1="15.5" y1="7.25" x2="15.5" y2="15.647" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="1" stopColor="rgba(255, 255, 255, 1)" stopOpacity="0" />
        </linearGradient>
        <mask id="msgsMask">
          <rect width="100%" height="100%" fill="#FFF" />
          <path
            d="M22.75 14.4971C22.75 15.8083 22.3947 17.0325 21.7881 18.0918C21.4381 18.7473 22.0797 20.0133 22.5303 20.4648C22.7394 20.6742 22.8061 20.9874 22.7002 21.2637C22.5942 21.5399 22.3354 21.7282 22.04 21.7441C21.3651 21.7806 20.6264 21.6475 19.9893 21.4619C19.536 21.3299 19.098 21.1595 18.7354 20.9775C17.7323 21.4798 16.6207 21.7461 15.499 21.7461C11.4948 21.7459 8.2502 18.5019 8.25 14.5C8.25 10.498 11.4977 7.25 15.501 7.25C19.5037 7.25018 22.75 10.4949 22.75 14.4971Z"
            fill="#000"
          />
        </mask>
      </defs>
    </svg>
  );
}

function HowItWorks() {
  const steps = [
    [<DropPinIcon key="pin" />, "Drop your trip", "Add where and when you're going — single city or a multi-city route. Make it open, request-only, or private."],
    [<SearchIcon key="search" />, "See who's going", "Spin the map and tap a city to see every traveler heading there, grouped by date, with their loads and vibe."],
    [<MessagesIcon key="msgs" />, "Connect & fly", "Join trips, chat as a group or 1:1, swap flight loads, and meet your buddies at the gate."],
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

function CheckIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g fill="none">
        <path
          d="M16.586 7.08579C17.367 6.30474 18.6331 6.30474 19.4141 7.08579C20.1951 7.86684 20.1951 9.13289 19.4141 9.91391L11.9141 17.4139C11.1331 18.1949 9.86705 18.1949 9.086 17.4139L5.086 13.4139C4.30495 12.6329 4.30495 11.3668 5.086 10.5858C5.86705 9.80474 7.13308 9.80474 7.91412 10.5858L10.5001 13.1717L16.586 7.08579Z"
          fill="url(#checkDark)"
          mask="url(#checkMask)"
        />
        <path
          d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM18.707 7.79297C18.3165 7.40245 17.6835 7.40244 17.293 7.79297L10.5 14.5859L7.20703 11.293C6.81651 10.9024 6.18349 10.9024 5.79297 11.293C5.40245 11.6835 5.40245 12.3165 5.79297 12.707L9.79297 16.707C10.1835 17.0976 10.8165 17.0976 11.207 16.707L18.707 9.20703C19.0976 8.81651 19.0976 8.18349 18.707 7.79297Z"
          fill="url(#checkBlur)"
        />
        <path
          d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25C17.6609 22.25 22.25 17.6609 22.25 12C22.25 6.33908 17.6609 1.75 12 1.75Z"
          fill="url(#checkLight)"
        />
      </g>
      <defs>
        <linearGradient id="checkDark" x1="12.25" y1="6.5" x2="12.25" y2="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F88BA4" />
          <stop offset="1" stopColor="#E0517A" />
        </linearGradient>
        <linearGradient id="checkBlur" x1="12" y1="1" x2="12" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(252, 227, 234, 0.75)" />
          <stop offset="1" stopColor="rgba(244, 108, 139, 0.35)" />
        </linearGradient>
        <linearGradient id="checkLight" x1="12" y1="1" x2="12" y2="13.74" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="1" stopColor="rgba(255, 255, 255, 1)" stopOpacity="0" />
        </linearGradient>
        <mask id="checkMask">
          <rect width="100%" height="100%" fill="#FFF" />
          <path
            d="M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM18.707 7.79297C18.3165 7.40245 17.6835 7.40244 17.293 7.79297L10.5 14.5859L7.20703 11.293C6.81651 10.9024 6.18349 10.9024 5.79297 11.293C5.40245 11.6835 5.40245 12.3165 5.79297 12.707L9.79297 16.707C10.1835 17.0976 10.8165 17.0976 11.207 16.707L18.707 9.20703C19.0976 8.81651 19.0976 8.18349 18.707 7.79297Z"
            fill="#000"
          />
        </mask>
      </defs>
    </svg>
  );
}

function LockIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g fill="none">
        <path
          d="M16 12V6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6V12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12V6C6 2.68629 8.68629 0 12 0C15.3137 0 18 2.68629 18 6V12C18 12.5523 17.5523 13 17 13C16.4477 13 16 12.5523 16 12Z"
          fill="url(#lockDark)"
          mask="url(#lockMask)"
        />
        <path
          d="M2 14.4V15.6C2 17.8402 2 18.9603 2.43597 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C5.03969 22 6.15979 22 8.4 22H15.6C17.8402 22 18.9603 22 19.816 21.564C20.5686 21.1805 21.1805 20.5686 21.564 19.816C22 18.9603 22 17.8402 22 15.6V14.4C22 12.1598 22 11.0397 21.564 10.184C21.1805 9.43139 20.5686 8.81947 19.816 8.43597C18.9603 8 17.8402 8 15.6 8H8.4C6.15979 8 5.03969 8 4.18404 8.43597C3.43139 8.81947 2.81947 9.43139 2.43597 10.184C2 11.0397 2 12.1598 2 14.4Z"
          fill="url(#lockBlur)"
        />
        <path
          d="M15.5996 21.25V22H8.40039V21.25H15.5996ZM21.25 15.5996V14.4004C21.25 13.268 21.2497 12.4633 21.1982 11.834C21.1475 11.2134 21.0506 10.8289 20.8955 10.5244C20.5839 9.91304 20.087 9.41605 19.4756 9.10449C19.1711 8.94936 18.7866 8.85247 18.166 8.80176C17.5367 8.75035 16.732 8.75 15.5996 8.75H8.40039C7.26798 8.75 6.46335 8.75035 5.83398 8.80176C5.21336 8.85247 4.82889 8.94936 4.52441 9.10449C3.91305 9.41605 3.41605 9.91305 3.10449 10.5244C2.94936 10.8289 2.85247 11.2134 2.80176 11.834C2.75035 12.4633 2.75 13.268 2.75 14.4004V15.5996C2.75 16.732 2.75035 17.5367 2.80176 18.166C2.85247 18.7866 2.94936 19.1711 3.10449 19.4756C3.41605 20.087 3.91305 20.5839 4.52441 20.8955C4.82889 21.0506 5.21336 21.1475 5.83398 21.1982C6.46335 21.2497 7.26798 21.25 8.40039 21.25V22L6.91602 21.9932C5.72431 21.9744 4.96088 21.9041 4.34766 21.6406L4.18359 21.5645C3.52512 21.2289 2.97413 20.7183 2.58984 20.0918L2.43555 19.8164C1.99957 18.9608 2 17.8398 2 15.5996V14.4004C2 12.1602 1.99957 11.0392 2.43555 10.1836C2.81902 9.43109 3.43109 8.81902 4.18359 8.43555C4.82525 8.10861 5.61607 8.02728 6.91602 8.00684L8.40039 8H15.5996C17.8398 8 18.9608 7.99957 19.8164 8.43555C20.5689 8.81902 21.181 9.43109 21.5645 10.1836C22.0004 11.0392 22 12.1602 22 14.4004V15.5996C22 17.8398 22.0004 18.9608 21.5645 19.8164L21.4102 20.0918C21.0259 20.7183 20.4749 21.2289 19.8164 21.5645L19.6523 21.6406C18.816 21.9999 17.6999 22 15.5996 22V21.25C16.732 21.25 17.5367 21.2497 18.166 21.1982C18.7866 21.1475 19.1711 21.0506 19.4756 20.8955C20.087 20.5839 20.5839 20.087 20.8955 19.4756C21.0506 19.1711 21.1475 18.7866 21.1982 18.166C21.2497 17.5367 21.25 16.732 21.25 15.5996Z"
          fill="url(#lockLight)"
        />
      </g>
      <defs>
        <linearGradient id="lockDark" x1="12" y1="0" x2="12" y2="13" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F88BA4" />
          <stop offset="1" stopColor="#E0517A" />
        </linearGradient>
        <linearGradient id="lockBlur" x1="12" y1="8" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(252, 227, 234, 0.75)" />
          <stop offset="1" stopColor="rgba(244, 108, 139, 0.35)" />
        </linearGradient>
        <linearGradient id="lockLight" x1="12" y1="8" x2="12" y2="16.108" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="1" stopColor="rgba(255, 255, 255, 1)" stopOpacity="0" />
        </linearGradient>
        <mask id="lockMask">
          <rect width="100%" height="100%" fill="#FFF" />
          <path
            d="M2 14.4V15.6C2 17.8402 2 18.9603 2.43597 19.816C2.81947 20.5686 3.43139 21.1805 4.18404 21.564C5.03969 22 6.15979 22 8.4 22H15.6C17.8402 22 18.9603 22 19.816 21.564C20.5686 21.1805 21.1805 20.5686 21.564 19.816C22 18.9603 22 17.8402 22 15.6V14.4C22 12.1598 22 11.0397 21.564 10.184C21.1805 9.43139 20.5686 8.81947 19.816 8.43597C18.9603 8 17.8402 8 15.6 8H8.4C6.15979 8 5.03969 8 4.18404 8.43597C3.43139 8.81947 2.81947 9.43139 2.43597 10.184C2 11.0397 2 12.1598 2 14.4Z"
            fill="#000"
          />
        </mask>
      </defs>
    </svg>
  );
}

function KeyIcon({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g fill="none">
        <path
          d="M23.0002 4.00002C23.0002 4.31476 22.852 4.61115 22.6002 4.8L20.9998 6.00033L18.1599 5.59448C17.8299 5.54732 17.547 5.83019 17.5942 6.16019L18 9.00016L11.7072 15.293C11.3167 15.6835 10.6837 15.6834 10.2931 15.293L8.20719 13.207C7.81668 12.8165 7.81668 12.1835 8.20719 11.793L18.7073 1.29289C18.8948 1.10536 19.1492 1 19.4144 1H22.0002C22.5524 1 23.0002 1.44772 23.0002 2V4.00002Z"
          fill="url(#keyDark)"
          mask="url(#keyMask)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 10C11.0899 10 14 12.9101 14 16.5C14 20.0899 11.0899 23 7.5 23C3.91015 23 1 20.0899 1 16.5C1 12.9101 3.91015 10 7.5 10Z"
          fill="url(#keyBlur)"
        />
        <path
          d="M7.5 10C11.0899 10 14 12.9101 14 16.5C14 20.0899 11.0899 23 7.5 23C3.91015 23 1 20.0899 1 16.5C1 12.9101 3.91015 10 7.5 10ZM7.5 10.75C4.32436 10.75 1.75 13.3244 1.75 16.5C1.75 19.6756 4.32436 22.25 7.5 22.25C10.6756 22.25 13.25 19.6756 13.25 16.5C13.25 13.3244 10.6756 10.75 7.5 10.75Z"
          fill="url(#keyLight)"
        />
      </g>
      <defs>
        <linearGradient id="keyDark" x1="15.457" y1="1" x2="15.457" y2="15.586" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F88BA4" />
          <stop offset="1" stopColor="#E0517A" />
        </linearGradient>
        <linearGradient id="keyBlur" x1="7.5" y1="10" x2="7.5" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(252, 227, 234, 0.75)" />
          <stop offset="1" stopColor="rgba(244, 108, 139, 0.35)" />
        </linearGradient>
        <linearGradient id="keyLight" x1="7.5" y1="10" x2="7.5" y2="17.528" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="1" stopColor="rgba(255, 255, 255, 1)" stopOpacity="0" />
        </linearGradient>
        <mask id="keyMask">
          <rect width="100%" height="100%" fill="#FFF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 10C11.0899 10 14 12.9101 14 16.5C14 20.0899 11.0899 23 7.5 23C3.91015 23 1 20.0899 1 16.5C1 12.9101 3.91015 10 7.5 10Z"
            fill="#000"
          />
        </mask>
      </defs>
    </svg>
  );
}

function Safety() {
  const items = [
    [<CheckIcon key="check" />, "Verified by selfie", "A quick live selfie + face match keeps profiles real — so you know who you're flying with."],
    [<LockIcon key="lock" />, "Private when you want", "Host invite-only trips for friends, or open them to the whole standby community."],
    [<KeyIcon key="key" />, "You're in control", "Choose who can join by age, gender, role and language — and approve every request."],
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
      <SiteFooter />
    </main>
  );
}
