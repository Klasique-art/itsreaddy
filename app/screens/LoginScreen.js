import React, {useState} from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import {AppForm, AppFormField, SubmitButton} from '../components/form';
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email("Please enter your email address").label("Email"),
  password: Yup.string().required("Please insert password").min(8).label("Password").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, "Must contain at least one uppercase, one lowercase, and one number."),
})

function LoginScreen({navigation}) {
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  return (
    <Screen style={styles.screen}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/logo.jpg')} style={styles.image}/>
              <AppText style={{color: colors.parsley, marginTop: 20}}>Login to your account</AppText>
            </View>
            <View style={styles.inputContainer} >
              <AppForm
                initialValues={{email: "", password: ""}}
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
                <AppFormField
                  placeholder="Password"
                  textContentType="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={secureTextEntry}
                  style={styles.input}
                  placeholderTextColor={colors.parsley}
                  name="password"
                  icon={secureTextEntry ? "eye" : "eye-off"}
                  onPress={() => setSecureTextEntry(!secureTextEntry)}
                />
                <SubmitButton 
                  name="Login"
                  color={colors.decorLite}
                  style={{marginTop: 40}}
                />
              </AppForm>
              <View style={styles.infoWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate(routes.FORGOTPASSWORD)}>
                  <AppText style={{color: colors.parsley, marginTop: 20}}>Forgot Password?</AppText>
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

export default LoginScreen;