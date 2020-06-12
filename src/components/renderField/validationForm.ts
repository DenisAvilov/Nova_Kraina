import React from 'react'
import { Field, reduxForm } from 'redux-form'



export type FieldValidatorTypeString = (value: string) => string | undefined


export const required: FieldValidatorTypeString = (value) =>
  (value ? undefined : 'Обязательное поле')

export const email: FieldValidatorTypeString = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Не валидный email'
    : undefined

const minValue = (min: number): FieldValidatorTypeString => (value) =>
  value && value.length < min ? `Символов не меньше ${min}` : undefined

export const minValue5 = minValue(4)




  type TypeName<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  T extends undefined ? "undefined" :
  T extends Function ? "function" :
  "object";
type T0 = TypeName<string>;  // "string"
type T1 = TypeName<number>;  // "number"
type SimvolCount = T0 & T1; // "number" and "string"


  // const minValueSim = (min: number): FieldValidatorTypeString => (value)   =>
    
  //    value && value < min ? `Символов не меньше ${min}` : undefined
  
  // export const minValueSim5 = minValueSim(4)
