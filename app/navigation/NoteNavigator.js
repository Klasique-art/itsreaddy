import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import NotesScreen from '../screens/NotesScreen'
import NoteDetails from '../components/NoteDetails'
import colors from '../config/colors'

const Stack = createStackNavigator()

const NoteNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.primary,
            },
            headerTintColor: colors.decorLite,
            headerTitleStyle: {
                fontSize: 24,
                letterSpacing: 1,
                textTransform: "uppercase",
            },
        }}
    >
        <Stack.Screen 
            name="Notes" 
            component={NotesScreen} 
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name="NoteDetails" 
            component={NoteDetails} 
            options={{
                title: "Note Details",
            }}
        />
    </Stack.Navigator>
  )
}

export default NoteNavigator