import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import AppNavigator from './AppNavigator'
import colors from '../config/colors'
import CustomDrawer from '../components/CustomDrawer'
import NoteProvider from '../contexts/NoteProvider'
import ContactProvider from '../contexts/ContactProvider'
import StatProvider from '../contexts/StatsProvider'
import ChangePasswordScreen from '../screens/ChangePasswordScreen'
import routes from './routes'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <StatProvider>
    <ContactProvider>
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
                name={routes.CHANGE_PASSWORD} 
                component={ChangePasswordScreen} 
                options={{
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
        </Drawer.Navigator>
    </NoteProvider>
    </ContactProvider>
    </StatProvider>
  )
}

export default DrawerNavigator