import { StyleSheet, Text, View,FlatList} from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'


function ExpensesOutput({expenses,expensesPeriod}){
  return (
    <View>
     <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
     <ExpensesList />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({})

const DUMMY_EXPENSES =[
    {
        id:'e1',
        description:'A pair of shoes',
        amount:59.99,
        date:new Date('2021-12-19')
    },
    {
        id:'e2',
        description:'A pair of slippers',
        amount:69.99,
        date:new Date('2022-12-19')
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
        amount:99.99,
        date:new Date('2023-12-19')
    }
]