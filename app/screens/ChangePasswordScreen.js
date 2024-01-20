import React from 'react';
import { View, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import colors from '../config/colors';

function ChangePasswordScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppText>ChangePasswordScreen</AppText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
     backgroundColor: colors.decorLite, 
    }
});

export default ChangePasswordScreen;