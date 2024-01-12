import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import routes from './routes'

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            presentation: 'transparentModal',
            headerShown: false,
        }}
    >
        <Stack.Screen 
            name={routes.WELCOME} 
            component={WelcomeScreen}
        />
        <Stack.Screen 
            name={routes.LOGIN} 
            component={LoginScreen} 
        />
        <Stack.Screen 
            name={routes.SIGNUP} 
            component={SignUpScreen} 
        />
        <Stack.Screen 
            name={routes.FORGOTPASSWORD} 
            component={ForgotPasswordScreen}
        />
    </Stack.Navigator>
  )
}

export default AuthNavigator