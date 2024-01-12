import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';


function VoicemailHistoryScreen(props) {
  return (
    <View style={styles.container}>
        <AppText>Voicemail History</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default VoicemailHistoryScreen;