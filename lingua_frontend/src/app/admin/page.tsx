import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";

export default function AdminPage() {
  return (
    <AppShell
      title="Admin"
      subtitle="Manage lessons, exercises, and featured content."
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
        <Panel title="Content controls" className="lg:col-span-2">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Create lesson",
              "Edit exercise",
              "Publish updates",
              "Review reports",
            ].map((a) => (
              <button
                key={a}
                className="rounded-xl border-2 border-black bg-white p-3 text-left text-sm font-extrabold shadow-[4px_4px_0_0_#000]"
              >
                {a}
              </button>
            ))}
          </div>
        </Panel>
        <Panel title="Roles">
          <p className="text-sm text-neutral-700">
            Admin role enforcement will be implemented server-side.
          </p>
        </Panel>
      </div>
    </AppShell>
  );
}
