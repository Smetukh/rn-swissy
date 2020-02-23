import React, { useReducer, useCallback, useState } from 'react';
import { SafeAreaView, Alert, ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Button, AsyncStorage } from 'react-native';

import ReferralLink from '../../components/referral/ReferralLink';
import Input from '../../components/UI/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SubmitButton from '../../components/UI/SubmitButton';
import Constants from 'expo-constants';
import Colors from '../../constants/Colors';

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

function Separator() {
  return <View style={styles.separator} />;
}
export default AuthScreen = ({ navigation }) => {

  const [radioButtonState, radioButtonSetState] = useState(false);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: '',
      confirm: '',
      phone: '',
    },
    inputValidities: {
      email: false,
      password: false,
      confirm: false,
      phone: false,
    },
    formIsValid: false
  });

  const signupHandler = async () => {
    const {email, phone, password, confirm} = formState.inputValues;
    const emailPair = ["email", email];
    const phonePair = phone ? ["phone", phone.match(/\d/g).join('')] : null;
    const passwordPair = ["password", password];
    const confirmPair = ["confirm", confirm];

    try {

      await AsyncStorage.multiSet([emailPair, phonePair, passwordPair, confirmPair])

      const email1 = await AsyncStorage.getItem('email');
      const phone1 = await AsyncStorage.getItem('phone');
      const password1 = await AsyncStorage.getItem('password');
      const confirm1 = await AsyncStorage.getItem('confirm');

      
      if (email !== null) {
        // We have data!!
        console.log('password!!! = ', password1);
        console.log('confirm1!!! = ', confirm1);
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
            phone
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
          <Input 
            id="confirm"
            label="Confirm"  
            keyboardType="default"  
            secureTextEntry
            required
            // minLength={8}
            autoCapitalize="none"
            errorText="Passwords do not match"
            onInputChange={inputChangeHandler}
            initialValue=""
            placeholder="Confirm your password"
            style={styles.inputContainer}
            password={formState.inputValues.password}
          />

          <ReferralLink inputChangeHandler={inputChangeHandler}/>

          <TouchableOpacity 
            style={styles.radioButtonContainer}
            onPress={() => radioButtonSetState(!radioButtonState)}>
            <View style={{
              height: 16,
              width: 16,
              borderRadius: 12,
              borderWidth: 1.5,
              borderColor: '#909090',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 17,
            }}>
              {
                radioButtonState ?
                  <View style={{
                    height: 8,
                    width: 8,
                    borderRadius: 6,
                    backgroundColor: '#FA4B41',
                  }}/>
                  : null
              }
            </View>
            <Text style={styles.radioButtonText}>
              Please confirm you agree to our &nbsp;
              {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}> */}
                <Text style={{color: 'red'}}>
                   Terms & Conditions
                </Text>
              {/* </TouchableOpacity> */}
            </Text>
          </TouchableOpacity>

          <SubmitButton title='Sign Up' />
        
          <View style={styles.bottomText}>
            <View>
              <Text>
                Already have an account?&nbsp;
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={{color: 'red'}}>
                Sign in++++++++++++++++++++++
              </Text>
            </TouchableOpacity>
          </View>
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
    width: '90%',
    height: '100%',
  },
  inputContainer: {
    height: 44,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    fontSize: 12,
    
  },
  radioButtonText: {
    alignSelf: 'center',
    marginLeft: 8,
  },
  container1: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  }
});

