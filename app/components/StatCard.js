import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

function StatCard({title, icon, iconColor, color, value, width="50%", ...otherProps}) {
  return (
    <View style={[styles.container, {width: width, backgroundColor: color}]}>
        <View style={styles.head}>
            <AppText style={styles.value} numberOfLines={1}>{value}</AppText>
            <AppText style={[styles.text, {color: iconColor}]} numberOfLines={1}>{title}</AppText>
        </View>
        <MaterialCommunityIcons name={icon} color={iconColor} size={40}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
    height: 130,
    justifyContent: "space-between",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
    head: {
        justifyContent: "space-around",
        width: "70%",
        height: "100%",
    },
    text: {
        color: colors.parsley,
        fontSize: 22,
    },
    value: {
        fontSize: 30,
        fontWeight: "bold",
        color: colors.parsley,
    }
});

export default StatCard;