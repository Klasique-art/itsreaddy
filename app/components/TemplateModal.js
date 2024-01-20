import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

import AppInput from './AppInput';
import colors from '../config/colors';
import FuncButton from './FuncButton';

function TemplateModal({visible, onClose, onSubmit, isEdit, templateToEdit}) {
    const [template, setTemplate] = useState("")

    const handleSubmit = () => {
        if(!template.trim()) return onClose()

        if(isEdit){
            onSubmit(template)
            setTemplate("")
        } else {
            onSubmit(template)
            setTemplate("")
        }
        onClose()
    }
    const handleCloseModal = () => {
        Keyboard.dismiss()
    }
    const closeModal = () => {
        if(!isEdit){
            setTemplate("")
        }
        onClose()
    }

    useEffect(() => {
        if(isEdit) {
            setTemplate(templateToEdit.template)
        }
    }, [isEdit])
  return (
    <Modal 
        visible={visible}
        animationType="slide"
    >
        <View style={styles.container}>
            <AppInput
                placeholder="template message"
                placeholderTextColor={colors.parsley}
                onChangeText={text => setTemplate(text)}
                value={template}
                multiline
                style={{
                    borderRadius: 10,
                    height: 150,
                    backgroundColor: colors.decor,
                    color: colors.parsley,
                    fontWeight: "400",
                }}
            />
            <View style={styles.buttonWrapper}>
                {template.trim() ? <FuncButton
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


export default TemplateModal;