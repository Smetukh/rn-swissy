import React from 'react';
import { Platform, View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

import Colors from '../../constants/Colors';

const SubmitButton = props => {
  return (
    <>
    <TouchableOpacity onPress={props.submitHandler}>
      <View style={styles.buttonContainer} >
        <Text style={styles.buttonText} >{props.title}</Text>
      </View>
      
    </TouchableOpacity>
    {/* <Button
      {...props}
      // IconComponent={Ionicons}
      iconSize={50}
      color={Platform.OS === 'android' ? Colors.primary : 'white'}
    /> */}
    </>
  );
  
};
const styles = StyleSheet.create({
  buttonContainer: {
    // outerWidth: 50,
    height: 50, 
    marginVertical: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: Colors.primary,
    justifyContent:'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'rubik',
    fontWeight: 'bold',
    fontStyle: 'normal',
  }
})
export default SubmitButton;
