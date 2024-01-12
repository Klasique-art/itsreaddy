import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function SearchNoteFound(props) {
  return (
    <View style={[styles.container]}>
        <AntDesign name="frowno" size={90} color={colors.parsley} />
        <AppText style={{
            fontSize: 20, 
            color: colors.parsley,
            marginVertical: 20,
            }}>No note found</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -2,
    backgroundColor: colors.wildWillow,
    height: "75%",
    opacity: 0.5,
    borderRadius: 20,
    paddingVertical: 20,
  }
});

export default SearchNoteFound;