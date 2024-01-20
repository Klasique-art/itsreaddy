import React from 'react';
import { View, StyleSheet, Dimensions, TouchableHighlight, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Feather } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';
import DeleteActionButton from './DeleteActionButton';

function ContactCard({item, onPress, deletePress, editPress}) {

    const {title, number, desc, email} = item
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={() => <View style={styles.delete}>
        <DeleteActionButton
          onDeletePress={deletePress}
        />
      </View>}>
        <TouchableHighlight style={styles.container} onPress={onPress}>
          <View>
            <View style={styles.head}>
              <AppText numberOfLines={1} style={styles.headTitle}>{title}</AppText>
            </View>
            <View style={styles.body}>
              <View style={styles.info}>
                <AppText numberOfLines={1} style={{
                  color: colors.parsley,
                  fontWeight: 'bold',
                }}>{number}</AppText>
                <AppText numberOfLines={2}>{desc}</AppText>
                <AppText numberOfLines={1} style={{
                  color: colors.parsley,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>{email}</AppText>
              </View>
              <View style={styles.editBox}>
                <TouchableOpacity style={styles.edit} onPress={editPress}>
                  <Feather name="edit" size={26} color={colors.parsley} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const width = Dimensions.get("window").width - 20

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    height: "100%",
  },
  container: {
      borderRadius: 10,
      marginVertical: 10,
      height: 150,
      borderRightColor: 'black',
      backgroundColor: 'white',
      width: width - 10,
      backgroundColor: colors.decor,
      borderRadius: 10,
      overflow: 'hidden',
  },
  edit: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.decorLite,
      width: 50,
      height: 50,
      borderRadius: 25,
      marginTop: 25,
  },
  editBox: {
      alignItems: 'center',
      width: "20%",
      height: "100%",
  },
  head: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors.primary,
      padding: 5,
  },
  headTitle: {
      fontSize: 18,
      color: colors.decorLite,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 1,
  },
  info: {
      gap: 4,
      height: "100%",
      width: "80%",
  },
    time: {
        fontSize: 12,
        color: colors.parsley,
        textAlign: 'right',
    }
});

export default ContactCard;

