import { apiFetch } from "@/lib/api/client";

export type HealthResponse = Record<string, never>;

// PUBLIC_INTERFACE
export async function getHealth(): Promise<HealthResponse> {
  /** Calls backend health check endpoint. */
  return apiFetch<HealthResponse>("/");
}
