import WaitlistButton from "../ui/waitlist-button";

export default function Hero() {
  return (
    <section className="space-y-6 py-20">
      <h1 className="font-mono text-4xl font-bold sm:text-6xl">
        10-second sports updates for busy fans
      </h1>
      <p className="max-w-2xl text-lg text-neutral-400">
        ai-powered summaries of what matters in sports, personalized to your
        interests. no fluff, just the highlights.
      </p>
      <WaitlistButton />
    </section>
  );
}
