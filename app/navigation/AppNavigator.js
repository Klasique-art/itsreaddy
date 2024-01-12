import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import ContactsScreen from '../screens/ContactsScreen'
import HistoryScreen from '../screens/HistoryScreen'
import HomeScreen from '../screens/HomeScreen'
import MessagesScreen from '../screens/MessagesScreen'
import colors from '../config/colors'
import NoteNavigator from './NoteNavigator'

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: colors.primary,
            activeTintColor: colors.decor,
            inactiveBackgroundColor: colors.decor,
            inactiveTintColor: colors.apple,
        }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName
                if (route.name === "Home") {
                    iconName = focused ? "home" : "home-outline"
                } else if (route.name === "Contacts") {
                    iconName = focused ? "person-circle" : "person-circle-outline"
                } else if (route.name === "History") {
                    iconName = focused ? "time" : "time-outline"
                } else if (route.name === "Messages") {
                    iconName = focused ? "chatbubble" : "chatbubble-outline"
                } else if (route.name === "NotesScreen") {
                    iconName = focused ? "book" : "book-outline"
                }
                return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 60,
                position: "absolute",
                bottom: 16,
                left: 16,
                right: 16,
                borderRadius: 16,
                overflow: "hidden",
                elevation: 5,
            },
        })}
    >
        <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                headerShown: false,
            }}
        />
        <Tab.Screen 
            name="Contacts" 
            component={ContactsScreen} 
            options={{
                headerShown: false,
            }}
        />
        <Tab.Screen 
            name="History" 
            component={HistoryScreen} 
            options={{
                headerShown: false,
            }}
        />
        <Tab.Screen 
            name="Messages" 
            component={MessagesScreen} 
            options={{
                headerShown: false,
            }}
        />
        <Tab.Screen 
            name="NotesScreen" 
            component={NoteNavigator} 
            options={{
                headerShown: false,
            }}
        />
    </Tab.Navigator>
  )
}

export default AppNavigator