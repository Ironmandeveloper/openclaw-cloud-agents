export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080';

async function safeFetch<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, { cache: 'no-store' });
    if (!response.ok) return fallback;
    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}

export async function getAgents() {
  return safeFetch<{ items: any[] }>('/agents', { items: [] });
}

export async function getAgent(slug: string) {
  return safeFetch<any | null>(`/agents/${slug}`, null);
}

export async function getAuditEvents() {
  return safeFetch<{ items: any[] }>('/agents/audit', { items: [] });
}
