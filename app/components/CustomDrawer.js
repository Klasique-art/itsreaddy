import React from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import colors from '../config/colors';


function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
        <ImageBackground 
            source={require('../assets/bg.jpg')}
            style={styles.userBg}
        >
            <Image 
                source={require('../assets/pic.jpg')}
                style={styles.userImg}
            />
        </ImageBackground>
        <View>
            <DrawerItemList {...props} />
        </View>
    </DrawerContentScrollView>

  );
}

const styles = StyleSheet.create({
  userImg: {
    height: 140,
    width: 140,
    borderRadius: 70,
    borderWidth: 5,
    borderColor: colors.decor,
  },
    userBg: {
        height: 150,
        marginBottom: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CustomDrawer;