import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput'

function ManageExpenses(){
  return (
   <ExpensesOutput expensesPeriod={"Last 7 days"} expenses={undefined}/>
  )
}

export default ManageExpenses

const styles = StyleSheet.create({})