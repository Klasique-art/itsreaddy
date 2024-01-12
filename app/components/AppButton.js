import React from 'react';
import { View, StyleSheet , TouchableHighlight} from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function AppButton({name,bgColor=colors.primary,color=colors.decorLite, style, onPress}) {
  return (
    <TouchableHighlight 
        onPress={onPress} 
        style={[styles.button, style, {backgroundColor: bgColor}]}
        underlayColor={colors.goblin}
    >
        <AppText style={[styles.text,{color}]}>{name}</AppText>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: 1,
    }
});

export default AppButton;