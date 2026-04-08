import { Router } from 'express';
import { z } from 'zod';
import { auditEvents } from '../data/audit';
import { getAgent, listAgents, runAgent } from '../services/agent.service';
import { writeAuditLog } from '../services/audit.service';

const runSchema = z.object({
  payload: z.record(z.any()).default({})
});

export const agentsRouter = Router();

agentsRouter.get('/', (_req, res) => {
  res.json({ items: listAgents() });
});

agentsRouter.get('/audit', (_req, res) => {
  res.json({ items: auditEvents });
});

agentsRouter.get('/:slug', (req, res) => {
  const agent = getAgent(req.params.slug);

  if (!agent) {
    return res.status(404).json({ message: 'Agent not found' });
  }

  return res.json(agent);
});

agentsRouter.post('/:slug/run', (req, res) => {
  const parsed = runSchema.safeParse(req.body ?? {});

  if (!parsed.success) {
    return res.status(400).json({ message: 'Invalid payload', issues: parsed.error.flatten() });
  }

  const result = runAgent({
    agentSlug: req.params.slug,
    payload: parsed.data.payload
  });

  writeAuditLog({
    action: 'agent.run',
    agentSlug: req.params.slug,
    runId: result.runId,
    outcome: result.status
  });

  return res.json(result);
});
