import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/home/ProfileScreen';
import NotificationsScreen from '../screens/home/NotificationsScreen';
import SettingsScreen from '../screens/home/SettingsScreen';
import AuthScreen from '../screens/auth/AuthScreen';
import SigninScreen from '../screens/auth/SigninScreen';


const Stack = createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    );
  }

  export default MyStack;