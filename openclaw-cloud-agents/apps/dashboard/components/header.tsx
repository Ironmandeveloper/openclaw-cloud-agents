import { Bot, ShieldCheck } from 'lucide-react';

export function Header() {
  return (
    <div className="hero">
      <div className="glass card stack">
        <div className="badge">OpenClaw Cloud Operations</div>
        <h1>Secure agent deployment, polished for client-facing demos.</h1>
        <p>
          A production-style operations console showing workload health, audit visibility,
          workflow ownership, and scoped execution surfaces for OpenClaw-based automation.
        </p>
        <div className="row">
          <a className="button" href="/agents/court-dates">Review Court Dates Agent</a>
          <a className="button secondary" href="/agents/google-ads">Review Google Ads Agent</a>
        </div>
      </div>
      <div className="glass card stack">
        <div className="row"><ShieldCheck size={18} /> <strong>Security posture</strong></div>
        <p className="muted">
          Separate UI and API services, rate limiting, env-based secrets, audit logging,
          and reverse-proxy boundaries for controlled cloud exposure.
        </p>
        <div className="row"><Bot size={18} /> <span className="muted">Two operational agents with execution-ready payload examples</span></div>
      </div>
    </div>
  );
}
