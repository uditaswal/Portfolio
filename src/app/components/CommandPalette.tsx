"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { profile, sections } from "../data";
import { toggleTheme } from "./ThemeToggle";

type Command = { label: string; hint: string; run: () => void };

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="flex h-8 items-center gap-1 border px-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <span>⌘</span>
        <span>K</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-[15vh]"
          onClick={close}
        >
          <div
            role="dialog"
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
                    <span className="font-mono text-xs text-muted-foreground">
                      {cmd.hint}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
