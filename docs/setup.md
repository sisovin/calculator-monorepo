# Setup Instructions for Development

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14 or later)
- pnpm (v6 or later)
- Docker (for running the PostgreSQL database)

## Initial Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. **Install dependencies:**

   ```sh
   pnpm install
   ```

3. **Set up environment variables:**

   Copy the `.env.example` file to `.env` and update the values as needed.

   ```sh
   cp .env.example .env
   ```

4. **Run Docker containers:**

   Start the PostgreSQL database using Docker.

   ```sh
   docker-compose up -d
   ```

## Running the Applications

### Frontend (Next.js)

1. **Navigate to the frontend directory:**

   ```sh
   cd apps/frontend
   ```

2. **Start the development server:**

   ```sh
   pnpm dev
   ```

   The frontend application should now be running at `http://localhost:3000`.

### Backend (Nest.js)

1. **Navigate to the backend directory:**

   ```sh
   cd apps/backend
   ```

2. **Run database migrations:**

   ```sh
   pnpm prisma migrate dev
   ```

3. **Seed the database:**

   ```sh
   pnpm prisma db seed
   ```

4. **Start the development server:**

   ```sh
   pnpm start:dev
   ```

   The backend application should now be running at `http://localhost:3001`.

## Additional Commands

### Linting

To lint the codebase, run:

```sh
pnpm lint
```

### Testing

To run tests, use:

```sh
pnpm test
```

### Building

To build the applications for production, run:

```sh
pnpm build
```

## Troubleshooting

If you encounter any issues during setup or development, refer to the documentation or seek help from the community.

