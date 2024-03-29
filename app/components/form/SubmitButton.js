import React from 'react';
import { useFormikContext } from 'formik'

import AppButton from '../AppButton';

function SubmitButton({title,style,...otherProps}) {
  const { handleSubmit } = useFormikContext()

  return (
    <AppButton name={title} style={style} {...otherProps} onPress={handleSubmit}/>
  );
}


export default SubmitButton;