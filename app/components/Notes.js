import React, {useState,} from 'react';
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, FlatList, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import AppText from './AppText';
import SearchInput from './SearchInput';
import colors from '../config/colors';
import FuncButton from './FuncButton';
import NoteCard from './NoteCard';
import CustomModal from './CustomModal';
import { useNotes } from '../contexts/NoteProvider'; 
import SearchNoteFound from './SearchNoteFound';

function Notes() {
  const [modalVisible, setModalVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchNotFound, setSearchNotFound] = useState(false)
  const {notes, setNotes, loadNotes} = useNotes()
  const navigation = useNavigation()

  const handleNoteSubmit = async (title, note) => {
    const noteObj = {
      id: Date.now(),
      title,
      note,
      time: Date.now(),

    }
    const updatedNotes = [...notes, noteObj]
    setNotes(updatedNotes)
    
    await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes))
  }
  const handleDismissKeyboard = () => {
    Keyboard.dismiss()
  }
  const openNote = (item) => {
    navigation.navigate("NoteDetails", {item})
  }
  const handleOnSearchInput = async (text) => {
    if(!text.trim()) {
      setSearchQuery("")
      setSearchNotFound(false)
      return await loadNotes() 
    }
    setSearchQuery(text)
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(text.toLowerCase()) || note.note.toLowerCase().includes(text.toLowerCase()))

    if (filteredNotes.length) {
      setNotes([...filteredNotes])
    } else {
      setSearchNotFound(true)
    }
  }
  const handleOnClear = async () => {
    setSearchQuery("")
    setSearchNotFound(false)
    await loadNotes()
  }

  return (
    <>
    <TouchableWithoutFeedback onPress={handleDismissKeyboard} >
    <View style={styles.container}>
      <AppText style={{
        color: colors.parsley,
        fontSize: 20,
        textTransform: 'uppercase',
        marginBottom: 5,
      }}>notes</AppText>
      {notes.length ? <View style={styles.searchWrapper}>
      <SearchInput 
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={colors.goblin}
          placeholder="Search note title"
          value={searchQuery}
          onChangeText={handleOnSearchInput}
          onClear={handleOnClear}
        />
      </View> : null}
      <FuncButton
        name="add note"
        size={30}
        color={colors.primary}
        style={styles.searchBtn}
        icon="plus"
        iconColor="white"
        onPress={() => setModalVisible(true)}
      />
      {searchNotFound ? <SearchNoteFound /> : <View style={styles.notesWrapper}>
        <FlatList
            data={notes}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => 
            <NoteCard item={item} onPress={()=> openNote(item)}/>}
        />
      </View>}
      {notes.length < 1 ? <View style={[styles.emptyNoteContainer, StyleSheet.absoluteFillObject]}>
        <AppText style={styles.emptyNote}>No notes yet</AppText>
        <MaterialCommunityIcons name="notebook" size={100} color={colors.goblin} />
      </View> : null}
    </View>
    </TouchableWithoutFeedback>
    <CustomModal 
      visible={modalVisible} 
      onClose={() => setModalVisible(false)} 
      onSubmit={handleNoteSubmit}
    />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
    height: "78%",
    padding: 10,
    paddingBottom: 100,
    width: "100%",
    zIndex: 1,
  },
  searchWrapper: {
    height: 80,
    marginBottom: 5,
    justifyContent: 'space-between',
    zIndex: 1,
  },
});

export default Notes;