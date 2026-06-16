import ArticlePage from "../../../components/ArticlePage";

export const metadata = {
  title: "What is myIDTravel? Staff travel booking platform explained",
  description:
    "myIDTravel is the platform many airlines use for staff travel — listing and paying for ID and ZED standby tickets on partner airlines. Here's how it works.",
  alternates: { canonical: "https://myidbuddy.com/knowledge/what-is-myidtravel" },
};

export default function Page() {
  return (
    <ArticlePage slug="what-is-myidtravel">
      <p>
        <strong>myIDTravel</strong> is one of the most widely used <strong>staff-travel booking
        platforms</strong> in the airline industry. It&apos;s the system many airlines give their employees to
        list for, price, and pay for <a href="/knowledge/what-is-interline-travel">interline</a> standby
        tickets on <em>partner</em> airlines. If you fly non-rev on another carrier, there&apos;s a good chance
        you&apos;ll book it through myIDTravel.
      </p>

      <h2>What you can do in myIDTravel</h2>
      <ul>
        <li>See which partner airlines your employer has agreements with;</li>
        <li>Search flights and view available <a href="/knowledge/what-is-id90">ID</a> / <a href="/knowledge/what-is-zed-travel">ZED</a> fare levels;</li>
        <li>List yourself (and eligible family/partners) for a standby flight;</li>
        <li>Pay the applicable fare, taxes, and fees;</li>
        <li>Manage and cancel your listings.</li>
      </ul>

      <h2>How it fits into a non-rev trip</h2>
      <p>
        myIDTravel handles the <strong>booking and listing</strong> side of interline travel. It is generally
        the place you go to actually get on the standby list and pay. What it doesn&apos;t do is tell you{" "}
        <em>who else</em> from the community is flying your route, or make it easy to plan the trip socially —
        that&apos;s a different need.
      </p>

      <h2>myIDTravel vs. your own airline&apos;s system</h2>
      <p>
        Travel on your <em>own</em> airline (&ldquo;online&rdquo; travel) is usually booked through your
        employer&apos;s internal staff-travel portal, not myIDTravel. myIDTravel comes in for{" "}
        <strong>offline / interline</strong> travel on partner carriers. The exact tools you use depend on
        your airline — some use myIDTravel for everything, others use it only for interline.
      </p>

      <h2>A note on loads</h2>
      <p>
        Booking platforms show fares and let you list, but reading the{" "}
        <a href="/knowledge/staff-travel-loads-explained">loads</a> well is what tells you whether you&apos;ll
        actually get on. Always check loads before and after you list.
      </p>

      <h2>Where myIDBuddy fits</h2>
      <p>
        myIDBuddy isn&apos;t a booking system — you&apos;ll still list and pay through your airline&apos;s tools
        or myIDTravel. myIDBuddy is the <strong>social and planning</strong> layer: see who else is flying
        where, compare loads, join trips, and connect with verified travelers, then go book the flight in your
        usual platform. <a href="/#waitlist">Join the waitlist</a>.
      </p>

      <p className="text-sm text-muted">
        myIDTravel is a third-party platform and is not affiliated with myIDBuddy.
      </p>
    </ArticlePage>
  );
}
