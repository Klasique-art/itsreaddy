import React, {useState} from 'react';
import { View, StyleSheet, useWindowDimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Constants from 'expo-constants';

import Reminders from '../components/Reminders';
import Notes from '../components/Notes';
import colors from '../config/colors';

const renderScene = SceneMap({
  notes: Notes,
  reminders: Reminders,
});

function NotesScreen() {
  const layout = useWindowDimensions()
  const [index, setIndex] = useState(0)

  const [routes] = useState([
    { key: 'notes', title: 'Notes' },
    { key: 'reminders', title: 'Reminders' },
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

export default NotesScreen;