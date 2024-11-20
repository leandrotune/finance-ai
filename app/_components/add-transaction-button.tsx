"use client";
import { Button } from "@/app/_components/ui/button";
import { ArrowDownUpIcon } from "lucide-react";
import { useState } from "react";
import { UpsertTransactionDialog } from "./upsert-transaction-dialog";

export const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full text-sm font-bold"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar Transação
        <ArrowDownUpIcon size={16} />
      </Button>
      <UpsertTransactionDialog
        isOPen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};
