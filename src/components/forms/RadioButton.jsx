import { ErrorMessage, Field } from 'formik';
import React from 'react';
import TextError from './TextError';

const RadioButton = ({label, name, options, ...rest}) => {
    return ( 
        <div className='mb-3'>
            <h4>{label}</h4>
            <Field name={name} id="name" {...rest}>
                {
                    ({ field }) => {
                        return options.map(
                            option => (
                                <div className="form-check form-check-inline" key={option.value}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={name}
                                        id={option.value}
                                        {...field}
                                        checked={field.value === option.value}
                                        value={option.value} />
                                    <label className="form-check-label" htmlFor={option.value}>{ option.key }</label>
                                </div>
                            )
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
      );
}
 
export default RadioButton;