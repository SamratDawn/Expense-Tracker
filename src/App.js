import { useState } from "react";
import "./App.css";
import Expenses from './Components/Expenses/Expenses'
import NewExpense from "./Components/NewExpense/NewExpense";

const dummyExpenses = [
  
];

const App = () => {

  const [expenses,setExpenses]=useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense,...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      {/*Over here the data is generated*/}

      <Expenses items={expenses} />
      {/*Over here the data is used and forecasted*/}
    </div>
  );
}

export default App;