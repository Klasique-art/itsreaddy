import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

import AppInput from './AppInput';
import colors from '../config/colors';
import FuncButton from './FuncButton';

function CustomModal({visible, onClose, onSubmit, noteDesc, isEdit}) {
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")

    const handleCloseModal = () => {
        Keyboard.dismiss()
    }
    const handleOnChangeText = (text, valueFor) => {
        if (valueFor === "title") setTitle(text)
        if (valueFor === "note") setNote(text)
    }
    const handleSubmit = () => {
        if(!title.trim() && !note.trim()) return onClose()
        onSubmit(title, note)
        if (!isEdit) {
            setNote("")
            setTitle("")
            
        }
        onClose()
    }
    const closeModal = () => {
        if (!isEdit) {
            setNote("")
            setTitle("")
        }
        onClose()
    }
    useEffect(() => {
        if (isEdit) {
            setTitle(noteDesc.title)
            setNote(noteDesc.note)
        }
    }, [isEdit])
  return (
    <Modal 
        visible={visible}
        animationType="slide"
    >
        <View style={styles.container}>
            <AppInput
                placeholder="Title"
                onChangeText={(text) => handleOnChangeText(text, "title")}
                value={title}
                style={{
                    borderRadius: 10,
                }}
            />
            <AppInput
                placeholder="Note"
                multiline
                style={{
                    padding: 20,
                    height: 150,
                    borderRadius: 10,
                }}
                onChangeText={(text) => handleOnChangeText(text, "note")}
                value={note}
            />
            <View style={styles.buttonWrapper}>
                {title.trim() || note.trim() ? <FuncButton
                    name="Cancel"
                    size={30}
                    color={colors.wildWillow}
                    icon="cancel"
                    iconColor={colors.parsley}
                    onPress={closeModal}
                /> : null}
                <FuncButton
                    name="Done"
                    size={30}
                    color={colors.parsley}
                    icon="check"
                    iconColor={colors.decor}
                    onPress={handleSubmit}
                />
            </View>
            <TouchableWithoutFeedback onPress={handleCloseModal}>
                <View style={[styles.modalBg, StyleSheet.absoluteFillObject]}></View>
            </TouchableWithoutFeedback>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    buttonWrapper: {
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
        zIndex: 1,
        gap: 30,
        marginTop: 100,
    },
    container: {
        paddingHorizontal: 10,
        paddingVertical: 40,
        flex: 1,
    },
    modalBg: {
        flex: 1,
        zIndex: -2,
        backgroundColor: colors.decorLite,
    }
});

export default CustomModal;