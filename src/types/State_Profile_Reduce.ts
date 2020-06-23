import  React  from 'react';
import { ResultCode } from '../api/Api';


export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
} 
export type BriefType ={
    userId: null | number,
    shortTitle: null | string,
    placeStudy: null | string,
    krayina: null | string,
    misto: null | string
} 
export type PostType =  {  
    id: number
    avatarImg: null | string
    name: null | string
    secondName: null | string
    title: null | string
    imgPost: null | string
    like: null | number
    massenge: null | string 
}

export type PhotosType = {
    small: null | string 
    large: null | string 
}
export type ProfileType = {
    userId:  number,
    lookingForAJob:  boolean,
    lookingForAJobDescription:  string,
    fullName: string ,
    contacts:  ContactsType,
    photos: PhotosType | undefined 
    aboutMe: string
}

export type ResponseType< d = {}, RC = ResultCode > = {
    resultCode: RC
    messages: Array<string>
    data: d
  }



