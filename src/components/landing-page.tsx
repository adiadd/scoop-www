import Hero from "./hero";
import HowItWorks from "./how-it-works";
import JoinWaitlist from "./join-waitlist";
import SupportedLeagues from "./supported-leagues";
import WhoItsFor from "./who-is-it-for";

export default function LandingPage() {
  return (
    <main>
      <Hero />

      <HowItWorks />
      <WhoItsFor />

      <SupportedLeagues />

      <JoinWaitlist />
    </main>
  );
}
