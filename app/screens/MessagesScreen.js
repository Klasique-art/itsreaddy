import React, {useState} from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import VoicemailScreen from './VoicemailScreen';
import SmsScreen from './SmsScreen';
import colors from '../config/colors';

const renderScene = SceneMap({
  sms: SmsScreen,
  voicemail: VoicemailScreen,
});

function MessagesScreen(props) {
  const layout = useWindowDimensions()
  const [index, setIndex] = useState(0)

  const [routes] = useState([
    { key: 'sms', title: 'Compose SMS' },
    { key: 'voicemail', title: 'Compose Voicemail' },
  ])

  return (
    <>
    <StatusBar backgroundColor={colors.primary} />
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

export default MessagesScreen;