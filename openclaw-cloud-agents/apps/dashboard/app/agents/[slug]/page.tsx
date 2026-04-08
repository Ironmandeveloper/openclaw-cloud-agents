import { notFound } from 'next/navigation';
import { getAgent } from '@/lib/api';

function examplePayload(slug: string) {
  if (slug === 'court-dates') {
    return {
      caseName: 'Johnson vs Metro Holdings',
      hearingDate: '2026-04-18',
      jurisdiction: 'King County Superior Court',
      priority: 'high'
    };
  }

  return {
    campaignName: 'Spring Retargeting - Personal Injury Leads',
    dailyBudget: 450,
    ctr: 3.8,
    conversionRate: 5.2,
    region: 'California'
  };
}

export default async function AgentDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const agent = await getAgent(slug);

  if (!agent) notFound();

  const payload = examplePayload(slug);

  return (
    <div className="stack">
      <a className="badge" href="/">← Back to overview</a>
      <div className="glass card stack">
        <div className="space-between">
          <div>
            <div className="badge pill-healthy">{agent.status}</div>
            <h1 style={{ margin: '14px 0 8px', fontSize: 40 }}>{agent.name}</h1>
            <p className="muted" style={{ margin: 0 }}>{agent.description}</p>
          </div>
          <div className="stack" style={{ alignItems: 'flex-end' }}>
            <strong>{agent.successRate}% success</strong>
            <span className="muted">{agent.averageLatencyMs} ms average latency</span>
          </div>
        </div>
      </div>

      <div className="agent-grid">
        <div className="glass card stack">
          <h2 className="section-title">Execution profile</h2>
          <table className="table">
            <tbody>
              <tr><th>Owner</th><td>{agent.owner}</td></tr>
              <tr><th>Domain</th><td>{agent.domain}</td></tr>
              <tr><th>Queue depth</th><td>{agent.queueDepth}</td></tr>
              <tr><th>Last run</th><td>{agent.lastRunAt}</td></tr>
            </tbody>
          </table>
        </div>

        <div className="glass card stack">
          <h2 className="section-title">Sample input payload</h2>
          <pre>{JSON.stringify(payload, null, 2)}</pre>
        </div>
      </div>

      <div className="glass card stack">
        <div className="space-between">
          <h2 className="section-title">Client walkthrough talking points</h2>
          <span className="badge">Screen-share ready</span>
        </div>
        <ul style={{ margin: 0, paddingLeft: 20, color: 'var(--muted)', lineHeight: 1.8 }}>
          <li>Explain how this agent fits into a secure cloud deployment with a dedicated trust boundary.</li>
          <li>Walk through the sample payload and show how structured input reduces manual review effort.</li>
          <li>Highlight audit logging, service separation, and operational readiness rather than only UI polish.</li>
        </ul>
      </div>
    </div>
  );
}
