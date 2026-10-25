"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { profile, sections } from "../data";
import { toggleTheme } from "./ThemeToggle";

type Command = { label: string; hint: string; run: () => void };

/**
 * Ctrl/Cmd + K command palette. The trigger button lives in the hero; the
 * dialog itself is rendered into <body> through a portal so it always sits
 * above the fixed left rail and the scrolling content.
 */
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  // Shown on the trigger button. Decided after mount so server and client markup match.
  const [shortcut, setShortcut] = useState("Ctrl K");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.platform)) setShortcut("⌘ K");
  }, []);

  // To add a command, add an entry here. `hint` is the small grey label on the right.
  const commands = useMemo<Command[]>(
    () => [
      ...sections.map(({ id, label }) => ({
        label: `Go to ${label}`,
        hint: "Navigate",
        run: () =>
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      })),
      {
        label: "Send an email",
        hint: "Contact",
        run: () => (window.location.href = `mailto:${profile.email}`),
      },
      {
        label: "Download resume",
        hint: "File",
        run: () => window.open(profile.resume, "_blank"),
      },
      {
        label: "Open GitHub",
        hint: "Social",
        run: () => window.open(profile.github, "_blank", "noopener"),
      },
      {
        label: "Open LinkedIn",
        hint: "Social",
        run: () => window.open(profile.linkedin, "_blank", "noopener"),
      },
      { label: "Toggle theme", hint: "Settings", run: toggleTheme },
    ],
    [],
  );

  const filtered = commands.filter((c) =>
    c.label.toLowerCase().includes(query.toLowerCase()),
  );

  const close = () => {
    setOpen(false);
    setQuery("");
    setIndex(0);
  };

  // Global shortcut: Ctrl/Cmd + K toggles the palette.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const choose = (cmd?: Command) => {
    if (!cmd) return;
    close();
    cmd.run();
  };

  const dialog = (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-[15vh]"
      onClick={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="w-full max-w-md border bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Escape") close();
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setIndex((i) => Math.min(i + 1, filtered.length - 1));
          }
          if (e.key === "ArrowUp") {
            e.preventDefault();
            setIndex((i) => Math.max(i - 1, 0));
          }
          if (e.key === "Enter") choose(filtered[index]);
        }}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIndex(0);
          }}
          placeholder="Search for a command to run..."
          className="w-full border-b bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
        />
        <ul className="max-h-72 overflow-y-auto p-1">
          {filtered.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-muted-foreground">
              No results found.
            </li>
          )}
          {filtered.map((cmd, i) => (
            <li key={cmd.label}>
              <button
                type="button"
                onClick={() => choose(cmd)}
                onMouseEnter={() => setIndex(i)}
                className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm ${
                  i === index ? "bg-muted" : ""
                }`}
              >
                <span>{cmd.label}</span>
                <span className="text-xs text-muted-foreground">{cmd.hint}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="flex h-8 items-center gap-2 border px-2.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span>Search</span>
        <kbd className="border bg-muted px-1.5 py-0.5 font-sans text-[10px] leading-none">
          {shortcut}
        </kbd>
      </button>

      {open && createPortal(dialog, document.body)}
    </>
  );
}
