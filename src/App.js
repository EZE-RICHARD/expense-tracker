import React, {useState} from 'react';
import './App.css';
import Expenses from "./components/Expenses/Expenses"
import NewExpense from './components/NewExpense/NewExpense';
    const DummyData = [
      {
        title: "Porche",
        Amount: 49.34,
        date: new Date(2034, 7, 14),
      },
      {
        title: "Lenovo ThinkPad",
        Amount: 200000,
        date: new Date(2023, 8, 14),
      },
      {
        title: "Router",
        Amount: 450,
        date: new Date(2023, 12, 14),
      },
    ];



function App() {
 const [expense, SetNewItem] = useState(DummyData);

  const AddExpenseHandler = expense => {
    SetNewItem(prevState => {
      return[expense, ...prevState]
    })
   
}
  return (
    <div>
      <NewExpense onAddExpenseHandler={AddExpenseHandler} />
      {/* <NewExpense /> */}
      <Expenses items={expense} />
      {/* <Expenses /> */}
    </div>
  );

  // <Expenses items={expenses} /> assuming the expense array was in the app.js

  
}

export default App;
