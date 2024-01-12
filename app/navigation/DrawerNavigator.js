import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import ContactsScreen from '../screens/ContactsScreen'
import HistoryScreen from '../screens/HistoryScreen'
import MessagesScreen from '../screens/MessagesScreen'
import AppNavigator from './AppNavigator'
import colors from '../config/colors'
import CustomDrawer from '../components/CustomDrawer'
import NoteProvider from '../contexts/NoteProvider'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <NoteProvider>
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: colors.apple,
                    width: 250,
                },
                drawerActiveTintColor: colors.decor,
                drawerActiveBackgroundColor: colors.parsley,
                drawerInactiveTintColor: colors.goblin,
                drawerInactiveBackgroundColor: colors.decor,
                drawerLabelStyle: {
                    fontSize: 16,
                    marginLeft: -22,
                },
                drawerItemStyle: {
                    borderRadius: 16,
                    marginVertical: 8,
                },
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen 
                name="App" 
                component={AppNavigator} 
                options={{
                    title: "Home",
                    headerShown: false,
                    drawerIcon: ({ focused, size, color }) => {
                        let iconName;
                        if (focused) {
                            iconName = "home"
                        } else {
                            iconName = "home-outline"
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                }}
            />
            <Drawer.Screen 
                name="Change Password" 
                component={ContactsScreen} 
                options={{
                    headerShown: false,
                    drawerIcon: ({ focused, size, color }) => {
                        let iconName;
                        if (focused) {
                            iconName = "key"
                        } else {
                            iconName = "key-outline"
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                }}
            />
            <Drawer.Screen 
                name="Logout" 
                component={HistoryScreen} 
                options={{
                    headerShown: false,
                    drawerIcon: ({ focused, size, color }) => {
                        let iconName;
                        if (focused) {
                            iconName = "log-out"
                        } else {
                            iconName = "log-out-outline"
                        }
                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                }}
            />
        </Drawer.Navigator>
    </NoteProvider>
  )
}

export default DrawerNavigator