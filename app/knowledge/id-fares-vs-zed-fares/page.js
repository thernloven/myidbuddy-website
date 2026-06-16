import ArticlePage from "../../../components/ArticlePage";

export const metadata = {
  title: "ID fares vs. ZED fares: what's the difference?",
  description:
    "ID and ZED fares both describe reduced-rate interline standby travel for airline staff. Learn how they're priced, how they relate, and which one you'll use.",
  alternates: { canonical: "https://myidbuddy.com/knowledge/id-fares-vs-zed-fares" },
};

export default function Page() {
  return (
    <ArticlePage slug="id-fares-vs-zed-fares">
      <p>
        <strong>ID fares</strong> and <strong>ZED fares</strong> are the two terms you&apos;ll hear most when
        flying standby on a partner airline. They&apos;re closely related — both are reduced-rate{" "}
        <a href="/knowledge/what-is-interline-travel">interline</a> staff fares — but they&apos;re calculated
        differently.
      </p>

      <h2>The core difference: how the fare is set</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>ID fares</th>
            <th>ZED fares</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Stands for</strong></td>
            <td>Industry Discount</td>
            <td>Zonal Employee Discount</td>
          </tr>
          <tr>
            <td><strong>Priced by</strong></td>
            <td>% off a reference fare (ID90 ≈ 90% off)</td>
            <td>Fixed amount by distance zone</td>
          </tr>
          <tr>
            <td><strong>Levels</strong></td>
            <td>ID90 / ID75 / ID50 / ID00</td>
            <td>ZED Low / Medium / High</td>
          </tr>
          <tr>
            <td><strong>Both are</strong></td>
            <td colSpan={2}>Standby (space-available), interline, priority-ordered</td>
          </tr>
        </tbody>
      </table>

      <h2>Which one will you use?</h2>
      <p>
        It depends on the agreement between your airline and the carrier you want to fly. Many interline
        relationships are now built on the <a href="/knowledge/what-is-zed-travel">ZED</a> framework, so ZED
        fares are extremely common. Some routes and agreements still use{" "}
        <a href="/knowledge/what-is-id90">ID-style</a> percentage fares. When you list through a platform like{" "}
        <a href="/knowledge/what-is-myidtravel">myIDTravel</a>, it shows you the fare options available for
        that specific airline and route.
      </p>

      <h2>Picking a fare level</h2>
      <p>
        Within either system, a higher fare level usually means <strong>higher standby priority</strong>. On a
        busy flight, paying for ID75 (instead of ID90) or ZED High (instead of ZED Low) can be the difference
        between clearing and rolling to the next flight. On a wide-open flight, the cheapest level is usually
        fine. Always weigh the fare against the <a href="/knowledge/staff-travel-loads-explained">loads</a>.
      </p>

      <h2>The bottom line</h2>
      <p>
        Don&apos;t overthink the labels: ID and ZED are just two ways of pricing the same thing — cheap,
        space-available travel on another airline. What actually decides whether you get on is the load and
        your <a href="/knowledge/boarding-priority-explained">priority</a>.
      </p>

      <p>
        myIDBuddy brings the people and the loads together so you can plan smarter.{" "}
        <a href="/#waitlist">Join the waitlist</a>.
      </p>
    </ArticlePage>
  );
}
