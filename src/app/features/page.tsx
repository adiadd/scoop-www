import {
  Brain,
  Clock,
  Globe,
  Laptop,
  Smartphone,
  UserCircle,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div>
      <section className="space-y-6 py-20">
        <h1 className="font-mono text-4xl font-bold sm:text-6xl">
          your personalized sports digest in 10 seconds
        </h1>
        <p className="max-w-2xl text-lg text-neutral-400">
          stay on top of your favorite sports without spending hours watching
          highlights or scrolling through updates. our ai-powered platform
          delivers exactly what you need to know, when you need to know it.
        </p>
      </section>

      <section className="grid gap-8 py-20 sm:grid-cols-2">
        <div className="rounded-lg border border-neutral-800 p-8">
          <UserCircle className="mb-4 h-8 w-8" />
          <h2 className="mb-4 font-mono text-xl">smart personalization</h2>
          <p className="text-neutral-400">
            tell us your favorite teams, players, and leagues. we&apos;ll create
            a custom feed that prioritizes what matters most to you, filtering
            out the noise.
          </p>
        </div>

        <div className="rounded-lg border border-neutral-800 p-8">
          <Brain className="mb-4 h-8 w-8" />
          <h2 className="mb-4 font-mono text-xl">ai-powered summaries</h2>
          <p className="text-neutral-400">
            our advanced ai analyzes hours of game footage and countless stats
            to deliver concise, meaningful updates that capture the essence of
            every game.
          </p>
        </div>

        <div className="rounded-lg border border-neutral-800 p-8">
          <Clock className="mb-4 h-8 w-8" />
          <h2 className="mb-4 font-mono text-xl">time-saving digests</h2>
          <p className="text-neutral-400">
            get the full story in just 10 seconds. our bite-sized updates give
            you all the context you need without the time investment.
          </p>
        </div>

        <div className="rounded-lg border border-neutral-800 p-8">
          <Globe className="mb-4 h-8 w-8" />
          <h2 className="mb-4 font-mono text-xl">global coverage</h2>
          <p className="text-neutral-400">
            follow sports from around the world with our comprehensive coverage
            of major leagues, tournaments, and events across all time zones.
          </p>
        </div>
      </section>

      <section className="space-y-12 py-20">
        <div className="space-y-6">
          <h2 className="font-mono text-2xl">available everywhere</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex items-start space-x-4">
              <Smartphone className="h-6 w-6" />
              <div>
                <h3 className="mb-2 font-mono text-lg">mobile experience</h3>
                <p className="text-neutral-400">
                  take your sports updates on the go with our responsive mobile
                  app. perfect for checking scores and highlights during your
                  commute.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Laptop className="h-6 w-6" />
              <div>
                <h3 className="mb-2 font-mono text-lg">desktop platform</h3>
                <p className="text-neutral-400">
                  get a broader view of your sports world with our feature-rich
                  desktop experience. perfect for deeper analysis and
                  statistics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8 py-20">
        <h2 className="font-mono text-2xl">platform features</h2>
        <div className="space-y-4 font-mono text-neutral-400">
          <div className="rounded-lg border border-neutral-800 p-6">
            <h3 className="mb-2 text-white">real-time updates</h3>
            <p>
              instant notifications for scores, major plays, and breaking news
            </p>
          </div>
          <div className="rounded-lg border border-neutral-800 p-6">
            <h3 className="mb-2 text-white">smart highlights</h3>
            <p>ai-curated video clips of the most important moments</p>
          </div>
          <div className="rounded-lg border border-neutral-800 p-6">
            <h3 className="mb-2 text-white">stats at a glance</h3>
            <p>key statistics and performance metrics presented clearly</p>
          </div>
          <div className="rounded-lg border border-neutral-800 p-6">
            <h3 className="mb-2 text-white">custom alerts</h3>
            <p>set your own notification preferences for what matters most</p>
          </div>
        </div>
      </section>
    </div>
  );
}
