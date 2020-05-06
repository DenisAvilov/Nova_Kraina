import  React  from 'react';


type PhotosType = {
    small: null | string 
    large: null | string 
}
type BriefType ={
    userId?: number,
    shortTitle?: null | string,
    placeStudy?: null | string,
    krayina?: null | string,
    misto?: null | string
}
type PostType =  {
    id?: number
    avatarImg?: null | string
    name?: null | string
    secondName?: null | string
    title?: null | string
    imgPost?: null | string
    like?: null | number
    massenge?: null | string 
}

type ContactsType = {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string
}

let initialState = {
    userId: null as number | null,
    lookingForAJob: null as boolean | null,
    lookingForAJobDescription: null as string | null,
    fullName: null as string | null,
    contacts: {} as ContactsType | null,
    photos: {} as PhotosType,
    post: [] as Array<PostType>,
    briefInformation: {} as BriefType | null,
    placeholder: null as string | string | null,
    fake: null as number | null

}



export type InitialStateType = typeof initialState;



