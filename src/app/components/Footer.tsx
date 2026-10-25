import { profile } from "../data";

/**
 * Copyright line. On wide screens it is pinned to the bottom of the fixed left
 * rail, so it is always visible; on small screens it closes the page instead.
 * Pass `className` to control where it shows.
 */
export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer
      className={`px-6 py-5 text-xs text-muted-foreground ${className}`}
    >
      &copy; {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
