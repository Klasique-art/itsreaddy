import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function AppInput({icon,iconColor, label, style,onPress,height=85, ...otherProps}) {
  return (
    <View style={{
      height: height,
      alignItems: 'center',
    }}>
      <TextInput
          placeholder={label}
          placeholderTextColor={colors.decor}
          {...otherProps}
          style={[styles.input, style]}
      />
      {icon && <MaterialCommunityIcons
        name={icon}
        size={35}
        color={iconColor}
        style={styles.icon}
        onPress={onPress}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 25,
    bottom: 37,
  },
  input: {
    backgroundColor: colors.primary,
    color: colors.decor,
    borderRadius: 10,
    width: "100%",
    padding: 15,
    marginVertical: 5,
    paddingLeft: 20,
    fontSize: 20,
    height: 50,
    fontWeight: "bold",
    textAlignVertical: 'top',
  }
});

export default AppInput;