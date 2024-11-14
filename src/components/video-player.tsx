"use client";

import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

export default function VideoPlayer() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {isLoading && (
        <Skeleton className="h-[618px] w-full max-w-[300px] rounded-xl" />
      )}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl"
        style={{
          width: "100%",
          maxWidth: "300px",
          display: isLoading ? "none" : "block",
        }}
        onLoadedData={() => setIsLoading(false)}
      >
        <source
          src="https://utfs.io/f/70ihSaB10mQqmcGew0U8pTF3YZA9qLv1VEfknlRDgzosWB8H"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
