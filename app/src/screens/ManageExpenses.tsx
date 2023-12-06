import { StyleSheet, Text, View, } from 'react-native'
import React,{useLayoutEffect} from 'react'
import {useNavigation} from "@react-navigation/native"
import { GlobalStyles } from '../../../constants/styles'
import IconButton from '../ui/Iconbutton'
import Button from '../ui/Button'

function ManageExpenses({route}){
  const navigation = useNavigation()
  const editedExpenseID = route.params?.expenseID
  const isEditing = !!editedExpenseID;  //In simpler terms, this expression is used to ensure that the variable isEditing is always a boolean value. If editedExpenseID is truthy, isEditing will be true; if editedExpenseID is falsy, isEditing will be false.
  console.log(editedExpenseID)

useLayoutEffect(() => {
  navigation?.setOptions({
    title: isEditing ? 'Edit Expenses' : 'Add Expenses',
  });
}, [navigation, isEditing]);

function deleteExpenseHandler () {
  navigation.goBack();
}


function cancelHandler () {
navigation.goBack();
}

function confirmHandler () {
  navigation.goBack();
}
return (
  <View style={styles.container}>
    <View style={styles.buttons}>
      <Button style={styles.button} mode='flat' onPress={cancelHandler}>Cancel</Button>
      <Button style={styles.button} mode='flat' onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
    </View>
    {isEditing && (
      <View style={styles.deleteContainer}>
        <IconButton
          icon='trash'
          color={GlobalStyles.colors.error500}
          size={36}
          onPress={deleteExpenseHandler} // Pass the function to be executed on press
        />
      </View>
    )}
  </View>
);
}


export default  ManageExpenses

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:24,
    backgroundColor:GlobalStyles.colors.primary700
  },
  buttons:{
    flexDirection:'row',
    justifyContent:"center",
    alignItems:"center",
  },
  deleteContainer:{
    marginTop:16,
    paddingTop:8,
    borderTopWidth:2,
    borderTopColor:GlobalStyles.colors.primary200,
    alignItems:"center"
  },
  button:{
    minWidth:120,
    marginHorizontal:5
  }
})

