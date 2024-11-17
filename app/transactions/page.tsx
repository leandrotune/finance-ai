import { db } from "../_lib/prisma";

import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { TransactionsColumns } from "./_columns/index";

const TransactionsPage = async () => {
  // acessar as transactions do banco de dados
  const transactions = await db.transaction.findMany({});

  return (
    <div className="space-y-6 p-6">
      {/* titulo e botão*/}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>

        <Button className="rounded-full text-sm font-bold">
          Adicionar Transação
          <ArrowDownUpIcon size={16} />
        </Button>
      </div>
      <DataTable columns={TransactionsColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
