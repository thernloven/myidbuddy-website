import ArticlePage from "../../../components/ArticlePage";

export const metadata = {
  title: "Staff travel platforms & tools explained (non-rev tech)",
  description:
    "A tour of the tools non-rev travelers use — from myIDTravel and ZED booking systems to load apps and employee fare sites — and where myIDBuddy fits in.",
  alternates: { canonical: "https://myidbuddy.com/knowledge/staff-travel-platforms" },
};

export default function Page() {
  return (
    <ArticlePage slug="staff-travel-platforms">
      <p>
        Flying non-rev means juggling a few different tools — one to book, one to check loads, somewhere to
        find travel partners. Here&apos;s how the staff-travel tech landscape breaks down, and how the pieces
        fit together.
      </p>

      <h2>1. Booking &amp; listing platforms</h2>
      <p>
        These are where you actually list for a flight and pay. The most common is{" "}
        <a href="/knowledge/what-is-myidtravel">myIDTravel</a>, used by many airlines for{" "}
        <a href="/knowledge/what-is-interline-travel">interline</a> (offline) travel on partner carriers.
        Your own airline also has an <strong>internal staff-travel portal</strong> for travel on its own
        flights. ZED bookings are typically handled through these same systems.
      </p>

      <h2>2. Load &amp; availability tools</h2>
      <p>
        Before you commit, you need to know your odds — the <a href="/knowledge/staff-travel-loads-explained">loads</a>.
        Some airlines show loads in their own portal; non-revs also use dedicated load-checking apps and
        community services to estimate how full a flight is and how many staff are already listed.
      </p>

      <h2>3. Employee fare &amp; travel-deal sites</h2>
      <p>
        Beyond flights, there are booking sites that offer airline employees discounted hotels, car rentals,
        cruises, and reduced-rate (&ldquo;interline&rdquo;) revenue tickets. These are handy for the
        ground side of a trip but don&apos;t help with the standby experience itself.
      </p>

      <h2>4. Community &amp; planning</h2>
      <p>
        Historically this has lived in Facebook groups, forums, and word of mouth: finding out who else is
        going somewhere, swapping load tips, and arranging to meet up. It&apos;s scattered, and you usually
        learn who was around <em>after</em> the trip.
      </p>

      <h2>Where myIDBuddy fits</h2>
      <p>
        <a href="/knowledge/what-is-myidbuddy">myIDBuddy</a> is the missing <strong>social and planning
        layer</strong>. It doesn&apos;t replace your booking platform — you&apos;ll still list and pay through
        your airline&apos;s tools or myIDTravel. Instead, myIDBuddy brings the people together:
      </p>
      <ul>
        <li>See who&apos;s flying where on a map, grouped by city and date;</li>
        <li>Join or host trips and chat with the group;</li>
        <li>View loads by cabin alongside who&apos;s already listed;</li>
        <li>Connect with verified travelers you&apos;ll actually want to fly with.</li>
      </ul>

      <p>
        Think of it as the layer that turns a solo standby gamble into a planned trip with company.{" "}
        <a href="/#waitlist">Join the waitlist</a>.
      </p>

      <p className="text-sm text-muted">
        Third-party platforms mentioned here are independent of and not affiliated with myIDBuddy.
      </p>
    </ArticlePage>
  );
}
