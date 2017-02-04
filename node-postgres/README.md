# Docker Stack Example: Node + Postgres

**Features**

- **Node/Express backend**
  - Syncs local changes and autoreloads server using nodemon
  - Persists node modules in a docker volume for fast reloads and to avoid interop issues with host
- **Postgres database**
  - Configured for fast bootup for development
  - Database setup using volume mounted docker-entrypoint-initdb.d

## Running Locally for Development

Launch stack with:

	docker-compose up

Point your browser to http://localhost:3000/
