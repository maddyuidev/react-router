import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const Select = ({label, name, options, ...rest}) => {
    return ( 
        <div className='mb-3'>
            <label className='form-label' htmlFor={name}>{label}</label>
            <Field as="select" name={name} id={name} {...rest}>
                {
                    options.map(option => {
                        return (
                            
                            <option key={option.value} value={option.value}>{ option.key }</option>
                        )
                    }
                    )
                }
            </Field>
            <ErrorMessage name={name} component={TextError}  />
        </div>
     );
}
 
export default Select;