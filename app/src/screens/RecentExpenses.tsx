import { StyleSheet, Text, View } from 'react-native';
import React, { useContext,useEffect, useState } from 'react';
import ExpensesOutput from '../components/ExpensesOutput';
import { ExpensesContext } from '../../store/expenses-context';
import { getDateMinusDays } from '../../utils/date';
import { fetchExpenese } from '../ui/https';

function RecentExpenses() {
  const [fetchedExpenses,setFetchedExpenses] = useState([])
  
  const expensesCtx = useContext(ExpensesContext);


  useEffect(()=>{
    async function getExpenses() {
     const expenses = await fetchExpenese()
   
     setFetchedExpenses(expenses)
    }
getExpenses();
  },[])

  const recentExpenses = fetchedExpenses?.filter((expense) => {

    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return (expense.date >= date7DaysAgo) && (expense.date<=today)
  });

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod={'Last 7 days'} fallbackText="No Expenses Registered" />;
}

export default RecentExpenses;


