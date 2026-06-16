import ArticlePage from "../../../components/ArticlePage";

export const metadata = {
  title: "What is ID90? ID90, ID75, ID50 & ID fares explained",
  description:
    "ID90, ID75, ID50 and ID00 are interline standby discount levels for airline staff. Learn what the numbers mean, how ID tickets work, and how they differ from ZED fares.",
  alternates: { canonical: "https://myidbuddy.com/knowledge/what-is-id90" },
};

export default function Page() {
  return (
    <ArticlePage slug="what-is-id90">
      <p>
        <strong>ID90</strong> is an <strong>interline staff-travel fare</strong> that gives airline
        employees roughly a <strong>90% discount</strong> off a reference fare to travel standby on{" "}
        <em>another</em> airline. The &ldquo;ID&rdquo; stands for <strong>Industry Discount</strong>, and the
        number is the discount percentage. So ID90 ≈ 90% off, ID75 ≈ 75% off, and so on.
      </p>

      <h2>The ID fare levels</h2>
      <table>
        <thead>
          <tr>
            <th>Fare</th>
            <th>Approx. discount</th>
            <th>Typical use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ID90</strong></td>
            <td>~90% off</td>
            <td>Cheapest; lowest standby priority</td>
          </tr>
          <tr>
            <td><strong>ID75</strong></td>
            <td>~75% off</td>
            <td>Costs more, often higher priority than ID90</td>
          </tr>
          <tr>
            <td><strong>ID50</strong></td>
            <td>~50% off</td>
            <td>Higher fare, better clearance priority</td>
          </tr>
          <tr>
            <td><strong>ID00 / IDR1</strong></td>
            <td>Free or near-free</td>
            <td>Specific agreements; varies by airline</td>
          </tr>
        </tbody>
      </table>
      <p>
        A trailing letter often indicates conditions — for example <strong>ID90R</strong> for a
        rebate/refundable basis or letters denoting space-available vs. confirmed. The exact rules are set by
        the agreement between the two airlines.
      </p>

      <h2>How ID tickets work</h2>
      <p>
        ID fares are <a href="/knowledge/what-is-standby-travel">standby</a> tickets: the discount gets you a
        cheap ticket, but you still only fly space-available. A higher discount (like ID90) is the cheapest
        but usually clears <em>after</em> travelers on more expensive ID fares, because priority often tracks
        how much was paid. Choosing ID75 over ID90 can be worth it on a busy flight.
      </p>

      <h2>ID fares vs. ZED fares</h2>
      <p>
        You&apos;ll often see <strong>ZED</strong> (Zonal Employee Discount) mentioned alongside ID fares. ZED
        is a widely used framework for setting interline staff fares by distance zone. In practice, ID-style
        discounts and ZED fares both describe reduced-rate standby travel on partner airlines; the
        terminology and exact pricing depend on the agreements your airline holds.
      </p>

      <h2>ID travel vs. your own airline</h2>
      <p>
        ID/ZED fares apply when flying on <em>other</em> airlines via interline agreements. Travel on your{" "}
        <em>own</em> airline is usually governed by your internal staff-travel benefit, which may be free or a
        small charge. Both are forms of <a href="/knowledge/what-is-non-rev-travel">non-rev travel</a>.
      </p>

      <p>
        Planning an ID trip? <a href="/knowledge/what-is-myidbuddy">myIDBuddy</a> helps you see who else is
        flying your route and how the loads look before you commit. <a href="/#waitlist">Join the waitlist</a>.
      </p>
    </ArticlePage>
  );
}
