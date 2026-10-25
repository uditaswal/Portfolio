"use client";

import { useEffect, useState } from "react";

const EVENT = "site-notice";

/** Show a short message at the bottom of the screen from anywhere in the client code. */
export function showNotice(message: string) {
  window.dispatchEvent(new CustomEvent(EVENT, { detail: message }));
}

/** Mount once (see page.tsx). Displays messages sent with `showNotice` for a few seconds. */
export default function NoticeHost() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const onNotice = (e: Event) => {
      setMessage((e as CustomEvent<string>).detail);
      clearTimeout(timer);
      timer = setTimeout(() => setMessage(""), 2800);
    };
    window.addEventListener(EVENT, onNotice);
    return () => {
      window.removeEventListener(EVENT, onNotice);
      clearTimeout(timer);
    };
  }, []);

  if (!message) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 border bg-background px-4 py-2 text-sm shadow-lg"
    >
      {message}
    </div>
  );
}
