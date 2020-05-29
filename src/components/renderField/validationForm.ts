import React from 'react'
import { Field, reduxForm } from 'redux-form'

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

export const required = (value: T0)  => 
(value  ? undefined : 'Обязательное поле')
export const email = (value: T0) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Не валидный email'
    : undefined 
 const minValue = (min: SimvolCount) => (value: SimvolCount) =>
    value && value < min ? `Символов не меньше ${min}` : undefined
//@ts-ignore
 export const minValue5 = minValue(4)

 const minValueSim = (min: SimvolCount) => (value: SimvolCount) =>
    //@ts-ignore
    value && value.length < min ? `Символов не меньше ${min}` : undefined
    //@ts-ignore
 export const minValueSim5 = minValueSim(4)