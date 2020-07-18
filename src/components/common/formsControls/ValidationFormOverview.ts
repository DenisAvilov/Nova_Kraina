import React from 'react'
import { Field, reduxForm } from 'redux-form'
//типизированная функция принимает строку и возвращает либо ошибку либо строку
export type ValidationFildType = (value: string ) => string |  undefined

export const required: ValidationFildType = (value) => (value || typeof value === 'number' ? undefined : 'Обезательное поле')
//функция возвращает мой валидатор, а тип принимающих значений типизируем вручную
const maxLength = (max: number):ValidationFildType => (value) => value && value.length > max ? `Не больше ${max} символов` : undefined

export const maxLength15 = maxLength(15)

export const maxLength150 = maxLength(150)

const minLength = (min: number):ValidationFildType => (value) => value && value.length < min ? `Не меньше ${min} символов` : undefined

export const minLength2 = minLength(2)



