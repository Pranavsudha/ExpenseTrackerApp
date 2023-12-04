import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function ExpensesSummary({expenses,periodName}){
    const expenseSum = expenses.reduce((sum,expense)=>{
        return sum + expense.amount
    },0); //jS method that allows to combine multiple values from array
  return (
    <View>
     <Text>{periodName}</Text>
     <Text>${expenseSum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary

const styles = StyleSheet.create({})