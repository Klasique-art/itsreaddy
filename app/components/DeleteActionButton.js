import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function DeleteActionButton({onDeletePress}) {
  return (
    <TouchableWithoutFeedback onPress={onDeletePress} >
        <View style={styles.container}>
            <MaterialCommunityIcons name='trash-can' size={50} color={colors.parsley}/>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
});

export default DeleteActionButton;