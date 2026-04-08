import { ReactNode } from 'react';

interface KpiCardProps {
  label: string;
  value: string;
  detail: string;
  icon: ReactNode;
}

export function KpiCard({ label, value, detail, icon }: KpiCardProps) {
  return (
    <div className="glass card">
      <div className="space-between">
        <span className="muted">{label}</span>
        {icon}
      </div>
      <div className="metric-value">{value}</div>
      <div className="muted">{detail}</div>
    </div>
  );
}
