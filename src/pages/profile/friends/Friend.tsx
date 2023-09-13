import { FC } from 'react'
import { Avatar } from '../../../components/avatar/Avatar'
import avatar from '../../../assets/images/carrepair.webp'
import { S } from './Friends.styled'

interface FriendPT {
  name: string
}

export const Friend: FC<FriendPT> = ({ name }) => (
  <S.Friend>
    <Avatar img={avatar} w={80} h={80} />
    <S.Name>{name.length > 10 ? `${name.slice(0, 8)}...` : name}</S.Name>
  </S.Friend>
)
