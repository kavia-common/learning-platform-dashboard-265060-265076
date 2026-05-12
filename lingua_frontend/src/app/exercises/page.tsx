import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";

export default function ExercisesPage() {
  return (
    <AppShell
      title="Exercises"
      subtitle="Practice fast. Repeat often."
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
        <Panel title="Quick practice">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Flashcards", meta: "Vocabulary" },
              { name: "Listening match", meta: "Comprehension" },
              { name: "Fill in the blank", meta: "Grammar" },
              { name: "Pronunciation", meta: "Speaking" },
              { name: "Sentence reorder", meta: "Syntax" },
              { name: "Mini quiz", meta: "Mixed" },
            ].map((x) => (
              <article
                key={x.name}
                className="rounded-xl border-2 border-black bg-white p-3 shadow-[4px_4px_0_0_#000]"
              >
                <div className="text-xs font-black uppercase tracking-wider text-neutral-600">
                  {x.meta}
                </div>
                <div className="mt-1 text-sm font-extrabold">{x.name}</div>
                <div className="mt-3 flex items-center gap-2">
                  <button className="rounded-lg border-2 border-black bg-[var(--accent)] px-3 py-2 text-xs font-black text-black shadow-[3px_3px_0_0_#000]">
                    Start
                  </button>
                  <button className="rounded-lg border-2 border-black bg-white px-3 py-2 text-xs font-black shadow-[3px_3px_0_0_#000]">
                    Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Panel>

        <Panel title="Note">
          <p className="text-sm text-neutral-700">
            Exercise attempt submission and scoring will be wired once backend
            endpoints are available.
          </p>
        </Panel>
      </div>
    </AppShell>
  );
}
