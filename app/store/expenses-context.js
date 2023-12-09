import React, { createContext, useReducer } from 'react';

const DUMMY_EXPENSES =[
    {
        id:'e1',
        description:'A pair of shoes',
        amount:59.99,
        date:new Date('2021-11-19')
    },
    {
        id:'e2',
        description:'A pair of slippers',
        amount:69.99,
        date:new Date('2022-11-19')
    },
    {
        id:'e3',
        description:'Some Bananas',
        amount:29.99,
        date:new Date('2023-12-19')
    },
    {
        id:'e4',
        description:'A book',
        amount:199.99,
        date:new Date('2023-12-19')
    },
    {
        id:'e5',
        description:'Some Bananas Book',
        amount:99.99,
        date:new Date('2023-12-06')
    },
    {
        id:'e6',
        description:'A pair of trousers',
        amount:19.99,
        date:new Date('2023-12-06')
    },
    {
        id:'e7',
        description:'Another book',
        amount:19.99,
        date:new Date('2023-12-06')
    },
    {
        id:'e8',
        description:'Another book book',
        amount:9.99,
        date:new Date('2023-12-31')
    }
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  setExpense:(expenses)=>{},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload }, ...state];
      case 'SET':
        return action.payload
    case 'UPDATE': // Fixed the action type
      const updateableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updateableExpense = state[updateableExpenseIndex];
      const updatedItem = { ...updateableExpense, ...action.payload.data };
      const updatedExpense = [...state];
      updatedExpense[updateableExpenseIndex] = updatedItem;
      return updatedExpense;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  function setExpenses(expenses){
    dispatch({ type: 'SET', payload:expenses});
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
