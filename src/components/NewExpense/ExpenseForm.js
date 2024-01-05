import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteeredTitle, setEnteredTitle] = useState("");
  const [enteeredAmount, setEnteredAmount] = useState("");
  const [enteeredDate, setEnteredDate] = useState("");
  /*   const [userInput, newUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */

  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value);
  //   /*     newUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   }); */
  // };

  // const AmountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  //   /*     newUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   }); */
  // };

  // const DateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  //   /*     newUserInput({
  //     ...userInput,
  //     enteredDate: event.target.value,
  //   }); */
  // };

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteeredTitle,
      Amount: enteeredAmount,
      date: new Date(enteeredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);//passing expenseData to the parent 
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteeredTitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteeredAmount}
            onChange={(events)=> inputChangeHandler("amount", events.target.value)}
          />
        </div>

        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteeredDate}
            onChange={(event)=>inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add new Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
