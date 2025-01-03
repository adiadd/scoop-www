"use client";

export default function WaitlistButton() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToWaitlist}
      className="rounded-lg bg-neutral-800 px-6 py-3 font-mono text-sm ring-1 ring-neutral-700 transition-all duration-200 hover:bg-neutral-700 hover:ring-neutral-600"
    >
      join waitlist →
    </button>
  );
}
