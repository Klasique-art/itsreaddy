import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function AppInput({icon,iconColor, label, style,onPress, ...otherProps}) {
  return (
    <View style={{
      height: 85,
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
    bottom: 20,
  },
  input: {
    backgroundColor: colors.primary,
    color: colors.decor,
    borderRadius: 35,
    width: "100%",
    padding: 15,
    marginVertical: 10,
    paddingLeft: 20,
    fontSize: 20,
    height: 60,
    fontWeight: "bold",
  }
});

export default AppInput;