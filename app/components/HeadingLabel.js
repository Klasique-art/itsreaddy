import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import AppText from './AppText';
import colors from '../config/colors';

function HeadingLabel({name}) {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={
            () => navigation.openDrawer()
        }>
            <MaterialCommunityIcons name="menu" color="white" size={30}/>
        </TouchableOpacity>
        <AppText style={styles.text}>{name}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: 50,
    margin: 10,
    marginBottom: 0,
  },
    text: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        flex: 1,
        textTransform: "uppercase",
    }
});

export default HeadingLabel;