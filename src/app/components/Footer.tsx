import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="px-6 py-8 text-center font-mono text-xs text-muted-foreground">
      &copy; {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
