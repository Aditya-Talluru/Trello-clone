import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const formStyle = {
    margin: '70px 120px 150px 160px'
  }

  return (
    <div style={formStyle}>
      <h1>Please Register</h1>
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={Yup.object({
        firstName: Yup
        .string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup
            .string()
            .required('Please Enter your password')
            .matches(
              /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
              "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
        confirmPassword: Yup
        .string()
        .required("Please confirm your password")
        .oneOf([Yup.ref("password")], "Passwords do not match")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setUser(values);  
        navigate('/signin');
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />
        <br />
        <label htmlFor="email">Email Address</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
        <br />
        <label htmlFor='password'>Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />
        <br />
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <Field name="confirmPassword" type="password" />
        <ErrorMessage name="password" />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  );
};

export default SignUp;