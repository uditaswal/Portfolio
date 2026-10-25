"use client";

import { profile } from "../data";
import { showNotice } from "./Notice";

export const RESUME_UNAVAILABLE = "Resume is temporarily unavailable";

/**
 * Resume download button. While `profile.resume` is empty in data.ts it shows
 * a "temporarily unavailable" notice instead; set the path again and it
 * becomes a normal download link.
 */
export default function ResumeButton({ className }: { className: string }) {
  if (!profile.resume) {
    return (
      <button
        type="button"
        onClick={() => showNotice(RESUME_UNAVAILABLE)}
        className={className}
      >
        Resume
      </button>
    );
  }
  return (
    <a href={profile.resume} download className={className}>
      Resume
    </a>
  );
}
