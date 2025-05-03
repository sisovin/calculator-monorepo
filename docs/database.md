# Database Schema Documentation

This document provides an overview of the database schema used in the Calculator Monorepo project. The schema is defined using Prisma ORM and includes the following models:

## Models

### User
- **id**: Integer, Primary Key, Auto-increment
- **username**: String, Unique, Not Null
- **email**: String, Unique, Not Null
- **password**: String, Not Null
- **createdAt**: DateTime, Default to current timestamp
- **updatedAt**: DateTime, Updated at current timestamp
- **calculators**: Relation to Calculator model

### Calculator
- **id**: Integer, Primary Key, Auto-increment
- **name**: String, Not Null
- **category**: String, Not Null
- **createdAt**: DateTime, Default to current timestamp
- **updatedAt**: DateTime, Updated at current timestamp
- **userId**: Integer, Foreign Key to User model
- **user**: Relation to User model
- **history**: Relation to History model

### History
- **id**: Integer, Primary Key, Auto-increment
- **operation**: String, Not Null
- **operands**: String, Not Null
- **result**: Float, Not Null
- **createdAt**: DateTime, Default to current timestamp
- **calculatorId**: Integer, Foreign Key to Calculator model
- **calculator**: Relation to Calculator model

## Prisma Schema

The Prisma schema is defined in the `schema.prisma` file and includes the following models:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  username  String   @unique
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  calculators Calculator[]
}

model Calculator {
  id        Int      @id @default(autoincrement())
  name      String
  category  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  userId    Int
  user      User     @relation(fields: [userId], references: [id])
  history   History[]
}

model History {
  id            Int      @id @default(autoincrement())
  operation     String
  operands      String
  result        Float
  createdAt     DateTime @default(now())
  calculatorId  Int
  calculator    Calculator @relation(fields: [calculatorId], references: [id])
}
```

## Migrations

The initial migration script is defined in the `initial_migration.sql` file and includes the following SQL statements:

```sql
-- CreateTables
CREATE TABLE "User" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(255) UNIQUE NOT NULL,
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Calculator" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "userId" INT NOT NULL,
    FOREIGN KEY ("userId") REFERENCES "User"("id")
);

CREATE TABLE "History" (
    "id" SERIAL PRIMARY KEY,
    "operation" VARCHAR(255) NOT NULL,
    "operands" TEXT NOT NULL,
    "result" FLOAT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "calculatorId" INT NOT NULL,
    FOREIGN KEY ("calculatorId") REFERENCES "Calculator"("id")
);
```

## Seed Script

The seed script is defined in the `seed.ts` file and includes the following data:

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      username: 'user1',
      email: 'user1@example.com',
      password: 'password1',
      calculators: {
        create: [
          {
            name: 'Calculator 1',
            category: 'Math',
            history: {
              create: [
                {
                  operation: 'add',
                  operands: '1,2',
                  result: 3,
                },
                {
                  operation: 'subtract',
                  operands: '5,3',
                  result: 2,
                },
              ],
            },
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      username: 'user2',
      email: 'user2@example.com',
      password: 'password2',
      calculators: {
        create: [
          {
            name: 'Calculator 2',
            category: 'Science',
            history: {
              create: [
                {
                  operation: 'multiply',
                  operands: '2,3',
                  result: 6,
                },
                {
                  operation: 'divide',
                  operands: '10,2',
                  result: 5,
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

## Prisma Service

The Prisma service is defined in the `prisma.service.ts` file and includes the following code:

```typescript
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
```
