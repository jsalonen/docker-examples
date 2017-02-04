# Docker Stack Example: Node + Postgres

**Features**

- **Node/Express backend container:**
  - Sync local changes and autoreload using nodemon
  - Node modules are persisted as docker volume for fast reloads and to avoid interop issues with host
- **Postgress container:**
  - Optimized for fast bootup

## Running Locally for Development

Launch stack with:

	docker-compose up

Point your browser to http://localhost:3000/
