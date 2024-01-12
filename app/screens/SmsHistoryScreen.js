import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

function SmsHistoryScreen(props) {
  return (
    <View style={styles.container}>
      <AppText>SMS History</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default SmsHistoryScreen;