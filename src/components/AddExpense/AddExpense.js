import React from 'react';
import '../AddExpense/AddExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const AddExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    console.log(expenseData);
  }

  return (
    <div className='new_expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default AddExpense
