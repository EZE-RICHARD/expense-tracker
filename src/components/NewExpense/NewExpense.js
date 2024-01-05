import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const SaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,// asign all enteredExpenseData to EnteredExpenseData
      id: Math.random().toString()// convert it to a string
    }
    props.onAddExpenseHandler(expenseData);
  }
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={SaveExpenseData} />
      </div>
    );
}
export default NewExpense