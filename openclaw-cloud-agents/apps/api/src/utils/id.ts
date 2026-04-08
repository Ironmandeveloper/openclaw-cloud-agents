export function createRunId(prefix = 'run'): string {
  const random = Math.random().toString(36).slice(2, 10);
  return `${prefix}_${random}`;
}
