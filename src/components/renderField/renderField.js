import React from 'react'
import d from './renderField.module.css'


export const YourField = Tag =>({input, label, type, meta: { touched, error, warning }}) =>
    {
      let errors = touched && error;
     return(

        <div className={d.wrapField + " " + (errors ? d.error : "" ) }>

          <label >{label}</label>

          <div className={d.wrapInput }>  

            {touched && ((error && <span className={  d.error }>{error}</span>) || (warning && <span>{warning}</span>))}

                <Tag {...input} placeholder={label} type={type}  />

          </div>

        </div>
      )
            }

    