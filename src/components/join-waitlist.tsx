import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function JoinWaitlist() {
  return (
    <section className="space-y-8 py-20">
      <div className="mx-auto max-w-lg space-y-4 text-center">
        <h2 className="font-mono text-2xl">join the waitlist</h2>
        <p className="text-neutral-400">
          be the first to experience 10-second sports updates
        </p>
      </div>
      <div className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Input
          type="email"
          placeholder="Enter your email"
          className="bg-neutral-900"
        />
        <Button className="bg-white text-black hover:bg-neutral-200">
          get the scoop
        </Button>
      </div>
    </section>
  );
}
