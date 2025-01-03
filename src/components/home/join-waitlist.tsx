"use client";

import { useState } from "react";
import TallyForm from "../forms/tally-form";
import { Skeleton } from "../ui/skeleton";

function WaitlistSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="mx-auto h-[177px] w-full max-w-lg rounded-lg" />
    </div>
  );
}

export default function JoinWaitlist() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="waitlist" className="space-y-8 py-20">
      <div className="mx-auto max-w-lg space-y-4 text-center">
        <h2 className="font-mono text-2xl">join the waitlist</h2>
        <div className="relative">
          {isLoading && <WaitlistSkeleton />}
          <div className={isLoading ? "invisible" : "visible"}>
            <TallyForm onLoad={() => setIsLoading(false)} />
          </div>
        </div>
      </div>
    </section>
  );
}
