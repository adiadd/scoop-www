import TallyForm from "../forms/tally-form";

export default function JoinWaitlist() {
  return (
    <section className="space-y-8 py-20">
      <div className="mx-auto max-w-lg space-y-4 text-center">
        <h2 className="font-mono text-2xl">join the waitlist</h2>
        <TallyForm />
      </div>
    </section>
  );
}
