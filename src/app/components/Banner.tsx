"use client";

import { useEffect, useState } from "react";

export default function Banner() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-36 overflow-hidden border-b bg-card sm:h-44">
      <div className="banner-grid absolute inset-0" aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-card to-transparent" />
      <span
        className="absolute right-4 bottom-3 font-mono text-sm tabular-nums text-muted-foreground"
        suppressHydrationWarning
      >
        {time}
      </span>
    </div>
  );
}
