import React from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Button } from 'react-native';
import Input from '../../components/UI/Input';

export default AuthScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView 
      behavior='padding'
      keyboardVerticalOffset={50}
      style={styles.container}>
      <Text>Auth +++++ up App.js to start working on your app!</Text>
      <ScrollView>
        <Input 
          id="email"
          label="E-mail"  
          keyboardType="email-address"  
          required
          email
          autoCapitalize="none"
          errorMessage="Please enter a valid email address"
          // onValueChange={() => {}}
          onInputChange={() => {}}
          initialValue=""
        />
        <Input 
          id="password"
          label="password"  
          keyboardType="default"  
          secureTextEntry
          required
          minLength={8}
          autoCapitalize="none"
          errorMessage="Please enter a valid password"
          // onValueChange={() => {}}
          onInputChange={() => {}}
          initialValue=""
        />
        <Button title="Login" color="red" onPress={() => {}} />
        <Button title="Sign up" color="green" onPress={() => {}} />
      </ScrollView>

      <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

