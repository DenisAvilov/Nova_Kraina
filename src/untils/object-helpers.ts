import { ItemsType } from './../redux/friends-reduce';



export const trackUsers  = (array: Array<ItemsType>, id: string, usersId: number, followed: {} )=> {
   return array.map( (el: any) => {
        if (el[id]  === usersId) { return { ...el, ...followed } }
       return el;
    })

}

