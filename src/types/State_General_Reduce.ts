import { PhotosType } from './State_Profile_Reduce';
import  React  from 'react';
let GeneralType = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | number | null,
    isYou: null as boolean | null,
    isOpen: null as boolean | null,
    captcha:  null as string | null,
    photo: {
      small: null as string | null,
      large: null as string | null
  }
  }

export type GeneralType = typeof GeneralType