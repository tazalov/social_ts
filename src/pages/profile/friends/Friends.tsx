import { FC, memo } from 'react'

import { Friend } from './Friend'
import { S } from './Friends.styled'

import { TitleBlock } from '../../../components'
import { FriendsT } from '../../../redux/profile-reducer'

interface FriendsPT {
  friends: FriendsT | null
}

export const Friends: FC<FriendsPT> = memo(({ friends }) => {
  const friendsProfile = friends?.list.map((el) => <Friend key={el.id} friend={el} />) || 'No friends'
  return (
    <S.Friends>
      <TitleBlock title={'My friends'} />
      <S.List>{friendsProfile}</S.List>
    </S.Friends>
  )
})
