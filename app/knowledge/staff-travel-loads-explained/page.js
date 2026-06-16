import ArticlePage from "../../../components/ArticlePage";

export const metadata = {
  title: "How to read staff travel loads (non-rev loads explained)",
  description:
    "Staff travel loads tell you how many seats are likely open for standby. Learn how to read loads by cabin, what the standby list count means, and how to judge your chances.",
  alternates: { canonical: "https://myidbuddy.com/knowledge/staff-travel-loads-explained" },
};

export default function Page() {
  return (
    <ArticlePage slug="staff-travel-loads-explained">
      <p>
        <strong>Loads</strong> are the single most important number for any standby traveler. A load tells you
        how full a flight is expected to be — and therefore how likely you are to get a seat. Learning to read
        them turns standby from a gamble into an educated bet.
      </p>

      <h2>What a load actually means</h2>
      <p>
        A flight has a fixed number of seats. The load estimates how many of those seats will be taken by
        confirmed, revenue passengers. The difference — seats minus expected passengers — is roughly how many
        spots are left for <a href="/knowledge/what-is-standby-travel">standby</a> travelers. Many systems
        show this as the number of <strong>open seats</strong> per cabin.
      </p>

      <h2>Reading loads by cabin</h2>
      <p>
        Loads are shown per cabin — Economy, Premium, Business, First — because they fill independently. A
        flight can be full in Economy but wide open in Business. In myIDBuddy you&apos;ll see loads broken out
        by cabin so you can target the cabin most likely to clear.
      </p>
      <ul>
        <li><strong>Economy · 14</strong> — about 14 open seats in Economy. Comfortable.</li>
        <li><strong>Business · 4</strong> — a few open seats up front. Possible if priority is on your side.</li>
        <li><strong>0 open</strong> — the flight is full in that cabin. Risky to rely on.</li>
      </ul>

      <h2>Don&apos;t forget the standby list</h2>
      <p>
        Open seats only tell half the story. You also need to know how many other non-revs are{" "}
        <strong>already listed</strong> for the same flight. Fourteen open seats with two travelers listed is a
        near-certainty; fourteen open seats with twenty listed could leave you behind. Always compare{" "}
        <strong>open seats vs. people listed</strong>, and remember clearance follows{" "}
        <a href="/knowledge/what-is-non-rev-travel">priority order</a>, not first-come-first-served.
      </p>

      <h2>Color-coded at a glance</h2>
      <p>
        myIDBuddy color-codes each flight so you can scan quickly:
      </p>
      <ul>
        <li><strong>Open</strong> — plenty of seats relative to those listed. Good odds.</li>
        <li><strong>Tight</strong> — it&apos;ll come down to priority and no-shows. Have a backup.</li>
        <li><strong>Full</strong> — don&apos;t count on it; look at other flights.</li>
      </ul>

      <h2>Loads change — keep checking</h2>
      <p>
        Loads are a forecast, not a guarantee. Bookings, cancellations, no-shows, and aircraft swaps all move
        the number right up to departure. Check loads when you plan, the night before, and again at the
        airport. Pair tight loads with a solid backup flight.
      </p>

      <p>
        myIDBuddy puts loads, the standby count, and who else is going into one view per trip — so you can
        decide with confidence. <a href="/#waitlist">Join the waitlist</a> or read{" "}
        <a href="/knowledge/non-rev-travel-tips">10 tips for flying non-rev</a>.
      </p>
    </ArticlePage>
  );
}
