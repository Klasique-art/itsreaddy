import React from 'react'
import { useFormikContext } from 'formik'
import { View, StyleSheet } from 'react-native'

import AppInput from '../AppInput'
import ErrorMessage from './ErrorMessage'

const AppFormField = ({name, ...otherProps}) => {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext()

  return (
    <View style={styles.form}>
      <AppInput 
        onChangeText={handleChange(name)}
        onBlur={()=> setFieldTouched(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    gap: -20,
    marginBottom: -5,
  }
})

export default AppFormField