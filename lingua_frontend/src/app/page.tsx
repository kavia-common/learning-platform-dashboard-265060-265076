"use client";

import React from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";
import { getHealth } from "@/lib/api/health";
import { cn } from "@/lib/ui/cn";

function StatPill({
  label,
  value,
  tone = "neutral",
}: {
  label: string;
  value: string;
  tone?: "neutral" | "good" | "bad" | "accent";
}) {
  const toneClass =
    tone === "good"
      ? "bg-[var(--good)]"
      : tone === "bad"
        ? "bg-[var(--bad)]"
        : tone === "accent"
          ? "bg-[var(--accent)]"
          : "bg-[var(--surface)]";

  return (
    <div
      className={cn(
        "rounded-xl border-2 border-black px-3 py-2 shadow-[4px_4px_0_0_#000]",
        toneClass
      )}
    >
      <div className="text-[10px] font-black uppercase tracking-wider text-black/80">
        {label}
      </div>
      <div className="text-sm font-extrabold text-black">{value}</div>
    </div>
  );
}

export default function Home() {
  const [backend, setBackend] = React.useState<
    | { state: "idle" | "loading" | "ok" | "error"; message?: string }
    | undefined
  >({ state: "idle" });

  React.useEffect(() => {
    let mounted = true;
    const run = async () => {
      setBackend({ state: "loading" });
      try {
        await getHealth();
        if (!mounted) return;
        setBackend({ state: "ok" });
      } catch (e) {
        if (!mounted) return;
        setBackend({
          state: "error",
          message: e instanceof Error ? e.message : "Unknown error",
        });
      }
    };
    run();
    return () => {
      mounted = false;
    };
  }, []);

  const statusTone =
    backend?.state === "ok"
      ? "good"
      : backend?.state === "error"
        ? "bad"
        : "neutral";

  const statusText =
    backend?.state === "ok"
      ? "Connected"
      : backend?.state === "error"
        ? "Disconnected"
        : backend?.state === "loading"
          ? "Checking…"
          : "Idle";

  return (
    <AppShell
      title="Dashboard"
      subtitle="Your learning HQ — pick a lesson, practice an exercise, and track progress."
      rightActions={
        <Link
          href="/profile"
          className="rounded-lg border-2 border-black bg-[var(--surface)] px-3 py-2 text-sm font-extrabold shadow-[4px_4px_0_0_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0_0_#000]"
        >
          Profile
        </Link>
      }
    >
      <div className="grid gap-4">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatPill label="Backend" value={statusText} tone={statusTone} />
          <StatPill label="Streak" value="3 days" tone="accent" />
          <StatPill label="XP" value="1,240" tone="neutral" />
          <StatPill label="Premium" value="Locked" tone="neutral" />
        </div>

        {backend?.state === "error" ? (
          <div className="rounded-xl border-2 border-black bg-white p-3 text-sm shadow-[6px_6px_0_0_#000]">
            <div className="font-extrabold">API connection failed</div>
            <p className="mt-1 text-neutral-700">
              Set{" "}
              <code className="rounded bg-neutral-100 px-1 py-0.5">
                NEXT_PUBLIC_API_BASE_URL
              </code>{" "}
              to your backend URL. Current error:{" "}
              <span className="font-bold">{backend.message}</span>
            </p>
          </div>
        ) : null}

        <div className="grid gap-4 lg:grid-cols-3">
          <Panel
            title="Continue"
            className="lg:col-span-2"
            actions={
              <Link
                href="/lessons"
                className="rounded-md border-2 border-black bg-[var(--accent2)] px-2 py-1 text-xs font-black shadow-[3px_3px_0_0_#000]"
              >
                View lessons
              </Link>
            }
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border-2 border-black bg-[var(--surface)] p-3">
                <div className="text-xs font-black uppercase tracking-wider">
                  Lesson
                </div>
                <div className="mt-1 text-sm font-extrabold">
                  Greetings & Introductions
                </div>
                <p className="mt-1 text-xs text-neutral-700">
                  Build confidence with the first 20 phrases.
                </p>
              </div>
              <div className="rounded-xl border-2 border-black bg-[var(--surface)] p-3">
                <div className="text-xs font-black uppercase tracking-wider">
                  Exercise
                </div>
                <div className="mt-1 text-sm font-extrabold">
                  Listening: Match the phrase
                </div>
                <p className="mt-1 text-xs text-neutral-700">
                  Quick practice to tune your ear.
                </p>
              </div>
            </div>
          </Panel>

          <Panel title="Shortcuts">
            <div className="grid gap-2">
              <Link
                href="/exercises"
                className="rounded-lg border-2 border-black bg-white px-3 py-2 text-sm font-extrabold shadow-[4px_4px_0_0_#000]"
              >
                Start an exercise
              </Link>
              <Link
                href="/progress"
                className="rounded-lg border-2 border-black bg-white px-3 py-2 text-sm font-extrabold shadow-[4px_4px_0_0_#000]"
              >
                Check progress
              </Link>
              <Link
                href="/analytics"
                className="rounded-lg border-2 border-black bg-white px-3 py-2 text-sm font-extrabold shadow-[4px_4px_0_0_#000]"
              >
                Open analytics
              </Link>
              <Link
                href="/admin"
                className="rounded-lg border-2 border-black bg-white px-3 py-2 text-sm font-extrabold shadow-[4px_4px_0_0_#000]"
              >
                Admin tools
              </Link>
            </div>
          </Panel>
        </div>

        <Panel title="What’s next?">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border-2 border-black bg-white p-3">
              <div className="text-xs font-black uppercase tracking-wider">
                Lessons
              </div>
              <p className="mt-1 text-xs text-neutral-700">
                Browse curated topics and levels.
              </p>
            </div>
            <div className="rounded-xl border-2 border-black bg-white p-3">
              <div className="text-xs font-black uppercase tracking-wider">
                Exercises
              </div>
              <p className="mt-1 text-xs text-neutral-700">
                Practice with quick feedback loops.
              </p>
            </div>
            <div className="rounded-xl border-2 border-black bg-white p-3">
              <div className="text-xs font-black uppercase tracking-wider">
                Premium
              </div>
              <p className="mt-1 text-xs text-neutral-700">
                Unlock extra content and advanced insights.
              </p>
            </div>
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
