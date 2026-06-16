import ArticlePage from "../../../components/ArticlePage";

export const metadata = {
  title: "What is NRSA? Non-revenue space available explained",
  description:
    "NRSA stands for Non-Revenue Space Available — the US airline term for standby staff travel. Learn what NRSA means and how it differs from NRPS / positive space.",
  alternates: { canonical: "https://myidbuddy.com/knowledge/what-is-nrsa" },
};

export default function Page() {
  return (
    <ArticlePage slug="what-is-nrsa">
      <p>
        <strong>NRSA</strong> stands for <strong>Non-Revenue Space Available</strong>. It&apos;s the term US
        airlines commonly use for <a href="/knowledge/what-is-standby-travel">standby</a> staff travel — flying
        on a free or reduced ticket only if a seat is open after paying passengers are accommodated. If
        you&apos;ve heard a colleague say they&apos;re &ldquo;flying NRSA,&rdquo; it simply means they&apos;re
        on standby.
      </p>

      <h2>Breaking down the acronym</h2>
      <ul>
        <li><strong>Non-Revenue</strong> — the airline isn&apos;t earning a normal fare for the seat.</li>
        <li><strong>Space Available</strong> — you only travel if there&apos;s room left over.</li>
      </ul>
      <p>
        It&apos;s essentially the American label for what the rest of the industry calls{" "}
        <a href="/knowledge/what-is-non-rev-travel">non-rev</a> or space-available travel.
      </p>

      <h2>NRSA vs. positive space (NRPS)</h2>
      <p>
        The opposite of NRSA is <strong>positive space</strong>, sometimes written <strong>NRPS</strong>{" "}
        (Non-Revenue Positive Space). With positive space, the traveler has a <em>confirmed</em> seat — they
        don&apos;t have to wait for clearance. Positive-space travel is usually reserved for must-ride
        situations like crew repositioning or relocation, while everyday leisure staff travel is NRSA.
      </p>

      <h2>How NRSA clearance works</h2>
      <p>
        Because NRSA is space-available, you join the standby list and clear in{" "}
        <a href="/knowledge/boarding-priority-explained">priority order</a> once revenue passengers and
        no-shows are settled. Priority can depend on employee vs. guest status, seniority, and listing time.
        Always check the <a href="/knowledge/staff-travel-loads-explained">loads</a> and keep a backup flight.
      </p>

      <h2>Related US non-rev terms</h2>
      <ul>
        <li><strong>SA</strong> — Space Available (same idea, shorter).</li>
        <li><strong>Buddy pass</strong> — a standby pass for a friend; see <a href="/knowledge/buddy-passes-explained">buddy passes explained</a>.</li>
        <li><strong>Jumpseat</strong> — an extra crew seat, typically for qualifying crew members.</li>
      </ul>
      <p>
        For the full list, see our <a href="/knowledge/staff-travel-glossary">staff travel glossary</a>.
      </p>

      <p>
        Flying NRSA somewhere new? <a href="/knowledge/what-is-myidbuddy">myIDBuddy</a> helps you find other
        non-revs headed the same way. <a href="/#waitlist">Join the waitlist</a>.
      </p>
    </ArticlePage>
  );
}
