import { StyleSheet, Text, View,FlatList} from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'
import { GlobalStyles } from '../../../constants/styles'


function ExpensesOutput({expenses,expensesPeriod}){
  return (
    <View style={styles.container}>
     <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
     <ExpensesList expenses={expenses} />
    </View>
  )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:GlobalStyles.colors.primary700,
        paddingHorizontal:24,
        paddingTop:24,
        paddingBottom:0
    }
})

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