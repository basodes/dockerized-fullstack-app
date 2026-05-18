# Dockerized Full Stack Application

## Overview
A production-style full stack application built using:

- React frontend
- Node.js backend
- PostgreSQL database
- Docker & Docker Compose
- Nginx reverse proxy

## Architecture

Frontend → Nginx → Backend API → PostgreSQL

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend |
| Node.js | Backend |
| PostgreSQL | Database |
| Docker | Containerization |
| Docker Compose | Multi-container orchestration |
| Nginx | Reverse proxy |

## Project Structure

```bash
dockerized-fullstack-app/
│
├── frontend/
├── backend/
├── nginx/
└── docker-compose.yml
```

## Setup Instructions

### Clone Repository

```bash
git clone YOUR_REPO_URL
cd dockerized-fullstack-app
```

### Run Application

```bash
docker compose up --build
```

### Access Application

Frontend:
http://localhost

Backend:
http://localhost:5000

## Features

- Multi-container architecture
- REST API backend
- PostgreSQL integration
- Dockerized services
- Nginx reverse proxy

## Future Improvements

- Jenkins CI/CD
- Kubernetes deployment
- ArgoCD GitOps
- Terraform AWS deployment
- Monitoring with Grafana & Prometheus
