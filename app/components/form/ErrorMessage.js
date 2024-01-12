import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from '../AppText';

function ErrorMessage({error, visible}) {
    if(!visible || !error) return null
  return (
    <View style={styles.errorBox}>
      <AppText style={styles.error}>{error}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  errorBox: {
    backgroundColor: "#f8d7da",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  error: {
    color: "#721c24",
    letterSpacing: 1,
    fontWeight: "bold",
  }
});

export default ErrorMessage;