# Docker Stack Example: Node + Postgres

**Features**

- **Node/Express backend**
  - Syncs local changes and autoreloads server using nodemon
  - Persists node modules in a docker volume for fast reloads and to avoid interop issues with host
- **Postgres database**
  - Optimized for fast bootup

## Running Locally for Development

Launch stack with:

	docker-compose up

Point your browser to http://localhost:3000/
