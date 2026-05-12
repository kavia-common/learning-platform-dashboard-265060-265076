import React from "react";
import { cn } from "@/lib/ui/cn";

export function Panel({
  title,
  children,
  className,
  actions,
}: {
  title?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-xl border-2 border-black bg-white shadow-[6px_6px_0_0_#000] p-4",
        className
      )}
    >
      {(title || actions) && (
        <header className="mb-3 flex items-start justify-between gap-3">
          {title ? (
            <h2 className="text-sm font-extrabold uppercase tracking-wider">
              {title}
            </h2>
          ) : (
            <span />
          )}
          {actions ? <div className="shrink-0">{actions}</div> : null}
        </header>
      )}
      {children}
    </section>
  );
}
