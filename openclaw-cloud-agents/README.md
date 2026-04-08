# OpenClaw Cloud Agents

Production-style reference implementation for a secure OpenClaw cloud deployment with two purpose-built agents:

- **Court Dates Agent** for legal deadline intake, summary generation, and reminder orchestration
- **Google Ads Agent** for campaign review, budget pacing insights, and ad copy recommendations

This repository is designed to look and behave like a serious client-facing engineering project: structured services, hardened configuration, audit logging, role-aware API responses, and a polished operations dashboard.

## Why this repo exists

OpenClaw is a self-hosted gateway designed to run on your own infrastructure, connect to multiple channels, and route requests to persistent AI assistants. Its own security guidance emphasizes a **single trusted operator boundary per gateway** and recommends separating trust boundaries across hosts or credentials when adversarial users are involved. The project documentation also provides a GCP Docker-based VM deployment path with persistent state and safe restart behavior.

This implementation follows that direction with:

- isolated API and dashboard services
- explicit environment-based configuration
- reverse-proxy routing
- rate limiting and basic auth token patterns
- agent-specific workflow definitions
- audit logging surfaces for operational review

## Architecture

```text
┌────────────────────┐
│  Next.js Dashboard │
│  agent console     │
└─────────┬──────────┘
          │ REST
┌─────────▼──────────┐
│  Node.js API       │
│  auth + audit      │
│  agent execution   │
└──────┬───────┬─────┘
       │       │
       │       ├───────────────┐
       │                       │
┌──────▼───────┐      ┌────────▼─────────┐
│ Court Dates  │      │ Google Ads Agent │
│ workflow     │      │ workflow         │
└──────────────┘      └──────────────────┘
```

## Repository structure

```text
openclaw-cloud-agents/
├── apps/
│   ├── api/                 # Express + TypeScript API
│   └── dashboard/           # Next.js operations dashboard
├── agents/
│   ├── court-dates/         # prompts + workflow definition
│   └── google-ads/          # prompts + workflow definition
├── infrastructure/
│   └── nginx/               # reverse proxy configuration
├── docker-compose.yml
├── .env.example
└── README.md
```

## Local development

### 1) Install dependencies

```bash
npm install
cp .env.example .env
```

### 2) Run both services

```bash
npm run dev
```

- Dashboard: `http://localhost:3000`
- API: `http://localhost:8080`
- Health check: `http://localhost:8080/health`

### 3) Docker option

```bash
docker compose up --build
```

## Agents included

### Court Dates Agent

Handles intake for hearing-related case data and produces:

- case snapshot summaries
- hearing date reminders
- priority flags for urgent deadlines
- draft follow-up actions for internal teams

### Google Ads Agent

Handles ad account and campaign review workflows and returns:

- pacing observations
- budget and CTR commentary
- ad copy suggestions
- approval-ready action summaries

## Security posture

OpenClaw's current documentation is explicit that one gateway should represent one trust boundary, and that mixed-trust or adversarial usage should be isolated across separate credentials or hosts.

This repo reflects that posture with:

- service separation between UI and execution API
- reverse proxy boundary via NGINX
- environment-driven secrets
- request rate limiting middleware
- audit event logging for agent runs
- controlled mock execution paths for safe demos

## Deployment notes

OpenClaw's install docs for GCP describe a persistent Docker-based VM setup with durable local state and SSH tunnel access to the control UI. That pattern maps cleanly to this repo when you want a simple single-VM deployment for client demos or internal staging.

Recommended production path:

1. provision a dedicated VM per trust boundary
2. store secrets in a managed secret store
3. terminate TLS at NGINX or your cloud load balancer
4. place the API behind an allowlist or identity-aware proxy
5. send audit logs to centralized logging

## Tech stack

- **Dashboard:** Next.js 15, React 19, TypeScript
- **API:** Express, TypeScript
- **Infra:** Docker Compose, NGINX
- **Config:** environment variables and typed config helpers

## Suggested client positioning

Use this repo as:

> A secure, production-style OpenClaw cloud reference implementation with custom agent workflows for legal scheduling and Google Ads operations.

That framing is accurate, professional, and easy to explain during a screen share.
