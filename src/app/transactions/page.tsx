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

function TransactionsPage() {
  return (
    <>
      <HeaderTransactions />

      <main>
        <div className="m-auto flex max-w-[1200px] flex-col gap-8">
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

          <div className="flex items-center justify-between gap-4">
            <Input
              placeholder="Busque uma transação"
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
            />

            <Button
              variant="outline"
              className="border-green_stn font-semibold text-green_stn hover:bg-green_stn"
            >
              <Search />
              Buscar
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default TransactionsPage;
