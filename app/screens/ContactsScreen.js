import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Screen from '../components/Screen';

function ContactsScreen(props) {
  return (
    <Screen style={styles.screen}>
        <Text style={styles.text}>Contacts</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "red",
  },
    text: {
        color: "white",
        fontSize: 50,
    }
});

export default ContactsScreen;