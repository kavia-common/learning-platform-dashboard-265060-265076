import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";

export default function ProgressPage() {
  return (
    <AppShell
      title="Progress"
      subtitle="Track streaks, completion, and weak spots."
      rightActions={
        <Link
          href="/"
          className="rounded-lg border-2 border-black bg-white px-3 py-2 text-sm font-extrabold shadow-[4px_4px_0_0_#000]"
        >
          Back
        </Link>
      }
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <Panel title="Streak">
          <div className="text-3xl font-extrabold">3</div>
          <p className="mt-1 text-sm text-neutral-700">days in a row</p>
        </Panel>
        <Panel title="Completion">
          <div className="text-3xl font-extrabold">18%</div>
          <p className="mt-1 text-sm text-neutral-700">of current level</p>
        </Panel>
        <Panel title="Focus">
          <div className="text-sm font-extrabold">Listening</div>
          <p className="mt-1 text-sm text-neutral-700">recommended today</p>
        </Panel>

        <Panel title="Weekly overview" className="lg:col-span-3">
          <div className="grid gap-2 sm:grid-cols-7">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, idx) => (
              <div
                key={`${d}-${idx}`}
                className="rounded-xl border-2 border-black bg-white p-3 text-center shadow-[4px_4px_0_0_#000]"
              >
                <div className="text-xs font-black uppercase tracking-wider text-neutral-600">
                  {d}
                </div>
                <div className="mt-1 text-sm font-extrabold">
                  {idx < 3 ? "✓" : "—"}
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
