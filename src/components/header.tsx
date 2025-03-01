import Image from "next/image";

import { Button } from "./ui/button";

function Header() {
  return (
    <header className="h-[212px] bg-black p-4 pt-8">
      <div className="m-auto flex max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={"/logo.svg"} alt="STN Money" width={40} height={38} />
          <h1 className="text-2xl font-bold">STN Money</h1>
        </div>
        <Button>Nova transação</Button>
      </div>
    </header>
  );
}

export default Header;
