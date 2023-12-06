import { StyleSheet, Text, View, } from 'react-native'
import React,{useLayoutEffect} from 'react'
import {useNavigation} from "@react-navigation/native"
import { GlobalStyles } from '../../../constants/styles'
import IconButton from '../ui/Iconbutton'

function ManageExpenses({route}){
  const navigation = useNavigation()
  const editedExpenseID = route.params?.expenseID
  const isEditing = !!editedExpenseID; 
  console.log(editedExpenseID)

useLayoutEffect(() => {
  navigation?.setOptions({
    title: isEditing ? 'Edit Expenses' : 'Add Expenses',
  });
}, [navigation, isEditing]);

function deleteExpenseHandler(){

}


return (
  <View style={styles.container}>
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
    backgroundColor:GlobalStyles.colors.primary500
  },
  deleteContainer:{
    marginTop:16,
    paddingTop:8,
    borderTopWidth:2,
    borderTopColor:GlobalStyles.colors.primary200,
    alignItems:"center"
  }
})

