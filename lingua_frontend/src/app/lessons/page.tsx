import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";

export default function LessonsPage() {
  return (
    <AppShell
      title="Lessons"
      subtitle="Pick a topic. Learn in bite-sized chunks."
      rightActions={
        <Link
          href="/"
          className="rounded-lg border-2 border-black bg-white px-3 py-2 text-sm font-extrabold shadow-[4px_4px_0_0_#000]"
        >
          Back
        </Link>
      }
    >
      <div className="grid gap-4">
        <Panel title="Featured lessons">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Greetings & Introductions",
              "Ordering Food",
              "Travel Basics",
              "Numbers & Time",
              "Common Questions",
              "Daily Routine",
            ].map((name) => (
              <article
                key={name}
                className="rounded-xl border-2 border-black bg-white p-3 shadow-[4px_4px_0_0_#000]"
              >
                <div className="text-sm font-extrabold">{name}</div>
                <p className="mt-1 text-xs text-neutral-700">
                  6 sections • 12 exercises
                </p>
                <div className="mt-3">
                  <button className="rounded-lg border-2 border-black bg-[var(--accent2)] px-3 py-2 text-xs font-black shadow-[3px_3px_0_0_#000]">
                    Start
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel title="Note">
          <p className="text-sm text-neutral-700">
            This is UI scaffolding. Lesson data will be loaded from the backend
            once lesson endpoints are implemented.
          </p>
        </Panel>
      </div>
    </AppShell>
  );
}
