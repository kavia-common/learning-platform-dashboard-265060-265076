import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Panel } from "@/components/ui/Panel";

export default function NotificationsPage() {
  return (
    <AppShell
      title="Notifications"
      subtitle="Stay on track with reminders and updates."
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
        <Panel title="Inbox">
          <div className="grid gap-2">
            {[
              { t: "Daily reminder", d: "Keep your streak alive." },
              { t: "New lesson pack", d: "Travel Basics is now available." },
              { t: "Premium offer", d: "Unlock advanced practice." },
            ].map((n) => (
              <div
                key={n.t}
                className="rounded-xl border-2 border-black bg-white p-3 shadow-[4px_4px_0_0_#000]"
              >
                <div className="text-sm font-extrabold">{n.t}</div>
                <div className="mt-1 text-xs text-neutral-700">{n.d}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Preferences">
          <p className="text-sm text-neutral-700">
            Preferences will be saved to your account once backend settings APIs
            exist.
          </p>
        </Panel>
      </div>
    </AppShell>
  );
}
