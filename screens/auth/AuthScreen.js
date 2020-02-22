import React from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Input from '../../components/UI/Input';

export default AuthScreen = ({ navigation }) => {
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
            onInputChange={() => {}}
            initialValue=""
            placeholder="Enter your name"
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
            onInputChange={() => {}}
            initialValue=""
            placeholder="Enter your password"
            style={styles.inputContainer}
          />
          <Button title="Login" color="red" onPress={() => {}} />
          <Button title="Sign up" color="green" onPress={() => {}} />
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

