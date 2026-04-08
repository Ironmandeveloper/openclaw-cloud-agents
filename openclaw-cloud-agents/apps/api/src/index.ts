import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { env } from './config/env';
import { apiRateLimit } from './middleware/rateLimit';
import { agentsRouter } from './routes/agents';
import { healthRouter } from './routes/health';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(apiRateLimit);

app.get('/', (_req, res) => {
  res.json({
    name: env.APP_NAME,
    status: 'running',
    gatewayUrl: env.OPENCLAW_GATEWAY_URL ?? null
  });
});

app.use('/health', healthRouter);
app.use('/agents', agentsRouter);

app.use((error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(env.API_PORT, () => {
  console.log(`${env.APP_NAME} API listening on port ${env.API_PORT}`);
});
