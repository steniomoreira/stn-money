import Image from "next/image";

import { Button } from "@/components/ui/button";

function HeaderTransactions() {
  return (
    <header className="h-[212px] bg-black p-4 pt-8">
      <div className="m-auto flex max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-9">
            <Image
              src="/logo.svg"
              alt="STN Money"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold">STN Money</h1>
        </div>
        <Button>Nova transação</Button>
      </div>
    </header>
  );
}

export default HeaderTransactions;
