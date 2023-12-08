import { View, StyleSheet, Text, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../../ui/Button";
import { getFormattedDate } from "../../../utils/date";
import { GlobalStyles } from "../../../../constants/styles";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: !!defaultValues
    },

    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: !!defaultValues
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: !!defaultValues
    },
  });
  console.log(defaultValues?.date.toISOString().slice(0, 10));
  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInputs((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: {value:enteredValue,isValid:true}, //dynamically accessed property
      };
    });
  }



  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs?.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() === "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
    //   Alert.alert("Invalid Input", "Please Check Your Input Values");
    setInputs((curInputs)=>{
        return {
            amount: {value:curInputs.amount.value, isValid:amountIsValid},
            date: {value:curInputs.date.value, isValid:dateIsValid},
           description: {
            value:curInputs.description.value, 
            isValid:descriptionIsValid
        }
        }
    })
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid = !inputs.amount.isValid || 
  !inputs.date.isValid || 
  !inputs.description.isValid



  return (
    <View style={styles.form}>
      <Text style={styles.expenseTitle}>Your Expenses</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label={"Amount"}
          invalid={!inputs?.amount?.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputs?.amount.value,
          }}
        />
        <Input
          style={styles.rowInput}
          label={"Date"}
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputs.date.value,
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
          }}
        />
      </View>
      <Input
        label={"Description"}
        invalid={!inputs.amount.isValid}
        textInputConfig={{
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputs.description.value,
          multiline: true, //prop to add number of line uses can type,
          // autoCapitalize:'sentences',
          // autoCorrect:false // default is true
        }}
      />
      {formIsInvalid && (<Text style={styles.errorText}>Invalid Input Values - please check your entered data!</Text>)}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} mode="flat" onPress={submitHandler}>
          {submitButtonLabel.toString()}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  expenseTitle: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 5,
  },
  errorText:{
textAlign:"center",
color:GlobalStyles.colors.error500,
margin:8

  }
});
