import ArticlePage from "../../../components/ArticlePage";

export const metadata = {
  title: "What is myIDBuddy? The app for ID & standby travelers",
  description:
    "myIDBuddy is the social app for ID & standby travelers. See who's flying where on a map, join trips, check staff-travel loads, and connect with verified buddies.",
  alternates: { canonical: "https://myidbuddy.com/knowledge/what-is-myidbuddy" },
};

export default function Page() {
  return (
    <ArticlePage slug="what-is-myidbuddy">
      <p>
        <strong>myIDBuddy</strong> is a social travel app made for ID and standby travelers — airline
        employees, their travel partners, and family members who fly on staff-travel benefits. If you fly
        non-rev, you already know the lonely side of it: you land somewhere amazing with nobody to explore
        it with. myIDBuddy is built to fix exactly that.
      </p>

      <h2>The problem we&apos;re solving</h2>
      <p>
        Flying standby is unpredictable and often solo. There&apos;s no easy way to know which other
        non-revs are heading to the same city, when they&apos;re going, or how full the flights are. Plans
        live in scattered group chats and Facebook groups, and you usually find out who else was there
        after the trip is over.
      </p>

      <h2>What you can do in myIDBuddy</h2>
      <ul>
        <li>
          <strong>See who&apos;s flying where.</strong> A playful world map shows travelers grouped by
          city and date, so you can spot who&apos;s heading to your destination.
        </li>
        <li>
          <strong>Join or host trips.</strong> Create a trip for a city or multi-city route and set it
          open, request-to-join, or private. See exactly who&apos;s coming.
        </li>
        <li>
          <strong>Check staff-travel loads.</strong> Pull up flights for a trip with standby seats by
          cabin and how many non-revs are already listed. Learn more in{" "}
          <a href="/knowledge/staff-travel-loads-explained">how to read staff travel loads</a>.
        </li>
        <li>
          <strong>Connect with verified buddies.</strong> Selfie-verified profiles, travel role, interests,
          and a &ldquo;been to&rdquo; world map help you find people you&apos;ll actually want to travel
          with.
        </li>
        <li>
          <strong>Chat and plan.</strong> Group threads for each trip and 1:1 messages to sort meetup
          points and swap load tips.
        </li>
      </ul>

      <h2>Who it&apos;s for</h2>
      <p>
        myIDBuddy is for anyone who travels on airline benefits — whether you&apos;re a pilot, cabin crew,
        ground staff, an eligible travel partner, or a family member. New to the lingo? Start with{" "}
        <a href="/knowledge/what-is-non-rev-travel">what is non-rev travel?</a> and{" "}
        <a href="/knowledge/what-is-standby-travel">what is standby travel?</a>
      </p>

      <h2>Is it free?</h2>
      <p>
        myIDBuddy is launching soon and you can{" "}
        <a href="/#waitlist">join the waitlist</a> today to be first on the map. For common questions about
        privacy, verification, and eligibility, see our <a href="/faq">FAQ</a>.
      </p>
    </ArticlePage>
  );
}
