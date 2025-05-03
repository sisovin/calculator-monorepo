# Calculator Monorepo

## Root Setup
- Initialize monorepo with `pnpm init`
- Create `pnpm-workspace.yaml` with workspace configuration
- Add Turborepo (`pnpm add -Dw turbo`)
- Create `turbo.json` with pipeline configuration
- Set up shared `README.md` with project documentation

## Packages Setup
- Create `packages/types` with shared TypeScript types
- Create `packages/config` with shared configuration
- Create `packages/schemas` with Zod validation schemas
- Create `packages/database` with Prisma shared types

## Frontend (Next.js)
### Initial Setup
- Create Next.js app with TypeScript and Tailwind
- Initialize shadcn-ui components
- Set up ESLint and Prettier configuration
- Configure path aliases in `tsconfig.json`

### Core Components
- Implement `Header` component
- Implement `Footer` component
- Implement `Search` component
- Set up theme provider

### Calculator Components
- Create `CalculatorCard` component
- Create `CalculatorCategory` component
- Create `CalculatorForm` component with shadcn-ui
- Implement form validation with Zod

### Pages Structure
- Set up main `(main)` layout group
  - Implement homepage (`page.tsx`)
  - Create calculators landing page
  - Set up category pages (`[category]/page.tsx`)
  - Implement calculator pages (`[category]/[calculator]/page.tsx`)
- Set up `(auth)` layout group for authentication

### Configuration
- Create `calculator-config.ts` with all calculator metadata
- Set up `site.ts` with site-wide configuration
- Configure global styles (`globals.css`)

### Utilities
- Create custom hooks in `hooks/` directory
- Set up utility functions in `lib/`
- Implement API route handlers if needed

## Backend (Nest.js)
### Initial Setup
- Create Nest.js application
- Configure Prisma ORM
- Set up PostgreSQL database connection
- Configure Argon2 for password hashing
- Set up global validation pipes

### Modules
- Implement `AuthModule`
  - Create auth controller
  - Implement auth service
  - Set up JWT strategy
  - Create DTOs for auth endpoints
- Implement `CalculatorsModule`
  - Create calculator controller
  - Implement calculator service with all calculation logic
  - Create DTOs for calculator inputs
- Implement `UsersModule`
  - Create user controller
  - Implement user service
  - Set up user entity and DTOs

### Database
- Define Prisma schema (`schema.prisma`)
- Implement `PrismaService`
- Set up database migrations
- Create seed script for initial data

### Testing
- Set up E2E test configuration
- Write tests for auth endpoints
- Write tests for calculator endpoints

## Shared Configuration
- Set up shared types for calculator inputs/results
- Configure shared validation schemas
- Implement shared database types
- Set up consistent ESLint config across packages

## Deployment Setup
- Configure Dockerfiles for frontend and backend
- Configure environment variables
- Prepare production build scripts

## Documentation
- Document API endpoints
- Create component documentation
- Write setup instructions for development
- Document database schema

## Additional Features
- Implement calculator history saving
- Add user favorites functionality
- Set up analytics tracking
- Implement dark mode toggle
