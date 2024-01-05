import ExpenseItems from "./ExpenseItems";
// import "./Expense.css";
import "./Expense.css";
// import Container from "./UI/Container";
import Container from "../UI/Container";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
// import NewExpense from "../NewExpense/NewExpense";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("items");
  // const addExpenseHandler = (expense) => {
  //   console.log("In App.js");
  //   console.log(expense);
  // };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Container className="expense">
      {/* <NewExpense onAddExpenseHandler={addExpenseHandler} /> */}
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expenses) => (
        <ExpenseItems
          title={expenses.title}
          amount={expenses.Amount}
          date={expenses.date}
        />
      ))}
      ;
    </Container>
  );
};
export default Expenses;
