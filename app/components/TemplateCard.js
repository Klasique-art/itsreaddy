import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function TemplateCard({item, onPress, delPress, editPress}) {

  
    const {template} = item
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.head}>
        <MaterialCommunityIcons
            name='pencil'
            size={22}
            color={colors.decorLite}
            onPress={editPress}
          />
        <MaterialCommunityIcons
            name='trash-can'
            size={22}
            color={colors.decorLite}
            onPress={()=>{
                Alert.alert(
                    "Delete Template",
                    "Are you sure you want to delete this template?",
                    [
                        {
                            text: "Cancel",
                            style: "cancel"
                        },
                        { text: "OK", onPress: delPress }
                    ],
                    { cancelable: true }
                );

                }
            }
        />
      </View>
      <View style={styles.body}>
        <AppText numberOfLines={3} style={styles.template}>{template}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const width = Dimensions.get("window").width - 20

const styles = StyleSheet.create({
  body: {
    padding: 5,
  },
  container: {
      borderRadius: 10,
      marginVertical: 5,
      height: 95,
      width: width - 25,
      borderRadius: 10,
      overflow: 'hidden',
      backgroundColor: colors.decorLite,
  },
  head: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 10,
      backgroundColor: colors.primary,
      paddingVertical: 2,
      paddingHorizontal: 10,
  },
  headTitle: {
      fontSize: 14,
      color: colors.decorLite,
      fontWeight: 'bold',
      textTransform: 'uppercase',
  },
  template: {
        fontSize: 14,
        color: colors.parsley,
        fontWeight: 'bold',
    },
    time: {
        fontSize: 12,
        color: colors.parsley,
        textAlign: 'right',
    }
});

export default TemplateCard;