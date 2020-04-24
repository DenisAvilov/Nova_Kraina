import React from 'react'
import d from './renderField.module.css'
import { Field, reduxForm } from 'redux-form'

export const yourField = Gat =>({input,
    label,
    type,
    meta: { touched, error, warning }}) =>
    {
      let errors = touched && error;
     return(
        <div className={d.wrapField + " " + (errors ? d.error : "" ) }>
          <label >{label}</label>
          <div className={d.wrapInput }>            
            {touched &&
              ((error && <span className={  d.error }>{error}</span>) ||
                (warning && <span>{warning}</span>))}
                <Gat {...input} placeholder={label} type={type}  />
          </div>
        </div>

      )
            }

    