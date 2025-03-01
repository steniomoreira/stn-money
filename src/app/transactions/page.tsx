import { ArrowDownUp, CircleArrowDown, CircleArrowUp } from "lucide-react";

import CardInfo from "./components/card-info";
import HeaderTransactions from "./components/header-transactions";

function TransactionsPage() {
  return (
    <>
      <HeaderTransactions />

      <main>
        <div className="m-auto flex max-w-[1200px] flex-col">
          <div className="-mt-16 grid grid-cols-3 gap-8">
            <CardInfo
              title="Entradas"
              icon={<CircleArrowUp className="text-green_stn" />}
              amount={15000}
            />
            <CardInfo
              title="Saídas"
              icon={<CircleArrowDown className="text-rose-500" />}
              amount={5000}
            />
            <CardInfo
              title="Total"
              icon={<ArrowDownUp />}
              amount={10000}
              className="bg-green_stn"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default TransactionsPage;
