function TableTransactions() {
  return (
    <table className="border-separate border-spacing-y-3">
      <tbody className="">
        <tr className="bg-stnGray5 h-14">
          <td className="rounded-bl-sm rounded-tl-sm pl-8 pr-4">
            Desenvovimento de site
          </td>
          <td className="text-stnGreen1 w-[130px] px-4">12000</td>
          <td className="px-4">Venda</td>
          <td className="w-[100px] rounded-br-sm rounded-tr-sm pl-4 pr-8">
            01/03/2025
          </td>
        </tr>
        <tr className="bg-stnGray5 h-14">
          <td className="rounded-bl-sm rounded-tl-sm pl-8 pr-4">
            Aluguel do apartamento
          </td>
          <td className="text-stnRed1 w-[130px] px-4">- 12000</td>
          <td className="px-4">Casa</td>
          <td className="w-[100px] rounded-br-sm rounded-tr-sm pl-4 pr-8">
            10/03/2025
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default TableTransactions;
