import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ExpensesOutput from '../components/ExpensesOutput'
import { ExpensesContext } from '../../store/expenses-context'

function AllExpenses(){
  const expenseCtx = useContext(ExpensesContext)
  console.log(expenseCtx)
  return (
    <ExpensesOutput expenses={expenseCtx.expenses} expensesPeriod='Total' fallbackText="No Expenses Registered"/>
  )
}

export default AllExpenses

const styles = StyleSheet.create({})