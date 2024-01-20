import React, {useState,} from 'react';
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, ScrollView, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../components/AppText';
import SearchInput from '../components/SearchInput';
import colors from '../config/colors';
import FuncButton from '../components/FuncButton';
import ContactCard from '../components/ContactCard';
import ContactsModal from '../components/ContactsModal';
import {useContacts} from '../contexts/ContactProvider'
import { useStats } from '../contexts/StatsProvider';
import SearchNoteFound from '../components/SearchNoteFound';
import Screen from '../components/Screen'

function ContactsScreen() {
  const [modalVisible, setModalVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchNotFound, setSearchNotFound] = useState(false)
  const {contacts, setContacts, loadContacts} = useContacts()
  const {setContactsNumber} = useStats()

  const handleNoteSubmit = async (title, number, desc, email) => {
    const contactObj = {
      id: Date.now(),
      title,
      number,
      desc,
      email,
      time: Date.now(),

    }
    const updatedContacts = [...contacts, contactObj]
    setContacts(updatedContacts)
    setContactsNumber(updatedContacts.length)
    
    await AsyncStorage.setItem("contacts", JSON.stringify(updatedContacts))
  }
  const handleDismissKeyboard = () => {
    Keyboard.dismiss()
  }
  const handleOnSearchInput = async (text) => {
    if(!text.trim()) {
      setSearchQuery("")
      setSearchNotFound(false)
      return await loadContacts() 
    }
    setSearchQuery(text)
    const filteredContacts = contacts.filter(contact => contact.title.toLowerCase().includes(text.toLowerCase()) || contact.email.toLowerCase().includes(text.toLowerCase()) || contact.number.trim().includes(text.trim()))

    if (filteredContacts.length) {
      setContacts([...filteredContacts])
    } else {
      setSearchNotFound(true)
    }
  }
  const handleOnClear = async () => {
    setSearchQuery("")
    setSearchNotFound(false)
    await loadContacts()
  }
  const handleDelete = async (id) => {
    try {
      const newContacts = contacts.filter(item => item.id !== id)
      setContacts(newContacts)
      setContactsNumber(newContacts.length)
      await AsyncStorage.setItem("contacts", JSON.stringify(newContacts))
    } catch (error) {
      console.warn(error)
    }
  }
  
  return (
    <Screen style={styles.screen}>
    <TouchableWithoutFeedback onPress={handleDismissKeyboard} >
    <View style={styles.container}>
      <AppText style={{
        color: colors.parsley,
        fontSize: 20,
        textTransform: 'uppercase',
        marginBottom: 5,
      }}>contacts</AppText>
      {contacts.length ? <View style={styles.searchWrapper}>
      <SearchInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={colors.goblin}
          placeholder="Search contacts"
          value={searchQuery}
          onChangeText={handleOnSearchInput}
          onClear={handleOnClear}
        />
      </View> : null}
      <FuncButton
        name="add contact"
        size={30}
        color={colors.primary}
        style={styles.searchBtn}
        icon="plus"
        iconColor="white"
        onPress={() => setModalVisible(true)}
      />
      {searchNotFound ? <SearchNoteFound text="No contact found" /> : <View style={styles.notesWrapper}>
        <View style={styles.contactsContainer}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {contacts.map(contact =>
              <ContactCard
                key={contact.id}
                item={contact}
                deletePress={() => handleDelete(contact.id)}
                editPress={() => setModalVisible(true)}
              />
            )}
          </ScrollView>
        </View>
      </View>}
      {contacts.length < 1 ? <View style={[styles.emptyNoteContainer, StyleSheet.absoluteFillObject]}>
        <AppText style={styles.emptyNote}>No contacts yet</AppText>
        <MaterialCommunityIcons name="contacts-outline" size={100} color={colors.goblin} />
      </View> : null}
    </View>
    </TouchableWithoutFeedback>
    <ContactsModal 
      visible={modalVisible} 
      onClose={() => setModalVisible(false)} 
      onSubmit={handleNoteSubmit}
    />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  contactsContainer: {
    height: "85%",
  },
  emptyNote: {
    color: colors.goblin,
    fontSize: 40,
    textTransform: 'uppercase',
  },
  emptyNoteContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
  },
  notesWrapper: {
    paddingBottom: 100,
    width: "100%",
    zIndex: 1,
    padding: 5
  },
  screen: {
    paddingTop: 10
  },
  scrollView: {
    width: "100%",
    paddingBottom: 30,
  },
  searchWrapper: {
    height: 80,
    marginBottom: 5,
    justifyContent: 'space-between',
    zIndex: 1,
  },

});

export default ContactsScreen;
