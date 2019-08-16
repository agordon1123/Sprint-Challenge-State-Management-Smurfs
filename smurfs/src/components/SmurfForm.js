import React, { useState } from 'react';
import Axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SmurfForm = () => {
    const [state, setState] = useState({})
    console.log(state)

    return (
        <div className='form'>
            <Form>
                <Field
                    className='input'
                    type='text'
                    name='name'
                    placeholder='Enter smurf name'
                />
                <Field
                    className='input'
                    type='text'
                    name='age'
                    placeholder='Enter smurf age'
                />
                <Field
                    className='input'
                    type='text'
                    name='height'
                    placeholder='Enter smurf height'
                />
                <button className='button' type='submit'>Add</button>
            </Form>
        </div>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ name, age, height }) {
        return {
            name: name || '',
            age: age || '',
            height: height || ''
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        age: Yup.string()
            .required('Age is required'),
        height: Yup.string()
            .required('Height is required')
    }),

    handleSubmit(values) {
        console.log(values)
        Axios.post('http://localhost:3333/smurfs', values)
            .then(res => {
                console.log('post res: ', res)
            })
            .catch(err => {
                console.log('err: ', err)
                alert('This smurf already exists!', err)
            })
    }
})(SmurfForm);

export default FormikLoginForm;
