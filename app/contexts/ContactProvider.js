import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ContactContext = createContext()

const ContactProvider = ({children}) => {
    const [contacts, setContacts] = useState([]) 

    const loadContacts = async () => {
        try {
          const result = await AsyncStorage.getItem("contacts")
          if (result !== null) {
            const parsedContacts = JSON.parse(result);
            const reversedContacts = reverseData(parsedContacts);
            setContacts(reversedContacts);
          }
        } catch (error) {
          console.log(error)
        }
      } 

      const reverseData = (data) => {
        return data.sort((a, b) => {
          const aInt = parseInt(a.time);
          const bInt = parseInt(b.time);
    
          if (aInt - bInt) return -1;
          if (aInt === bInt) return 0;
          if (aInt > bInt) return -1;
        });
      };    

      useEffect(() => {
        loadContacts()
      }, []) 
  return (
    <ContactContext.Provider value={{
        contacts,
        setContacts,
        loadContacts
    }}>
        {children}
    </ContactContext.Provider>
  )
}

export const useContacts = () => useContext(ContactContext)

export default ContactProvider
