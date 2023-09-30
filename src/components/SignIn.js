import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './contexts/UserContext';
import { Formik, Field, Form } from 'formik';
import '../styles/Form.css';

const formStyle = {
    margin: '150px 180px 100px 150px'
};

const SignIn = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    return (
        <div style={formStyle}>
            <h2>Please Log in</h2>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    if (user && user.email === values.email && user.password === values.password) {
                        navigate('/Dashboard');
                    } else {
                        alert('Invalid email or password');
                    }
                }}
            >
                <Form>
                    <label htmlFor="email">Email:</label>
                    <Field id="email" name="email" type="email" required />

                    <label htmlFor="password">Password:</label>
                    <Field id="password" name="password" type="password" required />

                    <button type="submit">Sign In</button>
                </Form>
            </Formik>
        </div>
    );
};

export default SignIn;
