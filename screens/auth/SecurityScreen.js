import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default SecurityScreen = ({ navigation }) => {


  return (
      <View style={styles.container}>
        <View style={styles.authContainer}>
          <View style={styles.logoContainer}>
            <Text style={styles.signinText}>
            Enter security code
            </Text>
          </View>
          <View style={styles.codeContainer}>
            <FontAwesome name="circle" size={ 22 } color="#C4C4C4" />
            <FontAwesome name="circle" size={ 22 } color="#C4C4C4" />
            <FontAwesome name="circle" size={ 22 } color="#C4C4C4" />
            <FontAwesome name="circle" size={ 22 } color="#C4C4C4" />
          </View>
          <View>
            <View style={styles.numberRow}>
              <Text style={styles.number}>
                1
              </Text>
              <Text style={styles.number}>
                2
              </Text>
              <Text style={styles.number}>
                3
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Text style={styles.number}>
                4
              </Text>
              <Text style={styles.number}>
                5
              </Text>
              <Text style={styles.number}>
                6
              </Text>
            </View>
            <View style={styles.numberRow}>
              <Text style={styles.number}>
                7
              </Text>
              <Text style={styles.number}>
                8
              </Text>
              <Text style={styles.number}>
                9
              </Text>
            </View>
            <View style={styles.numberRow}>
              <View style={styles.action}>
                <TouchableOpacity 
                  onPress={() => navigation.navigate('Signin')}
                >
                  <Text style={{fontSize: 16}}>
                    Forgot?
                  </Text>
                </TouchableOpacity>
              </View> 
              <Text style={styles.number}>
                0
              </Text>
              <View style={styles.action}>
              <TouchableOpacity 
                  onPress={() => navigation.navigate('Signin')}
                >
                  <Ionicons
                  name="ios-finger-print"
                  size={44}
                  color="red"
                />
              </TouchableOpacity>
              </View>
                
            </View>
          </View>
        </View>
      </View>
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
    marginVertical: 40,
  },
  signinText: {
    fontSize: 32,
    fontFamily: 'rubik',
    fontWeight: 'bold',
  },
  authContainer: {
    width: '90%',
    height: '100%',
  },
  codeContainer: {
    marginHorizontal: 100,
    marginVertical: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  numberRow: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  number: {
    fontSize: 36,
    fontFamily: 'rubik',
    fontWeight: 'bold',
  },
  action: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    
  }
});

