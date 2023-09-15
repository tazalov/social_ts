import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '../../../components/avatar/Avatar'
import noAvatar from '../../../assets/images/carrepair.webp'
import { S } from './Friends.styled'

interface FriendPT {
  id: number
  name: string
  avatar: string | null
}

export const Friend: FC<FriendPT> = ({ id, name, avatar }) => (
  <Link to={`/profile/${id}`}>
    <S.Friend>
      <Avatar img={avatar || noAvatar} w={80} h={80} />
      <S.Name>{name.length > 10 ? `${name.slice(0, 8)}...` : name}</S.Name>
    </S.Friend>
  </Link>
)
