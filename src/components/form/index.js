import React from 'react'
import Header from '../../components/header/index'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css';
import config from '../../config';
import PropTypes from '../../propTypes';

export default function index({selectPost, onSave}) {

    const isDisabled = selectPost.id > 0;
    
    return (
        <>
            <Header text="Add comment"/>
            <div className="form-formik">
                <Formik
                    initialValues={config.getEmptyMessage}
                    validationSchema = {Yup.object().shape(config.getValidationSchema)}
                    onSubmit={fields => {
                        onSave(fields);                        
                    }}
                    render = {({ errors, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                <ErrorMessage name="name" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <Field name="message" type="text" component="textarea" className={'form-control' + (errors.message && touched.message ? ' is-invalid' : '')} />
                                <ErrorMessage name="message" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mr-2" disabled={!isDisabled}>Send</button>
                            </div>
                        </Form>
                    )}
                />
            </div>
        </>
    )
}

index.prototype = {
    selectPost: PropTypes.post,
    onSave: PropTypes.func.isRequired
}