export type ApiErrorPayload = {
  detail?: string;
  message?: string;
};

export class ApiError extends Error {
  status: number;
  payload?: ApiErrorPayload;

  constructor(message: string, status: number, payload?: ApiErrorPayload) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.payload = payload;
  }
}

/**
 * Prefer runtime env in the browser, fall back to NEXT_PUBLIC_API_BASE_URL.
 * Note: In production/static export, only NEXT_PUBLIC_* is available at build time.
 */
function getApiBaseUrl(): string {
  const envValue =
    typeof window !== "undefined"
      ? (window as unknown as { __LINGUA_API_BASE_URL__?: string })
          .__LINGUA_API_BASE_URL__
      : undefined;

  return (
    envValue ||
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "http://localhost:3001"
  ).replace(/\/$/, "");
}

async function parseJsonSafely(res: Response): Promise<unknown> {
  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) return undefined;
  try {
    return await res.json();
  } catch {
    return undefined;
  }
}

// PUBLIC_INTERFACE
export async function apiFetch<TResponse>(
  path: string,
  options?: RequestInit & { timeoutMs?: number }
): Promise<TResponse> {
  /** Fetch wrapper that adds base URL, JSON handling, and consistent errors. */
  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}${path.startsWith("/") ? "" : "/"}${path}`;

  const controller = new AbortController();
  const timeoutMs = options?.timeoutMs ?? 15000;
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        Accept: "application/json",
        ...(options?.headers || {}),
      },
      signal: controller.signal,
    });

    const payload = (await parseJsonSafely(res)) as ApiErrorPayload | undefined;

    if (!res.ok) {
      const msg =
        payload?.detail ||
        payload?.message ||
        `Request failed with status ${res.status}`;
      throw new ApiError(msg, res.status, payload);
    }

    // If no JSON, return undefined as TResponse
    return (payload as unknown as TResponse) ?? (undefined as TResponse);
  } finally {
    clearTimeout(timeout);
  }
}
