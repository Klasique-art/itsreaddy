import React, {useState} from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import {AppForm, AppFormField, SubmitButton} from '../components/form';
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
    email: Yup.string().required("You must enter your email address").email("Please enter your email address").label("Email"),
  })
  

function ForgotPasswordScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/logo.jpg')} style={styles.image}/>
              <AppText style={{color: colors.parsley, marginTop: 10, textAlign: "center"}}>Enter your email. We will send a password reset link.</AppText>
            </View>
            <View style={styles.inputContainer} >
              <AppForm
                initialValues={{email: "",}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
              >
                <AppFormField
                  placeholder="Email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                  placeholderTextColor={colors.parsley}
                  name="email"
                />
                <SubmitButton 
                  name="Send link"
                  color={colors.decorLite}
                  style={{marginTop: 40}}
                />
              </AppForm>
              <View style={styles.infoWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
                  <AppText style={{color: colors.parsley, marginTop: 20}}>Login</AppText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(routes.SIGNUP)}>
                  <AppText style={{color: colors.parsley, marginTop: 20}}>Sign up</AppText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: "100%",
      },
      infoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 10,
      },
      input: {
        backgroundColor: colors.decor,
        color: colors.parsley,
        borderRadius: 10,
        marginVertical: 20,
      },
      inputContainer: {
        height: "70%",
        paddingRight: 5,
      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 75,
      },
      imageContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: "30%",
      },
      screen: {
        backgroundColor: colors.decorLite,
      }
});

export default ForgotPasswordScreen;