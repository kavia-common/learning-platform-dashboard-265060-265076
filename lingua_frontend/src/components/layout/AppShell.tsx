import React from "react";
import Link from "next/link";
import { cn } from "@/lib/ui/cn";

type NavItem = {
  href: string;
  label: string;
  hint?: string;
};

const NAV: NavItem[] = [
  { href: "/", label: "Dashboard", hint: "Overview" },
  { href: "/lessons", label: "Lessons", hint: "Learn" },
  { href: "/exercises", label: "Exercises", hint: "Practice" },
  { href: "/progress", label: "Progress", hint: "Track" },
  { href: "/analytics", label: "Analytics", hint: "Insights" },
  { href: "/notifications", label: "Notifications", hint: "Updates" },
  { href: "/admin", label: "Admin", hint: "Manage" },
];

function NavLink({ href, label, hint }: NavItem) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-lg border-2 border-black bg-white px-3 py-2",
        "shadow-[4px_4px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_#000]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      )}
    >
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-extrabold tracking-wide">{label}</span>
        {hint ? (
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 group-hover:text-neutral-900">
            {hint}
          </span>
        ) : null}
      </div>
    </Link>
  );
}

export function AppShell({
  title,
  subtitle,
  rightActions,
  children,
}: {
  title: string;
  subtitle?: string;
  rightActions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-[var(--bg)] text-[var(--fg)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 rounded-md border-2 border-black bg-white px-3 py-2 font-bold"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-6">
        <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl border-2 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
              <div className="mb-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-neutral-600">
                      Lingua
                    </div>
                    <div className="text-lg font-extrabold tracking-tight">
                      Retro Dashboard
                    </div>
                  </div>
                  <div className="rounded-lg border-2 border-black bg-[var(--accent)] px-2 py-1 text-xs font-black text-black shadow-[3px_3px_0_0_#000]">
                    Beta
                  </div>
                </div>
              </div>

              <nav aria-label="Primary">
                <div className="grid gap-2">
                  {NAV.map((item) => (
                    <NavLink key={item.href} {...item} />
                  ))}
                </div>
              </nav>

              <div className="mt-4 rounded-xl border-2 border-black bg-[var(--surface)] p-3">
                <div className="text-xs font-black uppercase tracking-wider">
                  Quick tips
                </div>
                <ul className="mt-2 list-disc pl-5 text-xs text-neutral-700">
                  <li>Try an exercise daily for streaks.</li>
                  <li>Use Analytics to spot weak skills.</li>
                  <li>Premium unlocks extra practice.</li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="min-w-0">
            <header className="rounded-2xl border-2 border-black bg-white p-4 shadow-[6px_6px_0_0_#000]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <h1 className="truncate text-xl font-extrabold tracking-tight">
                    {title}
                  </h1>
                  {subtitle ? (
                    <p className="mt-1 text-sm text-neutral-700">{subtitle}</p>
                  ) : null}
                </div>
                {rightActions ? (
                  <div className="flex shrink-0 items-center gap-2">
                    {rightActions}
                  </div>
                ) : null}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border-2 border-black bg-[var(--accent2)] px-2 py-1 font-black">
                  Lessons
                </span>
                <span className="rounded-full border-2 border-black bg-[var(--accent)] px-2 py-1 font-black">
                  Exercises
                </span>
                <span className="rounded-full border-2 border-black bg-[var(--surface)] px-2 py-1 font-black">
                  Admin
                </span>
              </div>
            </header>

            <main id="main" className="mt-4">
              {children}
            </main>

            <footer className="mt-6 text-center text-xs text-neutral-600">
              <p className="font-bold">
                Lingua MVP • Next.js UI (retro) • API wired via{" "}
                <code className="rounded bg-white px-1 py-0.5">
                  NEXT_PUBLIC_API_BASE_URL
                </code>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
