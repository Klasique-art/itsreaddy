import React, {useState} from 'react';
import { View, StyleSheet, useWindowDimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import Screen from '../components/Screen';
import VoicemailHistoryScreen from './VoicemailHistoryScreen';
import SmsHistoryScreen from './SmsHistoryScreen';
import colors from '../config/colors';

const renderScene = SceneMap({
  voicemail: VoicemailHistoryScreen,
  sms: SmsHistoryScreen,
});

function HistoryScreen(props) {
  const layout = useWindowDimensions()
  const [index, setIndex] = useState(0)

  const [routes] = useState([
    { key: 'sms', title: 'SMS' },
    { key: 'voicemail', title: 'Voicemail' },
  ])

  return (
    <>
      <StatusBar backgroundColor={colors.parsley} barStyle="light-content" />
      <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          style={{backgroundColor: colors.decorLite}}
      />
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "blue",
  },
    text: {
        color: "white",
        fontSize: 50,
    }
});

export default HistoryScreen;