import React, { useReducer, useCallback } from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Button } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';

import Input from '../../components/UI/Input';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};

export default AuthScreen = ({ navigation }) => {

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
      phone: '',
    },
    inputValidities: {
      email: false,
      password: false,
      phone: false,
    },
    formIsValid: false
  });

  const signupHandler = async () => {
    const {email, phone, password} = formState.inputValues;
    const emailPair = ["email", email]
    const phonePair = ["phone", phone]
    const passwordPair = ["password", password]

    try {

      await AsyncStorage.multiSet([emailPair, phonePair, passwordPair])

      const email1 = await AsyncStorage.getItem('email');
      const phone1 = await AsyncStorage.getItem('phone');
      const password1 = await AsyncStorage.getItem('password');

      
      if (email !== null) {
        // We have data!!
        console.log('password!!! = ', password1);
        console.log('email!!! = ', email1);
        console.log('phone1!!! = ', phone1);
      }
    } catch (error) {
      console.log('error = ', error);
      // Error saving data
    }
  };
  
  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      console.log('inputValue = ', inputValue);
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView 
      behavior='padding'
      keyboardVerticalOffset={50}
      style={styles.container}
      >
      {/* <Text>Auth +++++ up App.js to start working on your app!</Text> */}
      <View style={styles.authContainer}>
        <ScrollView>
          <Input 
            id="email"
            label="E-mail"  
            keyboardType="email-address"  
            required
            email
            autoCapitalize="none"
            errorText="Please enter a valid email address"
            // onValueChange={() => {}}
            onInputChange={inputChangeHandler}
            initialValue=""
            placeholder="Enter your name"
            style={styles.inputContainer}
          />
          <Input 
            id="phone"
            label="Phone"  
            keyboardType="decimal-pad"  
            // secureTextEntry
            required
            // minLength={8}
            autoCapitalize="none"
            errorText="Please enter a valid phone number"
            onInputChange={inputChangeHandler}
            initialValue=""
            placeholder="Enter your phone number"
            style={styles.inputContainer}
          />
          <Input 
            id="password"
            label="Password"  
            keyboardType="default"  
            secureTextEntry
            required
            minLength={8}
            autoCapitalize="none"
            errorText="Please enter a valid password"
            onInputChange={inputChangeHandler}
            initialValue=""
            placeholder="Enter your password"
            style={styles.inputContainer}
          />
          <Button title="Sign up" color="red" onPress={signupHandler} />
          <Button title="Sign up" color="green" onPress={signupHandler} />
          <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
          />
        </ScrollView>

        
      </View>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  authContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignContent: 'center',
    // flexDirection: 'column',
    width: '90%',
    // maxWidth: 300,
    height: '100%',
    maxHeight: 400,
    // padding: 20
  },
  inputContainer: {
    height: 44,
    // color: 'red',
    // borderColor: 'gray'
  },
});

