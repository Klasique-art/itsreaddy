import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from '../components/Screen';
import colors from '../config/colors';
import StatCard from '../components/StatCard';
import HeadingLabel from '../components/HeadingLabel';
import AppText from '../components/AppText';

function HomeScreen(props) {
  
  return (
    <Screen style={styles.screen}>
        <HeadingLabel name="Home"/>
        <ScrollView style={styles.container}>
          <View style={styles.statRow}>
            <StatCard 
              title="Messages" 
              value="20" 
              icon="message-processing"
              color={colors.primary}
              iconColor={colors.decorLite}
            />
            <StatCard 
              title="Voicemails" 
              value="1000" 
              icon="voicemail"
              color={colors.primary}
              iconColor={colors.decorLite}
            />
          </View>
          <View >
            <StatCard 
                title="Total Contacts" 
                value="1,000,000" 
                icon="contacts"
                color={colors.primary}
                iconColor={colors.decorLite}
                width='100%'
              />
          </View>
          {/* start */}
          <View style={styles.infoCard}>
            <View style={styles.infoCardHead}>
              <MaterialCommunityIcons name="message-processing" color={colors.decor} size={40}/>
              <AppText style={styles.infoCardHeadText}>Send messages to your customers</AppText>
            </View>
            <View style={styles.infoCardBody}>
              <AppText style={styles.infoCardBodyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe tempora est recusandae in eius quia similique esse pariatur? Cupiditate earum ab dolores est incidunt facere voluptatem soluta vero eaque.</AppText>
              </View>
          </View>
          {/* end */}
          {/* start */}
          <View style={styles.infoCard}>
            <View style={styles.infoCardHead}>
              <MaterialCommunityIcons name="voicemail" color={colors.decor} size={40}/>
              <AppText style={styles.infoCardHeadText}>Send Voicemails</AppText>
            </View>
            <View style={styles.infoCardBody}>
              <AppText style={styles.infoCardBodyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe tempora est recusandae in eius quia similique esse pariatur? Cupiditate earum ab dolores est incidunt facere voluptatem soluta vero eaque.</AppText>
              </View>
          </View>
          {/* end */}
          <View style={{paddingBottom: 160}}>
          {/* start */}
            <View style={styles.infoCard}>
              <View style={styles.infoCardHead}>
                <MaterialCommunityIcons name="history" color={colors.decor} size={40}/>
                <AppText style={styles.infoCardHeadText}>History and notes</AppText>
              </View>
              <View style={styles.infoCardBody}>
                <AppText style={styles.infoCardBodyText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe tempora est recusandae in eius quia similique esse pariatur? Cupiditate earum ab dolores est incidunt facere voluptatem soluta vero eaque.</AppText>
                </View>
            </View>
            {/* end */}
          </View>
        </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
  },
  infoCard: {
    backgroundColor: colors.decor,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    overflow: "hidden",
    marginTop: 15,
  },
  infoCardHead: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
    backgroundColor: colors.primary,
    padding: 10,
  },
  infoCardHeadText: {
    fontSize: 25,
    textTransform: "capitalize",
    color: colors.decorLite,
    fontWeight: "bold",
  },
  infoCardBody: {
    padding: 10,
  },
  infoCardBodyText: {
    color: colors.parsley,
    lineHeight: 25,
  },
  screen: {
    backgroundColor: colors.decorLite,
  },
    text: {
        color: "white",
        fontSize: 50,
    },
    statRow: {
      flexDirection: "row",
      gap: 10,
      width: "100%",
      padding: 10,
      paddingLeft: 0,
    }
});

export default HomeScreen;