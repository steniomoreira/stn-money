import { ReactNode } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/utils/formatter";

interface ICardInfoProps {
  title: string;
  icon: ReactNode;
  amount: number;
  className?: string;
}

function CardInfo({ title, icon, amount, className }: ICardInfoProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <p className="text-muted-foreground text-base font-normal">{title}</p>
          {icon}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl">{formatCurrency(amount)}</p>
      </CardContent>
    </Card>
  );
}

export default CardInfo;
