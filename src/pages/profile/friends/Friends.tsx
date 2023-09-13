import { FC } from 'react'
import { TitleBlock } from '../../../components/titleBlock/TitleBlock'
import { FriendsT } from '../../../redux/profile/reducer/types'
import { Friend } from './Friend'
import { S } from './Friends.styled'

interface FriendsPT {
  friends: FriendsT
}

export const Friends: FC<FriendsPT> = ({ friends }) => (
  <S.Friends>
    <TitleBlock
      title={
        <>
          Friends <span>{friends.count}</span>
        </>
      }
    />
    <S.List>
      {friends.list.map(el => (
        <Friend key={el.id} name={el.name} />
      ))}
    </S.List>
  </S.Friends>
)
