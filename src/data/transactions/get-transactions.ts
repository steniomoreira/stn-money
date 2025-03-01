import { db } from "@/lib/prisma";

//TODO: Get userId of database after implement login feat
const USER_ID = "42ce8a57-7168-48e7-8a4e-3cd022d49867";

export async function getTransactions() {
  const transactions = await db.transaction.findMany({
    orderBy: {
      dueDate: "asc",
    },
    where: {
      userId: USER_ID,
    },
    include: {
      category: {
        select: {
          name: true,
        },
      },
    },
  });

  return transactions;
}
