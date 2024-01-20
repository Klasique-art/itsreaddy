import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import colors from '../config/colors';
import FuncButton from './FuncButton';


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
        <FuncButton
            name="Logout"
            onPress={() => 
                Alert.alert(
                    "Logout",
                    "Are you sure you want to logout?",
                    [
                        {
                            text: "Cancel",
                            style: "cancel"
                        },
                        { text: "OK" }
                    ],
                    { cancelable: true }
                )
            }
            color={colors.parsley}
            icon="logout"
            style={{
                marginHorizontal: 15,
                borderRadius: 30,
                marginTop: 100,
                // width: 'auto',
            }}
        />
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