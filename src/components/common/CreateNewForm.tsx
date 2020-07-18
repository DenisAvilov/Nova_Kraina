import React, { ReactElement, Component, FC } from 'react'
import { FieldValidatorTypeString } from './validationForm'
import d from '../login/Login.module.css'
import { Field } from 'redux-form'
import { LoginFormValuesType } from '../login/LoginContainer'
//component либо Компонента ибо строка

export const сreateNewForm = ( component: ReactElement<React.Component, React.FC> | null ,   validate: Array<FieldValidatorTypeString>, 
    name: string,  type: string,  label: string | undefined, ) => {

   return <div className={d.wrapField}>
      <Field component={component} validate={validate} name={name} type={type} label={label}></Field>
   </div>

}

// ReactElement<any, any> | null
//string | React.Component | React.FC 