import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';

function Reminders(props) {
  return (
    <View style={styles.container}>
        <AppText>Reminders</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Reminders;