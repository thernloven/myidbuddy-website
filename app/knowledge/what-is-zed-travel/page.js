import ArticlePage from "../../../components/ArticlePage";

export const metadata = {
  title: "What is ZED travel? ZED fares & agreements explained",
  description:
    "ZED (Zonal Employee Discount) is the most common framework for interline staff fares. Learn how ZED zones, fare levels, and bilateral agreements work for non-rev travel.",
  alternates: { canonical: "https://myidbuddy.com/knowledge/what-is-zed-travel" },
};

export default function Page() {
  return (
    <ArticlePage slug="what-is-zed-travel">
      <p>
        <strong>ZED</strong> stands for <strong>Zonal Employee Discount</strong>. It&apos;s the most widely
        used framework airlines use to price reduced-rate, standby staff travel on <em>each other&apos;s</em>{" "}
        flights. If you work for one airline and want to fly standby on another, there&apos;s a good chance
        you&apos;ll be traveling on a ZED fare.
      </p>

      <h2>How ZED fares are priced</h2>
      <p>
        Instead of a percentage discount, ZED fares are set by <strong>distance zones</strong>. The flight
        distance falls into a band (for example, short, medium, or long haul), and each band has a fixed fare
        amount. Most agreements also offer different <strong>fare levels</strong>:
      </p>
      <ul>
        <li><strong>ZED Low</strong> — cheapest, lowest standby priority.</li>
        <li><strong>ZED Medium</strong> — a middle option.</li>
        <li><strong>ZED High</strong> — costs more, often higher clearance priority.</li>
      </ul>
      <p>
        Because the fare is based on distance rather than the commercial ticket price, ZED can be remarkably
        cheap on routes that would otherwise be expensive.
      </p>

      <h2>ZED agreements</h2>
      <p>
        ZED only works between airlines that have signed a bilateral <strong>ZED agreement</strong>. Hundreds
        of carriers participate, but your access depends on the specific agreements your airline holds — so
        two colleagues at different airlines can have very different ZED networks. Bookings are usually made
        through a staff-travel platform such as <a href="/knowledge/what-is-myidtravel">myIDTravel</a>.
      </p>

      <h2>ZED vs. ID fares</h2>
      <p>
        You&apos;ll often hear ZED and <a href="/knowledge/what-is-id90">ID fares</a> (ID90, ID75…) used in the
        same breath. Both describe reduced-rate interline standby travel; the main difference is how the fare
        is calculated — ZED uses distance zones, while ID fares are a percentage off a reference fare. We break
        the comparison down in <a href="/knowledge/id-fares-vs-zed-fares">ID fares vs. ZED fares</a>.
      </p>

      <h2>Still standby</h2>
      <p>
        However the fare is priced, ZED travel is still <a href="/knowledge/what-is-standby-travel">standby</a>:
        you only fly if a seat is available, and you clear in priority order. Always check the{" "}
        <a href="/knowledge/staff-travel-loads-explained">loads</a> first.
      </p>

      <p>
        Planning a ZED trip? <a href="/knowledge/what-is-myidbuddy">myIDBuddy</a> shows you who else is flying
        your route and how the loads look. <a href="/#waitlist">Join the waitlist</a>.
      </p>
    </ArticlePage>
  );
}
