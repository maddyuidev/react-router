import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Input = ({label, name, ...rest}) => {
    return ( 
        <div className='mb-3'>
            <label htmlFor={name}>{label}</label>
            <Field className="form-control" name={name} id={name} {...rest} />
            <ErrorMessage name={name} component={TextError}  />
        </div>
     );
}
 
export default Input;