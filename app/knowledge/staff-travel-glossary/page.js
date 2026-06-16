import ArticlePage from "../../../components/ArticlePage";

export const metadata = {
  title: "Staff travel glossary: non-rev terms & acronyms",
  description:
    "A plain-English glossary of staff-travel and non-rev terms — ID90, ZED, NRSA, SA, loads, listing, jumpseat, positive space and more, every standby traveler should know.",
  alternates: { canonical: "https://myidbuddy.com/knowledge/staff-travel-glossary" },
};

export default function Page() {
  return (
    <ArticlePage slug="staff-travel-glossary">
      <p>
        New to flying standby? The world of staff travel is full of acronyms. Here&apos;s a plain-English
        glossary of the terms you&apos;ll hear most often as a non-rev traveler.
      </p>

      <h2>Core concepts</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Non-rev</strong></td>
            <td>Non-revenue travel — flying on a free or reduced staff ticket, space-available. <a href="/knowledge/what-is-non-rev-travel">More →</a></td>
          </tr>
          <tr>
            <td><strong>Standby</strong></td>
            <td>Flying only if a seat is open after revenue passengers. <a href="/knowledge/what-is-standby-travel">More →</a></td>
          </tr>
          <tr>
            <td><strong>SA</strong></td>
            <td>Space Available — same idea as standby/non-rev.</td>
          </tr>
          <tr>
            <td><strong>NRSA</strong></td>
            <td>Non-Revenue Space Available — the US term for standby staff travel. <a href="/knowledge/what-is-nrsa">More →</a></td>
          </tr>
          <tr>
            <td><strong>Positive space (NRPS)</strong></td>
            <td>A confirmed staff seat that doesn&apos;t depend on clearance — e.g. for relocation or must-ride.</td>
          </tr>
          <tr>
            <td><strong>Online / Offline</strong></td>
            <td>Online = travel on your own airline; offline = interline travel on a partner airline.</td>
          </tr>
        </tbody>
      </table>

      <h2>Fares &amp; agreements</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>ID fare</strong></td>
            <td>Industry Discount fare — a % off a reference fare (ID90, ID75, ID50, ID00). <a href="/knowledge/what-is-id90">More →</a></td>
          </tr>
          <tr>
            <td><strong>ID90 / ID75 / ID50</strong></td>
            <td>Discount levels — roughly 90%, 75%, 50% off. Higher fare often = higher priority.</td>
          </tr>
          <tr>
            <td><strong>ZED</strong></td>
            <td>Zonal Employee Discount — interline fares priced by distance zone (ZED Low/Medium/High). <a href="/knowledge/what-is-zed-travel">More →</a></td>
          </tr>
          <tr>
            <td><strong>Interline</strong></td>
            <td>Staff travel on another airline via a bilateral agreement. <a href="/knowledge/what-is-interline-travel">More →</a></td>
          </tr>
          <tr>
            <td><strong>Buddy pass</strong></td>
            <td>A standby pass an employee gives a friend, usually at lower priority. <a href="/knowledge/buddy-passes-explained">More →</a></td>
          </tr>
          <tr>
            <td><strong>Travel partner</strong></td>
            <td>A nominated companion who receives ongoing staff-travel benefits.</td>
          </tr>
        </tbody>
      </table>

      <h2>At the airport</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Listing</strong></td>
            <td>Adding yourself to the standby list for a specific flight.</td>
          </tr>
          <tr>
            <td><strong>Loads</strong></td>
            <td>How full a flight is expected to be — used to judge your odds. <a href="/knowledge/staff-travel-loads-explained">More →</a></td>
          </tr>
          <tr>
            <td><strong>Clearance</strong></td>
            <td>The gate process of assigning open seats to standby travelers in priority order. <a href="/knowledge/boarding-priority-explained">More →</a></td>
          </tr>
          <tr>
            <td><strong>Priority</strong></td>
            <td>The order non-revs clear, based on status, seniority, fare and listing time.</td>
          </tr>
          <tr>
            <td><strong>No-show</strong></td>
            <td>A booked passenger who doesn&apos;t turn up — frees a seat for standby.</td>
          </tr>
          <tr>
            <td><strong>Rolling over</strong></td>
            <td>Not clearing a flight and moving to the next departure.</td>
          </tr>
          <tr>
            <td><strong>Jumpseat</strong></td>
            <td>An extra flight-deck or cabin seat, typically for qualifying crew.</td>
          </tr>
          <tr>
            <td><strong>Revenue passenger</strong></td>
            <td>Someone traveling on a normal paid ticket — boarded before non-revs.</td>
          </tr>
        </tbody>
      </table>

      <h2>Tools</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>myIDTravel</strong></td>
            <td>A widely used platform for booking and listing interline staff travel. <a href="/knowledge/what-is-myidtravel">More →</a></td>
          </tr>
          <tr>
            <td><strong>myIDBuddy</strong></td>
            <td>The social layer — see who&apos;s flying where, join trips, and connect with verified travelers. <a href="/knowledge/what-is-myidbuddy">More →</a></td>
          </tr>
        </tbody>
      </table>

      <p>
        Ready to put it into practice? <a href="/#waitlist">Join the myIDBuddy waitlist</a> and never fly
        standby alone again.
      </p>
    </ArticlePage>
  );
}
