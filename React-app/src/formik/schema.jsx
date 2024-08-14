import React from 'react';
import { Formik, Form, Field } from 'formik';
import validationSchema from './Validation';

const Schema = ({ children, initialValues, onSubmit }) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>{children}</Form>
        </Formik>
    );
};

export default Schema;
