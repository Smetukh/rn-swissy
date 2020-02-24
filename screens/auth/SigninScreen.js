import React, { useReducer, useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import Input from '../../components/UI/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SubmitButton from '../../components/UI/SubmitButton';
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

export default SigninScreen = ({ navigation }) => {

  const [signinState, signinSetState] = useState(true);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      name: '',
      password: '',
    },
    inputValidities: {
      name: false,
      password: false,
    },
    formIsValid: false
  });

  const signinHandler = async () => {
    const {name, phone, password, referral} = formState.inputValues;
    if (!name || !password) {
      signinSetState(false);
      return
    }
    

    const phoneNumber = phone.match(/\d/g).join('').toString();

    try {

      const name1 = await AsyncStorage.getItem(phoneNumber);
      if (name1 !== null) {
        navigation.navigate('Home', name1);
        signinSetState(true)
      } else {
        signinSetState(false);

      }
    } catch (error) {
      console.log('error = ', error);
      // Error saving data
    }
  };
  
  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
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
          <View style={styles.containerInner}>
            <View>
              <View style={styles.logoContainer}>
                <Text style={styles.signinText}>
                  Sign in
                </Text>
              </View>
              <Input 
                phone
                id="phone"
                label="Phone"  
                keyboardType="decimal-pad"  
                required
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
              <View style={styles.forgotPasswordText}>
                <Text style={{color: signinState ? "#333333" : Colors.primary}}>
                  Forgot your password?
                </Text>
              </View>
              <SubmitButton title='Sign In' submitHandler={signinHandler}/>
            </View>

            <View style={styles.bottomText}>
              <View>
                <Text>
                  Don't have an account?&nbsp;
                </Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
                <Text style={{color: 'red'}}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
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
  authContainer: {
    width: '90%',
    height: '100%',
  },
  containerInner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  signinText: {
    fontSize: 32,
    fontFamily: 'rubik',
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 44,
  },
  forgotPasswordText: {
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end'

  },
  bottomText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  }
});

