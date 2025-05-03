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
