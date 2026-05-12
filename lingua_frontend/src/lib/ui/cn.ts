type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, boolean>
  | ClassValue[];

// PUBLIC_INTERFACE
export function cn(...values: ClassValue[]): string {
  /** Minimal className merge helper (no external deps). */
  const out: string[] = [];

  const push = (v: ClassValue): void => {
    if (!v) return;
    if (typeof v === "string" || typeof v === "number") {
      out.push(String(v));
      return;
    }
    if (Array.isArray(v)) {
      v.forEach(push);
      return;
    }
    if (typeof v === "object") {
      Object.entries(v).forEach(([k, enabled]) => {
        if (enabled) out.push(k);
      });
    }
  };

  values.forEach(push);
  return out.join(" ");
}
