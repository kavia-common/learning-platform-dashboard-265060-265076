import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";

export default function ProfilePage() {
  return (
    <AppShell
      title="Profile"
      subtitle="Account, notifications, and premium access."
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
        <Panel title="Account">
          <div className="text-sm">
            <div className="font-extrabold">Guest</div>
            <p className="mt-1 text-xs text-neutral-700">
              Auth will be added once backend auth endpoints are implemented.
            </p>
          </div>
        </Panel>

        <Panel title="Premium">
          <div className="rounded-xl border-2 border-black bg-[var(--accent2)] p-3">
            <div className="text-sm font-extrabold text-black">
              Premium is locked
            </div>
            <p className="mt-1 text-xs text-black/80">
              Unlock extra practice, deeper analytics, and more.
            </p>
            <button className="mt-3 rounded-lg border-2 border-black bg-white px-3 py-2 text-xs font-black shadow-[3px_3px_0_0_#000]">
              Upgrade (MVP)
            </button>
          </div>
        </Panel>

        <Panel title="Notifications">
          <div className="grid gap-2 text-sm">
            <label className="flex items-center justify-between gap-3 rounded-xl border-2 border-black bg-white px-3 py-2">
              <span className="font-bold">Daily reminder</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label className="flex items-center justify-between gap-3 rounded-xl border-2 border-black bg-white px-3 py-2">
              <span className="font-bold">Product updates</span>
              <input type="checkbox" defaultChecked />
            </label>
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
