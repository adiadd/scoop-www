export default function SupportedLeagues() {
  return (
    <section className="py-20">
      <h2 className="mb-12 font-mono text-xl">supported leagues</h2>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
        <div className="flex h-20 items-center justify-center rounded-lg border border-neutral-800">
          <span className="font-mono text-xl">NBA</span>
        </div>
        <div className="flex h-20 items-center justify-center rounded-lg border border-neutral-800">
          <span className="font-mono text-xl">NFL</span>
        </div>
        <div className="flex h-20 items-center justify-center rounded-lg border border-neutral-800">
          <span className="font-mono text-xl">MLB</span>
        </div>
        <div className="flex h-20 items-center justify-center rounded-lg border border-neutral-800">
          <span className="font-mono text-xl">NHL</span>
        </div>
        <div className="flex h-20 items-center justify-center rounded-lg border border-neutral-800">
          <span className="font-mono text-xl">FIFA</span>
        </div>
      </div>
    </section>
  );
}
