import { FC, memo } from 'react'
import { C } from '../../../app/styles/Common.styled'
import { TitleBlock } from '../../../components'
import { FriendsT } from '../../../redux/profile-reducer'
import { Friend } from './Friend'
import { S } from './Friends.styled'

interface FriendsPT {
  friends: FriendsT | null
  isOwner: boolean
}

export const Friends: FC<FriendsPT> = memo(({ friends, isOwner }) => {
  const friendsProfile = friends?.list.map(el => <Friend key={el.id} friend={el} />) || 'No friends'
  return (
    <S.Friends>
      <TitleBlock title={<>Friends {isOwner ? <span>{friends?.count || 0}</span> : ''}</>} />
      {isOwner ? <S.List>{friendsProfile}</S.List> : <C.Text>User hidden this info</C.Text>}
    </S.Friends>
  )
})
