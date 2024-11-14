"use client";

import Script from "next/script";

export default function TallyForm() {
  return (
    <>
      <iframe
        data-tally-src="https://tally.so/embed/wo0RQX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="177"
        style={{ border: 0, margin: 0 }}
        title="join the scoop waitlist"
      ></iframe>

      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          // @ts-expect-error Tally is not defined in the global scope
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
          Tally.loadEmbeds();
        }}
      />
    </>
  );
}
