import { useState } from "react";
import ExpenseItem from "./components/expenseItem";
import AddNewExpense from "./components/addNewExpense";
import FilterExpenses from "./components/filterExpenses";
import ExpPercentContainer from "./components/expPercentContainer";

const ExpenseMain = () => {
  
  const [selectedYear, setSelectedYear] = useState("all");
  const [expenses, setExpenses] = useState([
    { name: "Toilet Paper", price: 94.12, date: new Date(2021, 8, 14) },
    { name: "New TV", price: 799.12, date: new Date(2023, 3, 4) },
    { name: "Car Insurance", price: 294.82, date: new Date(2020, 6, 24) },
    { name: "New Desk", price: 124.12, date: new Date(2021, 1, 4) },
    { name: "Flight(recreation)", price: 794.12, date: new Date(2022, 3, 16) },
  ]);
  
  const addNewExpense = (new_expense) => {
    setExpenses((preSta) => {
      return [new_expense, ...preSta];
    });
  };

  let filterdExpense = [];
  if (selectedYear === "all") {
    filterdExpense = [...expenses];
  } else {
    filterdExpense = expenses.filter(
      (expense) => expense.date.getFullYear().toString() === selectedYear
    );
  }

  return (
    <div>
      <AddNewExpense onAddExpense={addNewExpense} />

      <div
        className="content container w-50 rounded-3 p-3 "
        style={{ backgroundColor: "black" }}
      >
        <FilterExpenses
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />

        <ExpPercentContainer expenses={filterdExpense} />

        {filterdExpense.length === 0 && (
          <div className="text-center ">
            <h2>No Expense!</h2>{" "}
          </div>
        )}

        {filterdExpense.length > 0 &&
          filterdExpense.map((expense, idx) => {
            return <ExpenseItem key={idx} {...expense} />;
          })}
      </div>
    </div>
  );
}

export default ExpenseMain;
