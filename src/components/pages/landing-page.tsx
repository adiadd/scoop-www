import Hero from "../home/hero";
import HowItWorks from "../home/how-it-works";
import JoinWaitlist from "../home/join-waitlist";
import SupportedLeagues from "../home/supported-leagues";
import VideoPlayer from "../home/video-player";
import WhoItsFor from "../home/who-is-it-for";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <VideoPlayer />

      <HowItWorks />
      <WhoItsFor />

      <SupportedLeagues />

      <JoinWaitlist />
    </main>
  );
}
