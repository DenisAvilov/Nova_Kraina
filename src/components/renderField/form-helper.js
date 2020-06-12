import { FieldValidatorTypeString } from './validationForm';
import React from 'react';
import d from '../login/Login.module.css';
import { Field } from 'redux-form'

export const CreatNuwForm = (
              component, validate ,
              name = '', type= '', label= '' ) => {

    return <div className={d.wrapField}>  
              <Field component={component} validate={validate} name={name} type={type} label={label} ></Field> 
           </div>
           
}

