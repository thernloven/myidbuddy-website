import ArticlePage from "../../../components/ArticlePage";

export const metadata = {
  title: "What is standby travel? How airline standby works",
  description:
    "Standby travel means flying only if a seat is open after revenue passengers board. Learn how the standby list, priority, clearance, and gate process work.",
  alternates: { canonical: "https://myidbuddy.com/knowledge/what-is-standby-travel" },
};

export default function Page() {
  return (
    <ArticlePage slug="what-is-standby-travel">
      <p>
        <strong>Standby travel</strong> means you only fly if a seat is still available after all confirmed,
        revenue passengers have been accommodated. It&apos;s the core mechanic behind{" "}
        <a href="/knowledge/what-is-non-rev-travel">non-rev travel</a>: instead of a guaranteed seat, you
        join a standby list and hope the flight isn&apos;t full.
      </p>

      <h2>How the standby process works</h2>
      <ol>
        <li><strong>List for a flight.</strong> You add yourself to the standby list, usually in your airline&apos;s staff-travel system, before the flight.</li>
        <li><strong>Check the loads.</strong> Loads show how full the flight is likely to be, so you can judge your odds. See <a href="/knowledge/staff-travel-loads-explained">how to read loads</a>.</li>
        <li><strong>Wait for clearance.</strong> At the gate, once revenue passengers and no-shows are settled, the airline clears standby travelers in priority order until seats run out.</li>
        <li><strong>Get on — or roll over.</strong> If you clear, you get a seat (sometimes assigned only at the gate). If not, you move to the next flight.</li>
      </ol>

      <h2>Standby priority</h2>
      <p>
        When more standby travelers want seats than there are seats, the airline clears them in a set order.
        Priority can depend on employee vs. family/buddy status, seniority, fare type, and the time you
        listed. Knowing roughly where you sit in that order helps you predict your chances.
      </p>

      <h2>Reading your odds</h2>
      <p>
        The number that matters is the <strong>load</strong> — the gap between seats and expected passengers.
        A flight with many open seats and few non-revs listed is a comfortable bet; a near-full flight with a
        long standby list is risky. Always have a <strong>backup flight</strong> in mind.
      </p>

      <h2>Standby tips</h2>
      <ul>
        <li>Get to the airport early and confirm you&apos;re listed.</li>
        <li>Have backup flights and even backup routings ready.</li>
        <li>Travel light so you can move quickly between gates.</li>
        <li>Dress neatly — some airlines have a dress code for staff travelers.</li>
        <li>Be flexible with dates and times; mid-week and off-peak flights clear more easily.</li>
      </ul>
      <p>
        For the full list, read <a href="/knowledge/non-rev-travel-tips">10 tips for flying non-rev</a>.
      </p>

      <h2>Standby is better with a buddy</h2>
      <p>
        Half the stress of standby is the uncertainty and doing it alone. <a href="/knowledge/what-is-myidbuddy">myIDBuddy</a>{" "}
        lets you see who else is flying standby to your destination, compare loads, and team up.{" "}
        <a href="/#waitlist">Join the waitlist</a> to get started.
      </p>
    </ArticlePage>
  );
}
