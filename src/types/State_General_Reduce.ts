
import { type } from 'os';
import  React  from 'react';
let GeneralType = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | number | null,
    isYou: null as boolean | null,
    isOpen: null as boolean | null
  }

export type GeneralType = typeof GeneralType