import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput'

function AllExpenses(){
  return (
    <ExpensesOutput expenses={undefined} expensesPeriod='Total'/>
  )
}

export default AllExpenses

const styles = StyleSheet.create({})