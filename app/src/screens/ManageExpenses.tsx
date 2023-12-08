import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../../constants/styles';
import Button from '../ui/Button';
import { ExpensesContext } from '../../store/expenses-context';
import IconButton from '../ui/Iconbutton';
import ExpenseForm from '../components/MangeExpense/ExpenseForm';
import { storeExpenese } from '../ui/https';

function ManageExpenses({ route }) {
  const expensesContext = useContext(ExpensesContext);
  const navigation = useNavigation();
  const editedExpenseID = route.params?.expenseID;
  const isEditing = !!editedExpenseID;

  useLayoutEffect(() => {
    navigation?.setOptions({
      title: isEditing ? 'Edit Expenses' : 'Add Expenses',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
  
    expensesContext.deleteExpense(editedExpenseID);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (isEditing) {
      expensesContext.updateExpense(editedExpenseID, expenseData);
    } else {
      storeExpenese(expenseData); //forward data
      // When adding a new expense, there's no need for editedExpenseID
      expensesContext.addExpense(expenseData);
    }
    navigation.goBack();
  }

  const selectedExpense = isEditing
    ? expensesContext.expenses.find((expense) => expense?.id === editedExpenseID)
    : null;


  
  return (
    <View style={styles.container}>
      <ExpenseForm 
      submitButtonLabel={isEditing ? 'Update' : 'Add'}
      onSubmit={confirmHandler}
       onCancel={cancelHandler}
       defaultValues={selectedExpense}
       />
     
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 5,
  },
});
