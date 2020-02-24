import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>WELCOME USER</Text>
      <Text style={{color: 'red'}}>
        {JSON.parse(route.params).name}{"\n"}
      </Text>
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

