import React, {useState} from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppText from './AppText';
import Screen from './Screen';
import colors from '../config/colors';
import FuncButton from './FuncButton';
import formatTime from '../libraries/formatTime';
import { useNotes } from '../contexts/NoteProvider';
import CustomModal from './CustomModal';

function NoteDetails(props) {
    const {item} = props.route.params
    const [showModal, setShowModal] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const {setNotes} = useNotes()

    const deleteNote = async () => {
        try {
            const result = await AsyncStorage.getItem("notes")
            if (result !== null) {
                const updatedNotes = JSON.parse(result).filter(note => note.id !== item.id)
                setNotes(updatedNotes)
                await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes))
                props.navigation.goBack()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleNoteUpdate = async (title, note) => {
        const noteObj = {
            id: item.id,
            title,
            note,
            time: Date.now(),
        }
        try {
            const result = await AsyncStorage.getItem("notes")
            if (result !== null) {
                const updatedNotes = JSON.parse(result).map(note => note.id === item.id ? noteObj : note)
                setNotes(updatedNotes)
                await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes))
                props.navigation.goBack()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const openEditModal = () => {
        setIsEdit(true)
        setShowModal(true)
    }
  return (
    <Screen style={styles.Screen}>
        <ScrollView contentContainerStyle={styles.container}>
            <AppText style={styles.time}>{`Created at ${formatTime(item.time)}`}</AppText>
            <AppText style={styles.title}>{item.title}</AppText>
            <AppText style={styles.note}>{item.note}</AppText>
        </ScrollView>
        <View style={styles.buttonWrapper}>
            <FuncButton
                name="Edit"
                size={25}
                color={colors.wildWillow}
                icon="pencil"
                iconColor={colors.parsley}
                onPress={openEditModal}
            />
            <FuncButton
                name="Delete"
                size={25}
                color={colors.parsley}
                icon="delete"
                iconColor={colors.decor}
                onPress={() => 
                    Alert.alert(
                        "Delete",
                        "Are you sure you want to delete this note?",
                        [
                            {
                                text: "Cancel",
                                style: "cancel"
                            },
                            { text: "OK", onPress: deleteNote }
                        ],
                        { cancelable: true }
                    )
                }
            />
        </View>
        <CustomModal
            visible={showModal}
            onClose={() => setShowModal(false)}
            onSubmit={handleNoteUpdate}
            isEdit={isEdit}
            noteDesc={item}
        />
    </Screen>
  );
}

const height = Dimensions.get("window").height

const styles = StyleSheet.create({
    buttonWrapper: {
        position: 'absolute',
        right: 15,
        justifyContent: 'space-between',
        height: 110,
        top: height - 290,
    },
  container: {
    padding: 10,
    paddingBottom: 100,
  },
    Screen: {
        backgroundColor: colors.decorLite,
        padding: 10,
        paddingTop: 10,
    },
    note: {
        fontSize: 20,
        color: colors.parsley,
        marginBottom: 5,
    },
    time: {
        color: colors.parsley,
        marginBottom: 5,
        textAlign: 'right',
        fontSize: 14,
    },
    title: {
        fontSize: 25,
        textTransform: 'uppercase',
        marginBottom: 10,
        color: colors.primary,
        fontWeight: 'bold',
    }
});

export default NoteDetails;