import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const NoteContext = createContext()

const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState([])

    const loadNotes = async () => {
        try {
          const result = await AsyncStorage.getItem("notes")
          if (result !== null) {
            const parsedNotes = JSON.parse(result);
            const reversedNotes = reverseData(parsedNotes);
            setNotes(reversedNotes);
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
        loadNotes()
      }, [])
  return (
    <NoteContext.Provider value={{
        notes,
        setNotes,
        loadNotes
    }}>
        {children}
    </NoteContext.Provider>
  )
}

export const useNotes = () => useContext(NoteContext)

export default NoteProvider