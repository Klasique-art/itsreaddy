import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function NoteCard({item, onPress}) {

    const {title, note,} = item
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.head}>
        <AppText numberOfLines={2} style={styles.headTitle}>{title}</AppText>
      </View>
      <View style={styles.body}>
        <AppText numberOfLines={3}>{note}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const width = Dimensions.get("window").width - 20

const styles = StyleSheet.create({
  body: {
    padding: 8,
  },
  container: {
      borderRadius: 10,
      marginVertical: 10,
      height: 150,
      borderRightColor: 'black',
      backgroundColor: 'white',
      width: width / 2 - 20,
      backgroundColor: colors.decor,
      borderRadius: 10,
      overflow: 'hidden',
  },
  head: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.primary,
      padding: 8,
  },
  headTitle: {
      fontSize: 14,
      color: colors.decorLite,
      fontWeight: 'bold',
      textTransform: 'uppercase',
  },
    time: {
        fontSize: 12,
        color: colors.parsley,
        textAlign: 'right',
    }
});

export default NoteCard;
