import JoinWaitlist from "~/components/home/join-waitlist";

export const metadata = {
  title: "about",
  description: "about scoop",
};

export default function AboutPage() {
  return (
    <div>
      <section className="space-y-6 py-20">
        <h1 className="font-mono text-4xl font-bold sm:text-6xl">
          making sports accessible for everyone
        </h1>
        <p className="max-w-2xl text-lg text-neutral-400">
          we believe staying connected to sports shouldn&apos;t require hours of
          your day. our mission is to democratize sports information through
          innovation.
        </p>
      </section>

      <section className="space-y-20 py-20">
        <div className="space-y-8">
          <h2 className="font-mono text-xl">our mission</h2>
          <ul className="space-y-4 font-mono text-neutral-400">
            <li>* democratize access to sports information</li>
            <li>* save fans valuable time while keeping them informed</li>
            <li>* create a more efficient way to follow sports</li>
          </ul>
        </div>

        <div className="space-y-8">
          <h2 className="font-mono text-xl">our approach</h2>
          <ul className="space-y-4 font-mono text-neutral-400">
            <li>* ai-powered analysis of game highlights</li>
            <li>* personalized content delivery</li>
            <li>* focus on what matters most to each fan</li>
          </ul>
        </div>

        <div className="space-y-8">
          <h2 className="font-mono text-xl">our technology</h2>
          <ul className="space-y-4 font-mono text-neutral-400">
            <li>* advanced natural language processing</li>
            <li>* real-time sports data integration</li>
            <li>* machine learning personalization</li>
          </ul>
        </div>
      </section>

      <section className="space-y-8 py-20">
        <div className="space-y-8">
          <h2 className="font-mono text-xl">our commitment</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="rounded-lg border border-neutral-800 p-6">
              <h3 className="mb-4 font-mono text-lg">user privacy</h3>
              <p className="text-neutral-400">
                your data is yours. we maintain strict privacy standards and
                never share personal information.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-800 p-6">
              <h3 className="mb-4 font-mono text-lg">quality content</h3>
              <p className="text-neutral-400">
                every update is verified for accuracy and relevance before
                reaching your feed.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-800 p-6">
              <h3 className="mb-4 font-mono text-lg">continuous improvement</h3>
              <p className="text-neutral-400">
                we constantly refine our ai models based on user feedback and
                changing needs.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-800 p-6">
              <h3 className="mb-4 font-mono text-lg">community focus</h3>
              <p className="text-neutral-400">
                built by sports fans, for sports fans, with the community at the
                heart of every decision.
              </p>
            </div>
          </div>
        </div>
      </section>
      <JoinWaitlist />
    </div>
  );
}
