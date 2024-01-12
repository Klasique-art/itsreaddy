import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Animated, Easing, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors';
import Screen from '../components/Screen';
import routes from '../navigation/routes';

function WelcomeScreen({navigation}) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = () => {
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 19000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        spinValue.setValue(0);
        spin();
      });
    };

    spin();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Animated.Image
          style={[styles.logo, { transform: [{ rotate: spin }] }]}
          source={require('../assets/logo.jpg')}
        />
        <Text style={styles.header}>ITSREADDY APP</Text>
      </View>
      <View style={styles.navBox}>
        <Text style={styles.header}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)} style={styles.nextBtn}>
          <AntDesign name="right" size={30} color={colors.decor} />
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: "65%",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  desc: {
    fontSize: 16,
    color: colors.parsley,
    textAlign: 'center',
    width: '80%',
  },
  header: {
    fontSize: 30,
    fontWeight: '900',
    color: colors.parsley,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  navBox: {
    width: '100%',
    height: "35%",
  },
  nextBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.goblin,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  screen: {
    backgroundColor: colors.decor,
  }
});

export default WelcomeScreen;
