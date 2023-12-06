import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../../constants/styles';
import Button from '../ui/Button';
import { ExpensesContext } from '../../store/expenses-context';
import IconButton from '../ui/Iconbutton';

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

  function confirmHandler() {
    if (!isEditing) {
      expensesContext.addExpense({
        description: "Test",
        amount: 19.99,
        date: new Date('2022-05-20'),
      });
    } else {
      expensesContext.updateExpense(editedExpenseID, {
        description: "Test",
        amount: 19.99,
        date: new Date('2022-05-20'),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={cancelHandler}>
          Cancel
        </Button>
        <Button
          style={styles.button}
          mode='flat'
          onPress={confirmHandler}
        >
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
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
