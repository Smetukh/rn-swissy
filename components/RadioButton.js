import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const RadioButton = props => {
    const [radioButtonState, radioButtonSetState] = useState(false);

    return (
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
                    backgroundColor: Colors.primary,
                  }}/>
                  : null
              }
            </View>
            <View style={styles.bottomText}>
              <Text style={styles.radioButtonText}>
                Please confirm you agree to our&nbsp;
              </Text>
              <TouchableOpacity onPress={() => Alert.alert('Terms & Conditions')} >
                <Text style={styles.termsText}>
                  Terms & Conditions
                </Text>
            </TouchableOpacity>
            </View>
            
          </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: 'row',
        fontSize: 12,
        alignSelf: 'center',
      },
        agreeContainer: {
    
      },
      radioButtonText: {
        marginLeft: 8,
      },
      bottomText: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        alignItems: 'center',
    
      },
})  

export default RadioButton;