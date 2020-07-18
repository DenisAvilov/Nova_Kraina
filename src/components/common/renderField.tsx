import React, { ReactElement } from 'react'
import d from './renderField.module.css'
import { WrappedFieldMetaProps } from 'redux-form';
type renderFieldType = {
  meta: WrappedFieldMetaProps
  label : string | undefined
  type: string
  input : ReactElement<React.Component, React.FC> | null
}


export const renderField:React.FC<any> = (Tag):any  =>({input, label, type, meta: { touched, error }}:renderFieldType) => {
      let errors = touched && error;
     return(
        <div className={d.wrapField + " " + (errors ? d.error : "" ) }>
         {label ? <label >{label}</label> : ''}  
          <div className={d.wrapInput }>  
            {touched && (error && <span className={  d.error }>{error}</span>) }
                <Tag {...input} placeholder={label} type={type}  />
          </div>
        </div>
      )
            }

    