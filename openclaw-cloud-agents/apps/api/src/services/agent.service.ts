import { agents } from '../data/agents';
import type { AgentRunResult, RunAgentInput } from '../types/agent';
import { createRunId } from '../utils/id';

function buildCourtDateOutput(payload: Record<string, unknown>) {
  const caseName = String(payload.caseName ?? 'State vs Doe');
  const hearingDate = String(payload.hearingDate ?? '2026-04-18');
  return {
    priority: 'high',
    caseName,
    hearingDate,
    reminders: [
      `Send client prep reminder 7 days before ${hearingDate}`,
      `Confirm counsel availability 3 days before ${hearingDate}`,
      `Escalate filing checklist 24 hours before ${hearingDate}`
    ],
    summary: `${caseName} has a scheduled hearing on ${hearingDate} with a high-priority action sequence.`
  };
}

function buildGoogleAdsOutput(payload: Record<string, unknown>) {
  const campaignName = String(payload.campaignName ?? 'Brand Search - Spring');
  const budget = Number(payload.dailyBudget ?? 250);
  const ctr = Number(payload.ctr ?? 3.2);
  return {
    campaignName,
    recommendation: ctr < 4 ? 'Refresh headlines and tighten search themes.' : 'Scale budget gradually while preserving top-performing ad groups.',
    budgetChange: ctr < 4 ? `${Math.round(budget * 0.9)}` : `${Math.round(budget * 1.15)}`,
    suggestedCopy: [
      'Book a strategy call with a certified specialist today.',
      'Launch smarter campaigns with faster reporting and clearer ROI.'
    ],
    summary: `${campaignName} was reviewed with a current CTR of ${ctr}% and a revised pacing recommendation.`
  };
}

export function listAgents() {
  return agents;
}

export function getAgent(slug: string) {
  return agents.find((agent) => agent.slug === slug);
}

export function runAgent(input: RunAgentInput): AgentRunResult {
  const agent = getAgent(input.agentSlug);

  if (!agent) {
    throw new Error(`Unknown agent: ${input.agentSlug}`);
  }

  const startedAt = new Date().toISOString();
  const output =
    input.agentSlug === 'court-dates'
      ? buildCourtDateOutput(input.payload)
      : buildGoogleAdsOutput(input.payload);

  return {
    runId: createRunId(),
    agentSlug: input.agentSlug,
    status: 'completed',
    startedAt,
    completedAt: new Date().toISOString(),
    summary: String(output.summary),
    output
  };
}
