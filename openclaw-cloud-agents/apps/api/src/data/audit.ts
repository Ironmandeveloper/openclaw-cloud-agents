export const auditEvents = [
  {
    id: 'evt_1001',
    actor: 'system',
    action: 'agent.run',
    agentSlug: 'court-dates',
    timestamp: '2026-04-08T14:20:00Z',
    outcome: 'success',
    note: 'Generated priority reminder set for three hearings.'
  },
  {
    id: 'evt_1002',
    actor: 'ops.user',
    action: 'agent.review',
    agentSlug: 'google-ads',
    timestamp: '2026-04-08T14:27:00Z',
    outcome: 'success',
    note: 'Approved copy suggestions for April retargeting campaign.'
  },
  {
    id: 'evt_1003',
    actor: 'system',
    action: 'health.check',
    agentSlug: 'court-dates',
    timestamp: '2026-04-08T14:35:00Z',
    outcome: 'success',
    note: 'Execution worker and prompt registry responding normally.'
  }
];
