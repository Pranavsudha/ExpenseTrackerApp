import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput';
import { ExpensesContext } from '../../store/expenses-context';
import { getDateMinusDays } from '../../utils/date';

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  console.log(expensesCtx);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo; 
  });

  return <ExpensesOutput expenses={recentExpenses} expensesPeriod={'Last 7 days'} />;
}

export default RecentExpenses;

const styles = StyleSheet.create({});
