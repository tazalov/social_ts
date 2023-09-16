import { FC } from 'react'
import { TitleBlock } from '../../../components/titleBlock/TitleBlock'
import { FriendsT } from '../../../redux/profile/reducer/types'
import { C } from '../../../app/styles/Common.styled'
import { Friend } from './Friend'
import { S } from './Friends.styled'

interface FriendsPT {
  friends: FriendsT | null
  isOwner: boolean
}

export const Friends: FC<FriendsPT> = ({ friends, isOwner }) => {
  const friendsProfile =
    friends?.list.map(el => (
      <Friend key={el.id} id={el.id} name={el.name} avatar={el.photos.small} />
    )) || 'No friends'
  return (
    <S.Friends>
      <TitleBlock title={<>Friends {isOwner ? <span>{friends?.count || 0}</span> : ''}</>} />
      {isOwner ? <S.List>{friendsProfile}</S.List> : <C.Text>User hidden this info</C.Text>}
    </S.Friends>
  )
}
