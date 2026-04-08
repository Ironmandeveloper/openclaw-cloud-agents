export type AgentStatus = 'healthy' | 'degraded' | 'maintenance';

export interface AgentSummary {
  id: string;
  name: string;
  slug: string;
  domain: string;
  description: string;
  status: AgentStatus;
  lastRunAt: string;
  averageLatencyMs: number;
  successRate: number;
  queueDepth: number;
  owner: string;
}

export interface RunAgentInput {
  agentSlug: string;
  payload: Record<string, unknown>;
}

export interface AgentRunResult {
  runId: string;
  agentSlug: string;
  status: 'completed';
  startedAt: string;
  completedAt: string;
  summary: string;
  output: Record<string, unknown>;
}
