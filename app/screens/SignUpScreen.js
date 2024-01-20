import React, {useState} from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton} from '../components/form';
import colors from '../config/colors';
import AppText from '../components/AppText';
import routes from '../navigation/routes';
import DropdownElement from '../components/DropdownElement';

const validationSchema = Yup.object().shape({
    businessName: Yup.string().required("Enter your business name").label("Business name").min(3, "Name too short").max(40, "Name too long"),
    email: Yup.string().required("Please enter your email address").email().label("Email"),
    password: Yup.string().required("You need to create a password").min(8).label("Password").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/, "Must contain at least one uppercase, one lowercase, and one number"),
    confirmPassword: Yup.string().required("Confirm your password").label("Confirm Password").oneOf([Yup.ref('password')], 'Passwords must match')
})

function SignUpScreen({navigation}) {
    const [passwordVisible, setPasswordVisible] = useState(true)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true)

  return (
    <Screen style={styles.screen}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require('../assets/logo.jpg')} style={styles.image}/>
                    <AppText style={{color: colors.parsley, marginTop: 10, textAlign: "center"}}>Create an account</AppText>
                </View>
                <View style={styles.inputContainer} >
                  <View style={styles.formBox}>
                    <AppForm
                        initialValues={{businessName: "", email: "", password: "", confirmPassword: ""}}
                        onSubmit={values => console.log(values)}
                        validationSchema={validationSchema}
                    >
                        <AppFormField
                            placeholder="Business name"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            placeholderTextColor={colors.parsley}
                            name="businessName"
                        />
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
                            style={styles.input}
                            placeholderTextColor={colors.parsley}
                            name="password"
                            icon={passwordVisible ? "eye" : "eye-off"}
                            onPress={() => setPasswordVisible(!passwordVisible)}
                            secureTextEntry={passwordVisible}
                            />
                        <AppFormField
                            placeholder="Confirm Password"
                            textContentType="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.input}
                            placeholderTextColor={colors.parsley}
                            name="confirmPassword"
                            icon={confirmPasswordVisible ? "eye" : "eye-off"}
                            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            secureTextEntry={confirmPasswordVisible}
                        />
                        <DropdownElement />
                        <SubmitButton 
                            name="Sign Up"
                            color={colors.decorLite}
                            style={{marginTop: 30}}
                        />
                    </AppForm>
                  </View>
                  <View style={styles.infoWrapper}>
                      <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
                          <AppText style={{color: colors.parsley, marginTop: 10, fontWeight: "bold"}}>Login</AppText>
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
      formBox: {
        // backgroundColor: "red",
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
      },
      inputContainer: {
        height: "75%",
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
        height: "25%",
      },
      screen: {
        backgroundColor: colors.decorLite,
      }
});

export default SignUpScreen;