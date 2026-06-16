// Central index of knowledge-base articles.
// Used by the hub (/knowledge), article pages, "related articles", and the sitemap.
// Add a new article here + create app/knowledge/<slug>/page.js — it auto-appears
// in the hub, related links, and sitemap.

export const CATEGORIES = [
  "Start here",
  "Staff travel explained",
  "Tools & programs",
  "Tips & tricks",
  "Reference",
];

export const ARTICLES = [
  {
    slug: "what-is-myidbuddy",
    title: "What is myIDBuddy?",
    description:
      "myIDBuddy is the social app for ID & standby travelers — see who's flying where, join trips, check loads, and connect with verified buddies.",
    category: "Start here",
    readTime: "3 min read",
  },

  // ── Staff travel explained ──────────────────────────────
  {
    slug: "what-is-non-rev-travel",
    title: "What is non-rev travel?",
    description:
      "Non-rev (non-revenue) travel lets airline employees and their families fly on a space-available, standby basis. Here's how it works.",
    category: "Staff travel explained",
    readTime: "4 min read",
  },
  {
    slug: "what-is-standby-travel",
    title: "What is standby travel?",
    description:
      "Standby means flying only if a seat is open after revenue passengers board. Learn how the standby list, priority, and clearance work.",
    category: "Staff travel explained",
    readTime: "4 min read",
  },
  {
    slug: "what-is-id90",
    title: "What is ID90? ID fares explained",
    description:
      "ID90, ID75, ID50 and ID00 are interline standby discount levels. Understand what the numbers mean and how ID tickets work.",
    category: "Staff travel explained",
    readTime: "4 min read",
  },
  {
    slug: "what-is-zed-travel",
    title: "What is ZED travel? ZED fares explained",
    description:
      "ZED (Zonal Employee Discount) is the most common framework for interline staff fares. Learn how ZED zones, levels, and agreements work.",
    category: "Staff travel explained",
    readTime: "4 min read",
  },
  {
    slug: "what-is-interline-travel",
    title: "What is interline staff travel?",
    description:
      "Interline staff travel lets airline employees fly standby on other airlines through bilateral agreements. Here's how interline benefits work.",
    category: "Staff travel explained",
    readTime: "4 min read",
  },
  {
    slug: "id-fares-vs-zed-fares",
    title: "ID fares vs. ZED fares: the difference",
    description:
      "ID and ZED fares both describe reduced-rate interline standby travel. Learn how they relate, how they're priced, and which you'll use.",
    category: "Staff travel explained",
    readTime: "4 min read",
  },
  {
    slug: "what-is-nrsa",
    title: "What is NRSA? Non-revenue space available",
    description:
      "NRSA stands for Non-Revenue Space Available — the US term for standby staff travel. Learn what NRSA means and how it differs from NRPS.",
    category: "Staff travel explained",
    readTime: "3 min read",
  },
  {
    slug: "buddy-passes-explained",
    title: "What are buddy passes & travel partners?",
    description:
      "Buddy passes and nominated travel partners let airline staff share standby benefits with friends. Learn how they work, priority, and taxes.",
    category: "Staff travel explained",
    readTime: "4 min read",
  },

  // ── Tools & programs ────────────────────────────────────
  {
    slug: "what-is-myidtravel",
    title: "What is myIDTravel?",
    description:
      "myIDTravel is the booking platform many airlines use for staff travel — listing and paying for ID and ZED tickets on partner airlines.",
    category: "Tools & programs",
    readTime: "4 min read",
  },
  {
    slug: "staff-travel-platforms",
    title: "Staff travel platforms & tools explained",
    description:
      "From myIDTravel and ZED booking systems to load apps and employee fare sites — a tour of the tools non-rev travelers use, and where myIDBuddy fits.",
    category: "Tools & programs",
    readTime: "5 min read",
  },

  // ── Tips & tricks ───────────────────────────────────────
  {
    slug: "staff-travel-loads-explained",
    title: "How to read staff travel loads",
    description:
      "Loads tell you how many seats are likely open for standby. Learn to read them by cabin and judge your chances of getting on.",
    category: "Tips & tricks",
    readTime: "5 min read",
  },
  {
    slug: "non-rev-travel-tips",
    title: "10 tips for flying non-rev",
    description:
      "Practical standby tips: check loads early, have backup flights, dress the part, stay flexible, and travel light. Fly smarter as a non-rev.",
    category: "Tips & tricks",
    readTime: "6 min read",
  },
  {
    slug: "non-rev-dress-code",
    title: "Non-rev dress code: what to wear flying standby",
    description:
      "Many airlines have a staff-travel dress code. Learn what to wear (and avoid) when flying standby, and how dressing well can help upgrades.",
    category: "Tips & tricks",
    readTime: "4 min read",
  },
  {
    slug: "boarding-priority-explained",
    title: "Non-rev boarding priority & clearance",
    description:
      "Why do some standby travelers clear before others? Learn how non-rev boarding priority and gate clearance work, and how to improve your odds.",
    category: "Tips & tricks",
    readTime: "4 min read",
  },
  {
    slug: "best-time-to-fly-standby",
    title: "The best days & times to fly standby",
    description:
      "When you fly matters as much as where. Learn the best days, times, and seasons to fly standby — and the peak periods to avoid.",
    category: "Tips & tricks",
    readTime: "4 min read",
  },

  // ── Reference ───────────────────────────────────────────
  {
    slug: "staff-travel-glossary",
    title: "Staff travel glossary: non-rev terms & acronyms",
    description:
      "ID90, ZED, NRSA, SA, jumpseat, loads, listing — a plain-English glossary of the staff-travel and non-rev terms every standby traveler should know.",
    category: "Reference",
    readTime: "6 min read",
  },
];

export function getArticle(slug) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function relatedArticles(slug, limit = 3) {
  const current = getArticle(slug);
  if (!current) return ARTICLES.slice(0, limit);
  const sameCategory = ARTICLES.filter(
    (a) => a.slug !== slug && a.category === current.category
  );
  const others = ARTICLES.filter(
    (a) => a.slug !== slug && a.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}
