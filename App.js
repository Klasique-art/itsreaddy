import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ContactsScreen from './app/screens/ContactsScreen';
import AppNavigator from './app/navigation/AppNavigator';
import DrawerNavigator from './app/navigation/DrawerNavigator';
import NoteProvider from './app/contexts/NoteProvider';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import AuthNavigator from './app/navigation/AuthNavigator';

export default function App() {

  return (
  
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
