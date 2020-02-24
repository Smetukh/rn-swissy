import React, { useReducer, useCallback } from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, AsyncStorage } from 'react-native';

import ReferralLink from '../../components/referral/ReferralLink';
import RadioButton from '../../components/RadioButton';
import Input from '../../components/UI/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SubmitButton from '../../components/UI/SubmitButton';


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

  

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      name: '',
      password: '',
      confirm: '',
      referral: '',
    },
    inputValidities: {
      name: false,
      password: false,
      confirm: false,
      referral: false,
    },
    formIsValid: false
  });

  const signupHandler = async () => {
    if (!formState.formIsValid) {
      return
    }
    const {name, phone, password, referral} = formState.inputValues;

    const phoneNumber = phone.match(/\d/g).join('').toString();
    const inputObject = {name, password, referral}

    console.log('phoneNumber = ', typeof phoneNumber)
    console.log('inputObject = ', typeof JSON.stringify(inputObject))
    try {


      await AsyncStorage.setItem(phoneNumber, JSON.stringify(inputObject))

      const savedData = await AsyncStorage.getItem(phoneNumber);
    
      if (savedData !== null) {
        // We have data!!
        navigation.navigate('Home', savedData);
        console.log('SAVED to Async!!! = ', JSON.parse(savedData).name);
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
      <View style={styles.authContainer}>
        <ScrollView>
          <View style={styles.logoContainer}>
            <Text style={styles.signupText}>
              Sign up
            </Text>
          </View>

          <Input 
            id="name"
            label="Name"  
            keyboardType="default"  
            required
            name
            autoCapitalize="words"
            errorText="Please enter a valid Name"
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
            required
            minLength={16}
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
            autoCapitalize="none"
            errorText="Passwords do not match"
            onInputChange={inputChangeHandler}
            initialValue=""
            placeholder="Confirm your password"
            style={styles.inputContainer}
            password={formState.inputValues.password}
          />

          <ReferralLink inputChangeHandler={inputChangeHandler}/>
          <RadioButton />
          <SubmitButton title='Sign Up' submitHandler={signupHandler}/>
        
          <View style={styles.bottomText}>
            <View>
              <Text>
                Already have an account?&nbsp;
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Text style={{color: 'red'}}>
                Sign in
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
    alignItems: 'center'
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  signupText: {
    fontSize: 32,
    fontFamily: 'rubik',
    fontWeight: 'bold',
  },
  authContainer: {
    width: '90%',
    height: '100%',
  },
  inputContainer: {
    height: 44,
  },
 
  termsText: {
    color: 'red',
  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  }
});

