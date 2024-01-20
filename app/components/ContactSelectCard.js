import React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

function ContactSelectCard({name, number, email, onPress, selected}) {
  return (
    <TouchableHighlight 
        underlayColor="rgba(0,180,0,0.3)"
        onPress={onPress}
        style={{
            backgroundColor: colors.decor,
            borderRadius: 10,
            marginBottom: 10,
            padding: 10,
        }}
    >
        <View style={styles.card}>
            <View style={styles.contactInfoBox}>
                <AppText style={styles.contactName} numberOfLines={1}>{name}</AppText>
                <AppText style={styles.contactNumber}>{number}</AppText>
                <AppText style={styles.contactEmail}>{email}</AppText>
            </View>
            <View style={styles.selectCircleBox}>
                <View style={[styles.selectCircle, selected ? {backgroundColor: colors.apple} : null]}/>
            </View>
        </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contactInfoBox: {
        flex: 1,
        gap: 5,
  },
    contactName: {
        fontWeight: 'bold',
        fontSize: 18,
        color: colors.parsley,
    },  
    contactNumber: {
        fontSize: 16,
        color: colors.parsley,
    },
    contactEmail: {
        fontSize: 14,
        color: colors.parsley,
        fontWeight: 'bold',
    },
  selectCircleBox: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
    },
    selectCircle: {
        width: 30,
        height: 30,
        overflow: 'hidden',
        borderRadius: 50,
        borderWidth: 4,
        borderColor: colors.parsley,
    }
});

export default ContactSelectCard;