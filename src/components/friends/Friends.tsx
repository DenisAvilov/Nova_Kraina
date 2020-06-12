import * as React from 'react';
import { ItemsType } from '../../redux/friends-reduce';
import Friend from './Friend';
import { Pagination } from '../pagination/Pagination';

type FriendsType ={
  friends:  Array<ItemsType>  
  usersTracking: Array<number>
  emailUser: string  | null
  totalCount: number
  page: number
  viewCountPage: (item: number) => void
  friendUnFollow: (userID:  number) => void
  friendFollow: (userID:  number) => void  
  pagination: (page: number) => void
}
const Friends: React.FC<FriendsType> = (props: FriendsType) => {
let {friends, usersTracking, friendUnFollow, friendFollow, totalCount, viewCountPage, page, pagination, emailUser} = props
  return (
    <div>
       <Pagination totalCount={totalCount} viewCountPage={viewCountPage} page={page} pagination={pagination}/> 
      {friends.map(user =>  <Friend emailUser={emailUser}  user={user}  key={user.id} usersTracking={usersTracking}
      friendUnFollow={friendUnFollow} friendFollow={friendFollow}
      />  )} 
       <Pagination totalCount={totalCount} viewCountPage={viewCountPage} page={page} pagination={pagination}/> 
    </div>
  )
}

export default Friends; 

