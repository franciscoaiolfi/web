"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useParams } from "next/navigation";
import { CircularProgress, Divider } from "@nextui-org/react";

import ExpenseCategories from "./ExpenseCategories";
import ExpenseItem from "./ExpenseItem";
import { MonthChanger } from "./MonthChanger";
import { calculateTotal, formatMonetaryValue } from "@/utils";

export function ExpensesTab({
  expenses,
  monthlyCabinetExpenses,
  openExpenseHandler,
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState({
    numericMonth: "",
    fullMonth: "",
    year: "",
  });

  const { name: federalDeputyNameAndId } = useParams();
  const routeQueryParams = useSearchParams();

  useEffect(() => {
    setIsLoading(false);
  }, [federalDeputyNameAndId, routeQueryParams]);

  const handleDateChange = (newDate) => {
    setIsLoading(true);
    setCurrentDate(newDate);
  };

  return (
    <>
      {expenses?.length > 0 ? (
        <>
          <p className="mx-4 text-lg text-center mt-5">Gastou</p>
          <div className="flex items-center justify-center ">
            <p className="text-4xl font-bold">
              {formatMonetaryValue(calculateTotal(expenses, "valorLiquido"))}
            </p>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center mt-5">
          <p className="text-4xl font-bold">{formatMonetaryValue(0)}</p>
        </div>
      )}

      <MonthChanger changeDateHandler={handleDateChange} />
      <Divider className="my-5" />
      {expenses?.length === 0 && !isLoading && (
        <small className="text-center">
          Sem gastos do parlamentar nesse mês
        </small>
      )}

      {isLoading && (
        <div
          className="flex flex-1 flex-col items-center justify-center mt-8"
          role="status"
        >
          <CircularProgress color="default" aria-label="Loading..." size="lg" />

          <h2 className="text-1xl mb-4">
            Estamos buscando despesas para o mês...
          </h2>
        </div>
      )}

      {expenses?.length > 0 && !isLoading && (
        <>
          <ExpenseCategories expenses={expenses} />
          <Divider className="my-5" />
          {monthlyCabinetExpenses && (
            <div
              className="bg-yellow-100 mb-5 border-l-4 border-yellow-100 text-yellow-700 p-4 rounded-lg"
              role="alert"
            >
              Além da cota parlamentar foi utilizado{" "}
              <i>R$ {monthlyCabinetExpenses.expense_amount}</i> de{" "}
              <i> R$ {monthlyCabinetExpenses.available_amount}</i> disponível da
              verba de gabinete.
            </div>
          )}
          <ol className="relative border-l border-gray-200 dark:border-gray-700 ">
            {expenses
              .sort(
                (a, b) => new Date(b.dataDocumento) - new Date(a.dataDocumento),
              )
              .map((expense) => {
                return (
                  <ExpenseItem
                    key={expense.id}
                    value={expense.valorLiquido}
                    date={expense.dataDocumento}
                    type={expense.tipoDespesa}
                    supplier={expense.nomeFornecedor}
                    supplierId={expense.cnpjCpfFornecedor}
                    document={expense.urlDocumento}
                    handleOpen={openExpenseHandler}
                  />
                );
              })}
          </ol>
        </>
      )}
    </>
  );
}
