export function writeAuditLog(entry: Record<string, unknown>): void {
  const serialized = JSON.stringify({ ...entry, writtenAt: new Date().toISOString() });
  console.log(`[audit] ${serialized}`);
}
