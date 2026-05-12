import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";

export default function AnalyticsPage() {
  return (
    <AppShell
      title="Analytics"
      subtitle="Insights into performance and engagement."
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
        <Panel title="Skill radar" className="lg:col-span-2">
          <div className="rounded-xl border-2 border-black bg-[var(--surface)] p-4 text-sm text-neutral-700">
            Placeholder chart area (to be driven by backend analytics).
          </div>
        </Panel>
        <Panel title="Top signals">
          <ul className="list-disc pl-5 text-sm text-neutral-700">
            <li>Accuracy: 82%</li>
            <li>Speed: improving</li>
            <li>Listening: needs work</li>
          </ul>
        </Panel>

        <Panel title="Admin metrics" className="lg:col-span-3">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { k: "DAU", v: "—" },
              { k: "New users", v: "—" },
              { k: "Premium", v: "—" },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-xl border-2 border-black bg-white p-3 shadow-[4px_4px_0_0_#000]"
              >
                <div className="text-xs font-black uppercase tracking-wider text-neutral-600">
                  {x.k}
                </div>
                <div className="mt-1 text-2xl font-extrabold">{x.v}</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
