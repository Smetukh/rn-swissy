import React from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Button } from 'react-native';

export default AuthScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Auth +++++ up App.js to start working on your app!</Text>
      <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

