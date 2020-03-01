import React from 'react'
import MyFriends from './MyFriends';
import StoreContext from '../../../../StoreContext';


const MyFriendsContainer = (props)=>{
  
    return(
        <StoreContext.Consumer>
            {(store) => {
                
                return <MyFriends user={store.getState().profile} myfriends={store.getState().myfriends}/>
            }}

            

        </StoreContext.Consumer> //Consumer this is ...

    )
   
}

export default MyFriendsContainer;
