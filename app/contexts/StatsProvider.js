import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const StatContext = createContext()

const StatProvider = ({children}) => {
    const [contactsNumber, setContactsNumber] = useState(0)

    const getContactsNumber = async () => {
        const contacts = await AsyncStorage.getItem("contacts")
        const parsedContacts = JSON.parse(contacts)
        setContactsNumber(parsedContacts.length)
    }

    useEffect(() => {
        getContactsNumber()
    }, [])
  
    return (
    <StatContext.Provider value={{
        contactsNumber,
        setContactsNumber,
        getContactsNumber
    }}>
        {children}
    </StatContext.Provider>
    )
}

export const useStats = () => useContext(StatContext)

export default StatProvider