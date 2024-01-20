import React, {useState} from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import ContactSelectCard from '../components/ContactSelectCard';
import colors from '../config/colors';
import FuncButton from '../components/FuncButton';
import AppText from '../components/AppText';
import SearchInput from '../components/SearchInput';
import SearchNoteFound from '../components/SearchNoteFound';
import routes from '../navigation/routes';

const contacts = [
  {
    id: 1,
    name: "John Doe",
    number: "08012345678",
    email: "feboapong@gmail.com",
  },
  {
    id: 2,
    name: "Ora",
    number: "08012345678",
    email: "de@hot.kh",
  },
  {
    id: 3,
    name: "Klasique",
    number: "08012345678",
    email: "tunpewud@we.lk",
  },
  {
    id: 4,
    name: "Cynthia",
    number: "08012345678",
    email: "zilale@bari.gq",
  },
  {
    id: 5,
    name: "Linnie",
    number: "08012345678",
    email: "cev@eh.sl",
  },
]

function SelectContactScreen({navigation}) {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedContacts, setSelectedContacts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [contactData, setContactData] = useState(contacts)
  const [searchNotFound, setSearchNotFound] = useState(false)

  const handleSelectAll = () => {
    setSelectAll(!selectAll)
    if(selectAll === false){
      setSelectedContacts(contacts.map(contact => contact.id))
      return
    } else {
      setSelectedContacts([])
    }

  }
  const handleSendMessage = () => {
    if(selectedContacts.length === 0) return alert("Please select a contact")
    navigation.navigate(routes.SMS_SCREEN)
  }

  const handleContactSelect = (contact) => {
    if(selectedContacts.includes(contact.id)){
      setSelectedContacts(selectedContacts.filter(itemId => itemId !== contact.id))
      return
    }
    setSelectedContacts([...selectedContacts, contact.id])
  }
  const getSelectedContacts = contact => selectedContacts.includes(contact.id)
  const handleOnSearchInput = (text) => {

    setSearchQuery(text)
    if(!text.trim()) {
      setSearchQuery("")
      setSearchNotFound(false)
    }
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(text.toLowerCase()) || contact.number.toLowerCase().includes(text.toLowerCase()) || contact.email.toLowerCase().includes(text.toLowerCase()))

    if(filteredContacts.length) {
      setContactData([...filteredContacts])
    } else {
      setSearchNotFound(true)
    }

  }
  
  const handleOnClear = () => {
    setSearchQuery("")
    setContactData(contacts)
    setSearchNotFound(false)
  }

  return (
    <>
      <View style={styles.contactWrapper}>
        {contactData.length > 0 ? <SearchInput
          placeholder="Search contact"
          value={searchQuery}
          onChangeText={handleOnSearchInput}
          onClear={handleOnClear}
        />: null}
          {searchNotFound ? <SearchNoteFound text='No contacts found' />: <ScrollView contentContainerStyle={styles.container}>
          {contactData.length === 0 && <AppText style={{
            color: colors.parsley,
            fontSize: 20,
            textTransform: 'uppercase',
            marginBottom: 5,
          }}>No contacts</AppText>

          }
          {contactData.map(contact => (
            <ContactSelectCard
              key={contact.id}
              name={contact.name}
              number={contact.number}
              email={contact.email}
              onPress={()=> handleContactSelect(contact)}
              selected={getSelectedContacts(contact)}
            />
          ))} 
        </ScrollView>}
        
    </View>
    {contactData.length > 0 && <View style={styles.buttonBox}>
      <FuncButton
        name='Send'
        onPress={handleSendMessage}
        icon="send"
      />
      <TouchableOpacity style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        }}
        onPress={handleSelectAll}
      >
        <View style={styles.checkbox}>
           <AppText style={{color: colors.parsley}}>{selectAll === true ? '✔' : null}</AppText>
        </View>
        <AppText>Select all</AppText>
      </TouchableOpacity>
    </View>}
    </>
  );
}

const height = Dimensions.get("window").height

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingBottom: 30,
    overflow: 'hidden',
  },
  contactWrapper: {
    height: height - 200,
    paddingTop: 10, 
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  buttonBox: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
    backgroundColor: colors.decorLite,
    flexDirection: 'row-reverse',
    gap: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  checkbox: {
    width: 40,
    height: 40,
    borderRadius: 5,
    padding: 5,
    borderWidth: 4,
    borderColor: colors.parsley,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    backgroundColor: colors.decorLite,
  }
});

export default SelectContactScreen;
