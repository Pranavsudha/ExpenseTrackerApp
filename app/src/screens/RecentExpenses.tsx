import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput'

function 
RecentExpenses(){
  return (
   <ExpensesOutput expensesPeriod={"Last 7 days"} expenses={undefined}/>
  )
}

export default RecentExpenses

const styles = StyleSheet.create({})