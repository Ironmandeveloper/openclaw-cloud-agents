import { Activity, Gauge, Layers3, Shield } from 'lucide-react';
import { AgentCard } from '@/components/agent-card';
import { Header } from '@/components/header';
import { KpiCard } from '@/components/kpi-card';
import { getAgents, getAuditEvents } from '@/lib/api';

export default async function HomePage() {
  const [{ items: agents }, { items: auditEvents }] = await Promise.all([getAgents(), getAuditEvents()]);

  const totalQueueDepth = agents.reduce((sum, item) => sum + item.queueDepth, 0);
  const averageSuccess = agents.length
    ? (agents.reduce((sum, item) => sum + item.successRate, 0) / agents.length).toFixed(1)
    : '0.0';

  return (
    <div className="stack">
      <Header />

      <section className="kpi-grid">
        <KpiCard label="Active Agents" value={String(agents.length)} detail="Court operations and growth operations" icon={<Layers3 size={18} />} />
        <KpiCard label="Success Rate" value={`${averageSuccess}%`} detail="Measured across the latest execution window" icon={<Shield size={18} />} />
        <KpiCard label="Queue Depth" value={String(totalQueueDepth)} detail="Current workload waiting for review" icon={<Activity size={18} />} />
        <KpiCard label="Control Mode" value="Scoped" detail="Single trust boundary and controlled execution" icon={<Gauge size={18} />} />
      </section>

      <section className="stack">
        <h2 className="section-title">Operational agents</h2>
        <div className="agent-grid">
          {agents.map((agent) => <AgentCard key={agent.id} agent={agent} />)}
        </div>
      </section>

      <section className="stack">
        <div className="space-between">
          <h2 className="section-title">Recent audit events</h2>
          <span className="badge">Last 3 entries</span>
        </div>
        <div className="audit-grid">
          {auditEvents.map((event) => (
            <div className="glass card stack" key={event.id}>
              <div className="space-between">
                <strong>{event.action}</strong>
                <span className="badge">{event.outcome}</span>
              </div>
              <div className="muted">{event.agentSlug}</div>
              <div>{event.note}</div>
              <div className="muted">{event.timestamp}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
