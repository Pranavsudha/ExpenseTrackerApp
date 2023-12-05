import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

function renderExpensesItem(itemData){
return <Text>{itemData.item.description}</Text>
}

function ExpensesList({expenses}){
  return (
   <FlatList
   data={expenses}
   renderItem={renderExpensesItem}
   keyExtractor={(item)=>item.id} // unique key here
   />
  )
}

export default ExpensesList

const styles = StyleSheet.create({})