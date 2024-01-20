import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SelectContactScreen from '../screens/SelectContactScreen'
import MessagesScreen from '../screens/MessagesScreen'
import colors from '../config/colors'
import routes from './routes'

const Stack = createStackNavigator()

const MessagesNavigator = () => {
  return ( 
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.primary,
                elevation: 0,
                shadowOpacity: 0,
            },
            headerTintColor: colors.decorLite,
        }}
    >
        <Stack.Screen 
            name={routes.SMS_SCREEN} 
            component={MessagesScreen} 
            options={{headerShown: false}} 
        />
        <Stack.Screen 
            name="Select Contact" 
            component={SelectContactScreen} 
            options={{
                title: "Select Contact(s)",
            }}
        />
    </Stack.Navigator>
  )
}

export default MessagesNavigator