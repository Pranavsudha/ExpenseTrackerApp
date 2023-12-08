import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../../../constants/styles'

function Input({label,style,textInputConfig}){

    let inputStyles=[styles.input];

    //Check if both are truthy
    if(textInputConfig && textInputConfig.multiline){
      inputStyles.push(styles.inputMultiLine)
    }

  return (
    <View style={[styles.inputContainer,style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
      style={inputStyles}
      {...textInputConfig}
      />
    </View>
  )
}

//Take a generic prop like textInputConfig and spread it in textinput, and we then expect textInputConfig
// will be an object and property names used in that object should match the prop names supported by textInput
// and the values for these properties then are simply accepted by propswe can set on textInput. This allows 
// us to basically merge all the configuration we wanna apply to the textInput into one object. And in our 
//custom component we spread all props onto the textInput



export default Input

const styles = StyleSheet.create({
    inputContainer:{
    marginHorizontal:4,
    marginVertical:8,

    },
    label:{
     fontSize:12,
     color:GlobalStyles.colors.primary100,
     marginBottom:4

    },
    input:{
    backgroundColor:GlobalStyles.colors.primary100,
    padding:10,
    borderRadius:6,
    fontSize:18
    },
    inputMultiLine:{
     minHeight:100,
     textAlignVertical:"top"
    }
})