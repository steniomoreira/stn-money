import { getTransactions } from "@/data/transactions/get-transactions";
import { formatCurrency, formatDate } from "@/utils/formatter";

const EXPENSE = "EXPENSE";

async function TableTransactions() {
  const transactons = await getTransactions();

  const isExpense = (type: string) => type === EXPENSE;

  return (
    <table className="border-separate border-spacing-y-3">
      <tbody className="">
        {transactons.map((transaction) => (
          <tr key={transaction.id} className="bg-stnGray5 h-14">
            <td className="rounded-bl-sm rounded-tl-sm pl-8 pr-4">
              {transaction.description}
            </td>
            <td
              className={`${isExpense(transaction.type) ? "text-stnRed1" : "text-stnGreen1"} w-[130px] px-4 text-right`}
            >
              {isExpense(transaction.type) && "- "}
              {formatCurrency(transaction.amount)}
            </td>
            <td className="px-4">{transaction.category.name}</td>
            <td className="w-[100px] rounded-br-sm rounded-tr-sm pl-4 pr-8">
              {formatDate(transaction.dueDate)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableTransactions;
