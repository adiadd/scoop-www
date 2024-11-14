import Hero from "./hero";
import HowItWorks from "./how-it-works";
import JoinWaitlist from "./join-waitlist";
import SupportedLeagues from "./supported-leagues";
import WhoItsFor from "./who-is-it-for";

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", maxWidth: "300px" }}
        >
          <source
            src="https://utfs.io/f/70ihSaB10mQqmcGew0U8pTF3YZA9qLv1VEfknlRDgzosWB8H"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <HowItWorks />
      <WhoItsFor />

      <SupportedLeagues />

      <JoinWaitlist />
    </main>
  );
}
