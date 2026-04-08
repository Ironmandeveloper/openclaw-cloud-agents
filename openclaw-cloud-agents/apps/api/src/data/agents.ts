import type { AgentSummary } from '../types/agent';

export const agents: AgentSummary[] = [
  {
    id: 'agt_legal_001',
    name: 'Court Dates Agent',
    slug: 'court-dates',
    domain: 'Legal Operations',
    description: 'Validates case intake, extracts hearing timelines, and prepares court reminder actions.',
    status: 'healthy',
    lastRunAt: '2026-04-08T14:20:00Z',
    averageLatencyMs: 842,
    successRate: 99.1,
    queueDepth: 3,
    owner: 'Legal Automation'
  },
  {
    id: 'agt_ads_002',
    name: 'Google Ads Agent',
    slug: 'google-ads',
    domain: 'Growth Operations',
    description: 'Reviews campaign inputs, drafts optimization notes, and prepares action-ready ad recommendations.',
    status: 'healthy',
    lastRunAt: '2026-04-08T14:32:00Z',
    averageLatencyMs: 1173,
    successRate: 98.4,
    queueDepth: 5,
    owner: 'Marketing Systems'
  }
];
