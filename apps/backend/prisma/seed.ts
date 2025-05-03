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
