import { ArrowUpRight, Clock3 } from 'lucide-react';

export function AgentCard({ agent }: { agent: any }) {
  return (
    <a className="glass card stack" href={`/agents/${agent.slug}`}>
      <div className="space-between">
        <div>
          <div className="badge pill-healthy">{agent.status}</div>
          <h3 style={{ margin: '12px 0 6px', fontSize: 24 }}>{agent.name}</h3>
          <div className="muted">{agent.domain}</div>
        </div>
        <ArrowUpRight size={20} />
      </div>
      <p className="muted" style={{ margin: 0 }}>{agent.description}</p>
      <div className="space-between">
        <div className="row muted"><Clock3 size={14} /> {agent.averageLatencyMs} ms avg</div>
        <strong>{agent.successRate}% success</strong>
      </div>
    </a>
  );
}
