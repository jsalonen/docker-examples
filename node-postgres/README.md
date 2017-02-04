# Docker Stack Example: Node + Postgres

**Features**

- **Node/Express backend container**
  - Syncs local changes and autoreload using nodemon
  - Persists node modules in a docker volume for fast reloads and to avoid interop issues with host
- **Postgres container**
  - Optimized for fast bootup

## Running Locally for Development

Launch stack with:

	docker-compose up

Point your browser to http://localhost:3000/
