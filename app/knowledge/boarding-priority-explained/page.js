import ArticlePage from "../../../components/ArticlePage";

export const metadata = {
  title: "Non-rev boarding priority & clearance explained",
  description:
    "Why do some standby travelers clear before others? Learn how non-rev boarding priority and gate clearance work — seniority, status, fare level, and listing time.",
  alternates: { canonical: "https://myidbuddy.com/knowledge/boarding-priority-explained" },
};

export default function Page() {
  return (
    <ArticlePage slug="boarding-priority-explained">
      <p>
        On a tight flight, two non-revs with the same destination can have very different outcomes: one clears,
        one gets left behind. The reason is <strong>boarding priority</strong> — the order in which the airline
        clears standby travelers once seats are confirmed.
      </p>

      <h2>How clearance works at the gate</h2>
      <ol>
        <li>Revenue passengers are boarded and no-shows are released;</li>
        <li>The airline counts the seats actually left open;</li>
        <li>Standby travelers are cleared <strong>in priority order</strong> until seats run out;</li>
        <li>Anyone not cleared rolls to the next flight.</li>
      </ol>
      <p>
        This is why open seats alone don&apos;t guarantee you a spot — see{" "}
        <a href="/knowledge/staff-travel-loads-explained">how to read loads</a> for the full picture.
      </p>

      <h2>What determines your priority</h2>
      <p>
        Each airline sets its own rules, but priority commonly depends on a mix of:
      </p>
      <ul>
        <li><strong>Traveler type</strong> — employees usually clear before family, and family before <a href="/knowledge/buddy-passes-explained">buddy-pass guests</a>;</li>
        <li><strong>Seniority</strong> — years of service can move you up the list;</li>
        <li><strong>Online vs. interline</strong> — your own airline&apos;s staff often clear ahead of visiting non-revs from other carriers;</li>
        <li><strong>Fare level</strong> — a higher <a href="/knowledge/what-is-id90">ID</a> or <a href="/knowledge/what-is-zed-travel">ZED</a> level can mean higher priority;</li>
        <li><strong>Listing time</strong> — listing earlier can be a tie-breaker.</li>
      </ul>

      <h2>How to improve your odds</h2>
      <ul>
        <li><strong>Choose low-load flights.</strong> The best way to beat priority is to avoid competing for seats — see <a href="/knowledge/best-time-to-fly-standby">the best times to fly</a>.</li>
        <li><strong>List early</strong> where listing time affects order.</li>
        <li><strong>Consider a higher fare level</strong> on busy days.</li>
        <li><strong>Have backups</strong> — alternate flights and routings through different hubs.</li>
        <li><strong>Be at the gate</strong> and make sure your name is in the system correctly.</li>
      </ul>

      <h2>Know roughly where you stand</h2>
      <p>
        You can&apos;t change the rules, but understanding them helps you predict outcomes. If you&apos;re a
        visiting interline traveler on the cheapest fare, treat tight flights with caution; if you&apos;re a
        senior employee on your own airline, your odds are better. Either way, the{" "}
        <a href="/knowledge/staff-travel-loads-explained">load</a> is still king.
      </p>

      <p>
        myIDBuddy shows loads and who&apos;s already listed so you can judge a flight at a glance.{" "}
        <a href="/#waitlist">Join the waitlist</a>.
      </p>
    </ArticlePage>
  );
}
