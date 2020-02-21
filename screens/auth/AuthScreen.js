import React from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView, Button } from 'react-native';

export default function AuthScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>+++++ up App.js to start working on your app!</Text>
      <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
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

