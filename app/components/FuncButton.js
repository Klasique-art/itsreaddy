import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function FuncButton({name="button", onPress, style, color=colors.primary, icon, iconColor=colors.decorLite, size=24}) {
  return (
    <TouchableOpacity 
        onPress={onPress}
        style={[styles.container, style, {backgroundColor: color}]}
    >
        <AppText style={{textTransform: "uppercase", fontSize: 16, color: iconColor}}>{name}</AppText>
        {icon && <MaterialCommunityIcons name={icon} size={size} color={iconColor} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 160,
    borderRadius: 30,
  }
});

export default FuncButton;