import React from 'react'
import { Field, reduxForm, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import { ValidationFildType } from '../ValidationFormOverview'
import { SubmitOverviewKeys } from '../../../about/aboutDetail/aboutOverview/AboutOverview'
type OverviewFieldType = {
  meta: WrappedFieldMetaProps

}

const FormControl: React.FC<OverviewFieldType> = ({ meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return <div>
    <div>  {children} {hasError && <span>{error}</span>} </div>
  </div>
}

//Hook обертка над элементом , кастомный компонент
 export const Textarea: React.FC<WrappedFieldProps> = (props) => {
 
   const { meta, input, ...restProps } = props
   return (
     <div>
       <FormControl {...props} > <textarea {...input} {...restProps}/>  </FormControl>
     </div>
   )
 }
export const Input: React.FC<WrappedFieldProps> = (props) => {
 
  const { meta, input, ...restProps } = props
  return (
    <div>
      <FormControl {...props} > <input {...input} {...restProps}/>  </FormControl>
    </div>
  )
}  

// В T передаём любой набор ключей с именами форм.
export function createrField<T extends string>(component: React.FC<WrappedFieldProps>,
  name: T,
  validate: Array<ValidationFildType>,
  placeholder: string | undefined,
  props = {}, text: ''){
  return (<React.Fragment>
    <Field component={component} name={name} validate={validate} placeholder={placeholder} {...props} /> {text}
  </React.Fragment>)

}

  // export const Input:React.FC<WrappedFieldProps> = ( props) =>{
//  const {input, meta,  children} = props
//  return <FormControl {...props} > <input />  </FormControl>
// }
// export const inputOverview:React.FC<OverviewFieldType> = ({  input,  label,  type,  meta: { touched, error, warning } }) => (
//     <div>
//       <label>{label}</label>
//       <div>
//         <input {...input} placeholder={label} type={type} />
//         {touched &&
//           ((error && <span>{error}</span>) ||
//             (warning && <span>{warning}</span>))}
//       </div>
//     </div>
//   )