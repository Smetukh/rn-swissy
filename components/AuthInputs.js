import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, KeyboardAvoidingView, Button, AsyncStorage } from 'react-native';
import Input from './UI/Input';

const AuthInputs = props => {

    return (
        <>
            <Input 
                id="name"
                label="Name"  
                keyboardType="default"  
                required
                name
                autoCapitalize="words"
                errorText="Please enter a valid Name"
                onInputChange={props.inputChangeHandler}
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
                autoCapitalize="none"
                errorText="Please enter a valid phone number"
                onInputChange={props.inputChangeHandler}
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
                onInputChange={props.inputChangeHandler}
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
                onInputChange={props.inputChangeHandler}
                initialValue=""
                placeholder="Confirm your password"
                style={styles.inputContainer}
                password={props.password}
            />
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 44,
      },
})  

export default AuthInputs;