import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

import AppInput from './AppInput';
import colors from '../config/colors';
import FuncButton from './FuncButton'; 
import Screen from './Screen';

function ContactsModal({visible, onClose, onSubmit, noteDesc, isEdit}) {
    const [title, setTitle] = useState("")
    const [number, setNumber] = useState("") 
    const [desc, setDesc] = useState("")
    const [email, setEmail] = useState("")

    const handleCloseModal = () => {
        Keyboard.dismiss()
    }
    const handleOnChangeText = (text, valueFor) => {
        if (valueFor === "title") setTitle(text)
        if (valueFor === "number") setNumber(text)
        if (valueFor === "desc") setDesc(text)
        if (valueFor === "email") setEmail(text)
    }
    const handleSubmit = () => {
        if(!title.trim() && !number.trim() && !desc.trim() && !email.trim()) return onClose()
        onSubmit(title, number, desc, email)
        if (!isEdit) {
            setNumber("")
            setTitle("")
            setDesc("")
            setEmail("")
        }
        onClose()
    }
    const closeModal = () => {
        if (!isEdit) {
            setNumber("")
            setTitle("")
            setDesc("")
            setEmail("")
        }
        onClose()
    }
    useEffect(() => {
        if (isEdit) {
            setTitle(noteDesc.title)
            setNumber(noteDesc.number)
            setDesc(noteDesc.desc)
            setEmail(noteDesc.email)
        }
    }, [isEdit])
    
  return (
    <Modal 
        visible={visible}
        animationType="slide"
    >
        <View style={styles.container}>
            <AppInput
                placeholder="Name"
                onChangeText={(text) => handleOnChangeText(text, "title")}
                value={title}
                style={{
                    borderRadius: 10,
                }}
                height={65}
            />
            <AppInput
                placeholder="Number"
                style={{
                    padding: 10,
                    borderRadius: 10,
                }}
                onChangeText={(text) => handleOnChangeText(text, "number")}
                value={number}
                keyboardType="number-pad"
                height={65}
            />
            <AppInput
                placeholder="Email"
                style={{
                    padding: 10,
                    borderRadius: 10,
                }}
                onChangeText={(text) => handleOnChangeText(text, "email")}
                value={email}
                keyboardType="email-address"
                height={65}
            />
            <AppInput
                placeholder="Description"
                multiline
                style={{
                    padding: 20,
                    height: 150,
                    borderRadius: 10,
                }}
                onChangeText={(text) => handleOnChangeText(text, "desc")}
                value={desc}
            />
            <View style={styles.buttonWrapper}>
                {title.trim() || number.trim() || email.trim() || desc.trim() ? <FuncButton
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

export default ContactsModal;
