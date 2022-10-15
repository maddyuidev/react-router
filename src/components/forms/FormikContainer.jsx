import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './Input';
import Select from './Select';
import Radio from './Radio';
import RadioButton from './RadioButton';
import Checkbox from './Checkbox';

const FormikContainer = () => {
    const hobbyOptions = [
        {key: "Option 1", value:'coption1'},
        {key: "Option 2", value:'coption2'},
        {key: "Option 3", value:'coption3'},
        {key: "Option 4", value:'coption4'},
    ]
    const dropDownOptions = [
        {key: "Select an option", value:''},
        {key: "Option 1", value:'option1'},
        {key: "Option 2", value:'option2'},
        {key: "Option 3", value:'option3'},
        {key: "Option 4", value:'option4'},
    ]
    const genderOptions = [
        {key:"Male", value:"male"},
        {key:"Female", value:"female"},
        {key:"Others", value:"Others"},
    ]
    const professionOptions = [
        {key:"Bussiness", value:"business"},
        {key:"Job", value:"job"}
    ]
    const initialValues = {
        name: '',
        selectOption: '',
        gender: 'male',
        profession: 'job',
        hobby: []
    }
    const validationSchema = Yup.object({
        name: Yup.string().required(),
        selectOption: Yup.string().required(),
        gender: Yup.string().required(),
        profession: Yup.string().required(),
        hobby: Yup.array().min(1).required()
    })
    const onSubmit = values => {
        console.log('submitted', values)
    }
    
    return ( 
        <div className='col-6'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik => {
                        // console.log(formik);
                        return (
                            <Form>
                                <Input name="name" label="User Name" />
                                <Select name="selectOption" label="Select an Option" options={dropDownOptions} />
                                <Radio name="gender" label="Select Gender" options={genderOptions} />
                                <RadioButton name="profession" label="Select Profession" options={professionOptions} />
                                <Checkbox name="hobby" label="Select Hobby" options={hobbyOptions} />
                                <button className='btn btn-primary btn-sm' type='submit'>Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
     );
}
 
export default FormikContainer;