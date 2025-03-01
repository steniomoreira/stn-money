import {
  ArrowDownUp,
  CircleArrowDown,
  CircleArrowUp,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import CardInfo from "./components/card-info";
import HeaderTransactions from "./components/header-transactions";
import TableTransactions from "./components/table-transactions";

function TransactionsPage() {
  return (
    <>
      <HeaderTransactions />

      <main>
        <div className="m-auto flex max-w-[1200px] flex-col gap-4 px-4">
          <div className="-mt-16 grid grid-cols-3 gap-8">
            <CardInfo
              title="Entradas"
              icon={<CircleArrowUp className="text-stnGreen1" />}
              amount={15000}
            />
            <CardInfo
              title="Saídas"
              icon={<CircleArrowDown className="text-stnRed1" />}
              amount={5000}
            />
            <CardInfo
              title="Total"
              icon={<ArrowDownUp />}
              amount={10000}
              className="bg-stnGreen3"
            />
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <Input placeholder="Busque uma transação" />

            <Button
              variant="outline"
              className="hover:bg-stnGreen2 hover:border-stnGreen2 border-stnGreen1 text-stnGreen1 font-semibold hover:text-white"
            >
              <Search />
              Buscar
            </Button>
          </div>

          <TableTransactions />
        </div>
      </main>
    </>
  );
}

export default TransactionsPage;
