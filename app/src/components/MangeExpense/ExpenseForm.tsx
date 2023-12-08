import {View,StyleSheet,Text} from "react-native"
import Input from "./Input"
import { useState } from "react"
import Button from "../../ui/Button"





function ExpenseForm({onCancel,onSubmit,submitButtonLabel}){
    const [inputValue,setInputValues] = useState({
        amount:'',
        date:'',
        description:''
    })
function inputChangeHandler(inputIdentifier,enteredValue){
setInputValues((curInputValues)=>{
    return {
        ...curInputValues,
        [inputIdentifier]: enteredValue //dynamically accessed property
    }
})
}

function submitHandler(){

}

    return <View style={styles.form}>
  <Text style={styles.expenseTitle}>Your Expenses</Text>
        <View style={styles.inputRow}>
        <Input
        style={styles.rowInput}
         label={"Amount"} textInputConfig={{
        keyboardType:'decimal-pad',
        onChangeText:inputChangeHandler.bind(this,'amount'),
        placeholder :'YYYY-MM-DD',
        maxLength:10,
        value:inputValue?.amount
    }}/>
    <Input 
        style={styles.rowInput}
        label={"Date"} textInputConfig={{
        keyboardType:'decimal-pad',
        onChangeText:inputChangeHandler.bind(this,'date'), 
        value:inputValue?.date,
        placeholder :'YYYY-MM-DD',
        maxLength:10
    }}/>

        </View>
        <Input label={"Description"} 
        textInputConfig={{
        onChangeText:inputChangeHandler.bind(this,'description'), 
        value:inputValue?.description,
        multiline:true, //prop to add number of line uses can type,
    // autoCapitalize:'sentences',
    // autoCorrect:false // default is true

    }}/>
     <View style={styles.buttons}>
        <Button style={styles.button} mode='flat' onPress={onCancel}>
          Cancel
        </Button>
        <Button
          style={styles.button}
          mode='flat'
          onPress={submitHandler}
        >
          {submitButtonLabel.toString()}
        </Button>
      </View>
    </View>     
}

export default ExpenseForm

const styles = StyleSheet.create({
    form:{
marginTop:80
    },
inputRow:{
    flexDirection:"row",
    justifyContent:"space-between"
},
rowInput:{
    flex:1
},
expenseTitle:{
textAlign:"center",
fontSize:24,
fontWeight:"bold",
color:"white",
marginVertical:20
},
buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 5,
  },
})

function setInputValue() {
    throw new Error("Function not implemented.")
}
