import * as React from 'react';
import { ItemsType } from '../../redux/friends-reduce';
import Friend from './Friend';

type FriendsType ={
  friends:  Array<ItemsType>  
  usersTracking: Array<number>
  friendUnFollow: (userID: number) => void
  friendFollow: (userID: number) => void  
}
const Friends: React.FC<FriendsType> = (props: FriendsType) => {
let {friends, usersTracking, friendUnFollow, friendFollow} = props
  return (
    <div>
      {friends.map(user =>  <Friend user={user}  key={user.id} usersTracking={usersTracking}
      friendUnFollow={friendUnFollow} friendFollow={friendFollow}
      />  )} 
    </div>
  )
}

export default Friends; 

