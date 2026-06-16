import ArticlePage from "../../../components/ArticlePage";

export const metadata = {
  title: "What is interline staff travel? Interline benefits explained",
  description:
    "Interline staff travel lets airline employees fly standby on other airlines through bilateral agreements like ZED and ID. Learn how interline benefits work.",
  alternates: { canonical: "https://myidbuddy.com/knowledge/what-is-interline-travel" },
};

export default function Page() {
  return (
    <ArticlePage slug="what-is-interline-travel">
      <p>
        <strong>Interline staff travel</strong> is the ability to fly standby on airlines{" "}
        <em>other than your own employer</em>, using reduced-rate staff fares. It dramatically expands where
        you can go on benefits — instead of only your airline&apos;s network, you can reach destinations served
        by dozens of partner carriers.
      </p>

      <h2>How interline travel works</h2>
      <p>
        Airlines sign <strong>bilateral agreements</strong> with each other to offer staff travel on each
        other&apos;s flights. When two airlines have an agreement, employees of one can list for standby on the
        other at a reduced fare. The two most common fare frameworks are:
      </p>
      <ul>
        <li>
          <strong><a href="/knowledge/what-is-zed-travel">ZED fares</a></strong> — priced by distance zone;
          the most widespread interline framework.
        </li>
        <li>
          <strong><a href="/knowledge/what-is-id90">ID fares</a></strong> (ID90, ID75…) — a percentage discount
          off a reference fare.
        </li>
      </ul>

      <h2>Your network depends on your airline</h2>
      <p>
        There&apos;s no universal interline benefit. The list of airlines you can fly, and the fare levels
        available, depend entirely on the agreements <em>your</em> airline has signed. That&apos;s why two
        non-revs at different airlines can have completely different options on the same route.
      </p>

      <h2>Interline vs. your own airline (online) travel</h2>
      <p>
        Travel on your own employer&apos;s flights is usually called <strong>&ldquo;online&rdquo;</strong> staff
        travel and is governed by your internal benefit (often free or a small charge). Interline (sometimes
        called <strong>&ldquo;offline&rdquo;</strong>) travel is on partner airlines via ZED/ID fares. Both are
        forms of <a href="/knowledge/what-is-non-rev-travel">non-rev travel</a> and both are standby.
      </p>

      <h2>How to book interline standby</h2>
      <p>
        Most interline listings and payments go through a shared platform such as{" "}
        <a href="/knowledge/what-is-myidtravel">myIDTravel</a>, where you select the partner airline, choose a
        fare level, and list for the flight. Then it&apos;s standard <a href="/knowledge/what-is-standby-travel">standby</a>:
        check loads, list, and clear in priority order.
      </p>

      <p>
        myIDBuddy helps you find other non-revs flying the same interline routes so you&apos;re not exploring a
        new city alone. <a href="/#waitlist">Join the waitlist</a>.
      </p>
    </ArticlePage>
  );
}
