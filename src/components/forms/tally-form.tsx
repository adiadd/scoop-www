"use client";

import Script from "next/script";
import { useEffect } from "react";

interface TallyFormProps {
  onLoad?: () => void;
}

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function TallyForm({ onLoad }: TallyFormProps) {
  useEffect(() => {
    // Check if Tally is already loaded
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <>
      <iframe
        data-tally-src="https://tally.so/embed/wo0RQX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="177"
        style={{ border: 0, margin: 0 }}
        title="join the scoop waitlist"
        onLoad={onLoad}
      ></iframe>

      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          window.Tally?.loadEmbeds();
          onLoad?.();
        }}
      />
    </>
  );
}
