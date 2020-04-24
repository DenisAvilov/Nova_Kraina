import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const required = value => 
(value  ? undefined : 'Обязательное поле')
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Не валидный email'
    : undefined 
 const minValue = min => value =>
    value && value < min ? `Символов не меньше ${min}` : undefined
 export const minValue5 = minValue(5)

 const minValueSim = min => value =>
    value && value.length < min ? `Символов не меньше ${min}` : undefined
 export const minValueSim5 = minValueSim(5)