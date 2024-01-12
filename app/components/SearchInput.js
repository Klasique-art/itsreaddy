import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons';

function SearchInput({style, value,onChangeText,onClear, ...otherProps}) {
  return (
    <View style={[styles.container, style]}>
        <TextInput 
            placeholder="search"
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            {...otherProps}
        />
        {value ? <AntDesign 
                    name='close' 
                    size={25}
                    color={colors.goblin}
                    onPress={onClear}
                    style={styles.icon}
                  /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,

  },
    icon: {
        position: 'absolute',
        right: 20,
        top: 25,
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
        height: 50,
        paddingLeft: 20,
        width: "100%",
        fontSize: 18,
        color: colors.parsley,
    }
});

export default SearchInput;