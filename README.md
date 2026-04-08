# OpenClaw Cloud Agents Platform

A production-style cloud deployment of an OpenClaw-based agent system, designed to demonstrate secure architecture, modular agent workflows, and scalable automation patterns.

This project showcases how intelligent agents can be orchestrated in a cloud environment to handle domain-specific tasks such as legal scheduling and marketing optimization.

---

## 🚀 Overview

This repository represents a secure, containerized agent platform built with a modern full-stack architecture:

* **Frontend:** Next.js dashboard for agent management and execution
* **Backend:** Node.js API layer for agent orchestration
* **Agents:** Modular AI agents with isolated workflows
* **Infrastructure:** Docker + NGINX reverse proxy for cloud deployment
* **Security:** Environment isolation, RBAC foundation, audit logging

The system is designed with scalability, security, and extensibility in mind.

---

## 🧠 Agent System

### 1. Court Dates Agent

Handles legal scheduling workflows by processing structured case data.

**Capabilities:**

* Extracts and normalizes court dates
* Generates structured summaries
* Assigns priority levels
* Prepares reminder-ready outputs

**Use Case:** Legal teams, case tracking systems, scheduling automation

---

### 2. Google Ads Agent

Supports marketing workflows by analyzing and generating campaign insights.

**Capabilities:**

* Generates ad copy variations
* Suggests campaign optimizations
* Provides budget allocation insights
* Structures campaign data for execution

**Use Case:** Marketing teams, performance optimization, campaign automation

---

## 🏗️ Architecture

```
Client (Dashboard UI)
        ↓
Next.js Frontend (apps/dashboard)
        ↓
Node.js API Layer (apps/api)
        ↓
Agent Execution Engine
        ↓
Modular Agent Workflows (agents/)
        ↓
Logs + Audit Trail
```

---

## 📁 Project Structure

```
openclaw-cloud-agents/
│
├── apps/
│   ├── dashboard/        # Next.js UI
│   └── api/              # Express API
│
├── agents/
│   ├── court-dates/
│   └── google-ads/
│
├── infrastructure/
│   ├── docker-compose.yml
│   └── nginx.conf
│
├── config/
│   ├── env.ts
│   └── permissions.ts
│
├── logs/
│   └── audit.log
│
├── .env.example
├── README.md
└── package.json
```

---

## 🔐 Security Design

Security is a core focus of this implementation:

* Environment-based configuration management
* API key-based access control
* Role-based access control (RBAC) structure
* Audit logging for all agent executions
* Reverse proxy (NGINX) for request handling
* Containerized isolation via Docker

---

## ⚙️ Getting Started

### 1. Clone Repository

```
git clone https://github.com/your-username/openclaw-cloud-agents.git
cd openclaw-cloud-agents
```

---

### 2. Setup Environment

```
cp .env.example .env
```

Update environment variables:

```
OPENAI_API_KEY=your_key_here
PORT=4000
```

---

### 3. Run with Docker

```
docker-compose up --build
```

---

### 4. Access Application

* Dashboard: http://localhost:3000
* API: http://localhost:4000

---

## 🧪 Running Agents

You can execute agents via:

* Dashboard UI (recommended for demo)
* API endpoint

### Example API Request

```
POST /run-agent
```

Payload:

```
{
  "agent": "court-dates",
  "input": {
    "case": "ABC vs XYZ",
    "date": "2026-05-10"
  }
}
```

---

## 📊 Logging & Monitoring

* All agent executions are logged in `/logs/audit.log`
* Each request includes:

  * agent name
  * timestamp
  * input payload
  * output response

---

## 🌐 Deployment

This project is designed for cloud deployment on:

* AWS (EC2 / ECS)
* DigitalOcean
* Vercel (frontend) + VPS (backend)
* Any Docker-supported infrastructure

---

## 🧩 Extending the System

To add a new agent:

1. Create a new folder in `/agents/`
2. Add:

   * `agent.ts`
   * `prompts.ts`
   * `workflow.json`
3. Register the agent in the API layer

---

## 📌 Notes

This repository is a **production-style reference implementation** demonstrating:

* secure OpenClaw cloud architecture
* modular agent system design
* real-world automation workflows

It is intended for demonstration, prototyping, and architectural reference.

---

## 🤝 License

MIT License
